import type { NextConfig } from "next";
import { defaultLocale } from "./src/i18n/locales";

const nextConfig: NextConfig = {
  redirects: async () => [
    // Legacy unprefixed docs URLs (pre locale-in-URL) keep working. Also 307 —
    // a cached 308 would pin these bookmarks to /en for the same reason as "/".
    { source: "/docs", destination: `/${defaultLocale}/docs`, permanent: false },
    { source: "/docs/:slug*", destination: `/${defaultLocale}/docs/:slug*`, permanent: false },
  ],
};

export default nextConfig;
