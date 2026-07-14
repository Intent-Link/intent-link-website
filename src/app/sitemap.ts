import type { MetadataRoute } from "next";
import { docSlugs } from "@/constants/docs-nav";
import { appRoutes, localePath } from "@/constants/routes";
import { absoluteUrl } from "@/constants/seo";
import { defaultLocale, locales } from "@/i18n/locales";

const languageAlternates = (path: string) => ({
  ...Object.fromEntries(locales.map((locale) => [locale, absoluteUrl(localePath(locale, path))])),
  "x-default": absoluteUrl(localePath(defaultLocale, path)),
});

const entry = (locale: (typeof locales)[number], path: string): MetadataRoute.Sitemap[number] => ({
  url: absoluteUrl(localePath(locale, path)),
  alternates: { languages: languageAlternates(path) },
});

const sitemap = (): MetadataRoute.Sitemap => [
  ...locales.map((locale) => entry(locale, appRoutes.home)),
  ...docSlugs.flatMap((slug) =>
    locales.map((locale) => entry(locale, appRoutes.docsSlug(slug))),
  ),
];

export default sitemap;
