// Minimal runtime polyfill kept for Next.js baseline browsers (Safari 16.4+).
// Legacy Baseline 2020 polyfills are omitted to save ~14 KiB on modern clients.
if (!("canParse" in URL)) {
  URL.canParse = function (url, base) {
    try {
      new URL(url, base);
      return true;
    } catch {
      return false;
    }
  };
}
