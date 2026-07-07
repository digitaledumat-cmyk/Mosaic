"use client";

import { useEffect } from "react";

const FONT_STYLE_ID = "mozaic-display-font";

export default function DeferredDisplayFont() {
  useEffect(() => {
    if (document.getElementById(FONT_STYLE_ID)) return;

    const load = () => {
      const style = document.createElement("style");
      style.id = FONT_STYLE_ID;
      style.textContent = `
        @font-face {
          font-family: "Bricolage Grotesque";
          font-style: normal;
          font-weight: 800;
          font-display: swap;
          src: url("/fonts/bricolage-800.woff2") format("woff2");
        }
        .font-display {
          font-family: "Bricolage Grotesque", system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
        }
      `;
      document.head.appendChild(style);
    };

    if ("requestIdleCallback" in window) {
      requestIdleCallback(load, { timeout: 2000 });
    } else {
      setTimeout(load, 1);
    }
  }, []);

  return null;
}
