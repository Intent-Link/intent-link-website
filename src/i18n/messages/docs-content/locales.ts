import type { Locale } from "@/i18n/locales";
import type { DocsContentText } from "@/content/docs/types";
import type { PartialText } from "@/i18n/create-text-query";
import { es } from "./es";
import { fr } from "./fr";
import { de } from "./de";
import { ja } from "./ja";
import { zh } from "./zh";
import { ko } from "./ko";
import { pt } from "./pt";
import { ru } from "./ru";
import { ar } from "./ar";

/** Translated docs-body prose, keyed by locale (structure lives in @/content/docs). */
const docsContentLocales: Partial<Record<Locale, PartialText<DocsContentText>>> = {
  es,
  fr,
  de,
  ja,
  zh,
  ko,
  pt,
  ru,
  ar,
};

export { docsContentLocales };
