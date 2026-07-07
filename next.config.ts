import type { NextConfig } from "next";
import createNextIntlPlugin from "next-intl/plugin";
import path from "path";
import { fileURLToPath } from "url";

const withNextIntl = createNextIntlPlugin("./src/i18n/request.ts");

const projectDir = path.dirname(fileURLToPath(import.meta.url));
const modernPolyfill = path.join(projectDir, "src/lib/modern-polyfill.js");
const modernPolyfillAlias = "./src/lib/modern-polyfill.js";

const nextConfig: NextConfig = {
  experimental: {
    // Inlines Tailwind CSS in <head> to remove render-blocking stylesheet requests (LCP).
    inlineCss: true,
  },
  turbopack: {
    resolveAlias: {
      "../build/polyfills/polyfill-module": modernPolyfillAlias,
      "next/dist/build/polyfills/polyfill-module": modernPolyfillAlias,
    },
  },
  webpack(config) {
    config.resolve.alias = {
      ...config.resolve.alias,
      "../build/polyfills/polyfill-module": modernPolyfill,
      "next/dist/build/polyfills/polyfill-module": modernPolyfill,
    };
    return config;
  },
};

export default withNextIntl(nextConfig);
