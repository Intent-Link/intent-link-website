import type { Locale } from "@/i18n/locales";
import type { TranslationBundle } from "./bundle";
import { es } from "./es";
import { fr } from "./fr";
import { de } from "./de";
import { ja } from "./ja";
import { zh } from "./zh";
import { ko } from "./ko";
import { pt } from "./pt";
import { ru } from "./ru";
import { ar } from "./ar";

/** All non-English translation bundles, keyed by locale. */
const translations: Partial<Record<Locale, TranslationBundle>> = {
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

/** Project each locale bundle down to one namespace, for `createTextQuery` overrides. */
const pickNamespace = <Key extends keyof TranslationBundle>(
  key: Key,
): Partial<Record<Locale, TranslationBundle[Key]>> => {
  const overrides: Partial<Record<Locale, TranslationBundle[Key]>> = {};
  for (const [locale, bundle] of Object.entries(translations)) {
    overrides[locale as Locale] = bundle[key];
  }
  return overrides;
};

export { pickNamespace };
