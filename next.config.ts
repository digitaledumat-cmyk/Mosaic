import type { NextConfig } from "next";
import createNextIntlPlugin from "next-intl/plugin";

const withNextIntl = createNextIntlPlugin("./src/i18n/request.ts");

const nextConfig: NextConfig = {
  experimental: {
    // Inlines Tailwind CSS in <head> to remove render-blocking stylesheet requests (LCP).
    inlineCss: true,
  },
};

export default withNextIntl(nextConfig);
