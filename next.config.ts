import type { NextConfig } from "next";
import { defaultLocale } from "./src/i18n/locales";

const nextConfig: NextConfig = {
  redirects: async () => [
    // Every page lives under /[locale]; the bare root goes to the default locale.
    // Temporary (307), not permanent: browsers cache 308s forever, which would pin
    // returning visitors to /en if smarter root-locale detection lands later.
    { source: "/", destination: `/${defaultLocale}`, permanent: false },
    // Legacy unprefixed docs URLs (pre locale-in-URL) keep working. Also 307 —
    // a cached 308 would pin these bookmarks to /en for the same reason as "/".
    { source: "/docs", destination: `/${defaultLocale}/docs`, permanent: false },
    // The "predictive-prefetch" guide was renamed to "applications". Permanent (308):
    // the slug is genuinely retired, so consolidate old bookmarks and search rank.
    // Must precede the "/docs/:slug*" catch-all below — first matching rule wins.
    { source: "/:locale/docs/predictive-prefetch", destination: "/:locale/docs/applications", permanent: true },
    { source: "/docs/predictive-prefetch", destination: `/${defaultLocale}/docs/applications`, permanent: true },
    { source: "/docs/:slug*", destination: `/${defaultLocale}/docs/:slug*`, permanent: false },
  ],
};

export default nextConfig;
