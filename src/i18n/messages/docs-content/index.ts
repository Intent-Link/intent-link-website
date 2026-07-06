import { createTextQuery } from "@/i18n/create-text-query";
import { defaultLocale, type Locale } from "@/i18n/locales";
import type { DocsContentText, DocText } from "@/content/docs/types";
import type { DocSlug } from "@/constants/docs-nav";
import { en } from "./en";
import { docsContentLocales } from "./locales";

/**
 * Per-locale docs prose. Structure lives in `@/content/docs`; this holds only
 * the translatable text, addressed by `textKey`. Locales are registered as they
 * are translated; untranslated docs and keys deep-merge from `en`.
 */
const { getText: getDocsContentText } = createTextQuery<DocsContentText>(en, docsContentLocales);

/** Resolve one doc's prose dictionary for a locale. */
const getDocText = (slug: DocSlug, locale: Locale = defaultLocale): DocText =>
  getDocsContentText(locale)[slug];

export { getDocText };
