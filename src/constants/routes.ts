import { defaultLocale, locales, type Locale } from "@/i18n/locales";

/**
 * Single source of truth for every in-app route and external URL. No route
 * literal ("/docs", "/") may appear anywhere else in the codebase — components
 * and constants reference `appRoutes` / `externalUrls` instead. Paths are
 * canonical (locale-free); pages are served locale-prefixed via `localePath`.
 */

const appRoutes = {
  home: "/",
  docs: "/docs",
  llmsText: "/llms.txt",
  docsSlug: (slug: string) => `/docs/${slug}`,
} as const;

/** Routes served outside the [locale] tree (LLM feed) — never locale-prefixed. */
const localeFreePaths: readonly string[] = [appRoutes.llmsText];

/** True for plain-document routes (LLM feeds) that must not be locale-prefixed or client-prefetched. */
const isLocaleFreePath = (path: string): boolean => localeFreePaths.includes(path);

/** Prefix a canonical app path with its locale segment. */
const localePath = (locale: Locale, path: string): string => {
  if (isLocaleFreePath(path)) {
    return path;
  }
  return path === appRoutes.home ? `/${locale}` : `/${locale}${path}`;
};

/** Locale-prefixed href for a doc page, with optional heading anchor. */
const docHref = (locale: Locale, slug: string, anchor?: string): string =>
  `${localePath(locale, appRoutes.docsSlug(slug))}${anchor ? `#${anchor}` : ""}`;

/** The same page in another locale: swap the pathname's locale segment. */
const switchLocalePath = (pathname: string, locale: Locale): string => {
  const segments = pathname.split("/");
  segments[1] = locale;
  return segments.join("/");
};

/** hreflang alternates (plus x-default) for a canonical app path. */
const localeAlternates = (locale: Locale, path: string) => ({
  canonical: localePath(locale, path),
  languages: {
    ...Object.fromEntries(locales.map((locale) => [locale, localePath(locale, path)])),
    "x-default": localePath(defaultLocale, path),
  },
});

/** Off-site destinations (repo, package registry). */
const externalUrls = {
  github: "https://github.com/Intent-Link/intent-link-npm",
  npm: "https://www.npmjs.com/package/intent-link",
} as const;

export { appRoutes, localePath, docHref, isLocaleFreePath, switchLocalePath, localeAlternates, externalUrls };
