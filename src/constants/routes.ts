/**
 * Single source of truth for every in-app route and external URL. No route
 * literal ("/docs", "/") may appear anywhere else in the codebase — components
 * and constants reference `appRoutes` / `externalUrls` instead.
 */

const appRoutes = {
  home: "/",
  docs: "/docs",
  llmsText: "/llms.txt",
  docsSlug: (slug: string) => `/docs/${slug}`,
} as const;

/** Off-site destinations (repo, package registry). */
const externalUrls = {
  github: "https://github.com/Intent-Link/intent-link-npm",
  npm: "https://www.npmjs.com/package/intent-link",
} as const;

export { appRoutes, externalUrls };
