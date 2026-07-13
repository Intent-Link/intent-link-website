/**
 * Supported locales and their display names. The locale list is the single
 * source of truth for the language picker and for validating a stored locale.
 */

const locales = ["en", "es", "fr", "de", "it", "pt", "tr", "ru", "ar", "zh", "ja", "ko"] as const;

type Locale = (typeof locales)[number];

const defaultLocale: Locale = "en";

/** Endonyms — each language is shown in its own language, so these are stable. */
const localeNames: Record<Locale, string> = {
  en: "English",
  es: "Español",
  fr: "Français",
  de: "Deutsch",
  it: "Italiano",
  tr: "Türkçe",
  ja: "日本語",
  zh: "中文",
  ko: "한국어",
  pt: "Português",
  ru: "Русский",
  ar: "العربية",
};

/** Stores an explicit language choice made in the language picker. */
const localeCookieName = "intent-link-locale";

/** Locales that render right-to-left. */
const rtlLocales: readonly Locale[] = ["ar"];

type TextDirection = "ltr" | "rtl";

/** Writing direction for a locale — drives the `<html dir>` attribute. */
const getTextDirection = (locale: Locale): TextDirection =>
  rtlLocales.includes(locale) ? "rtl" : "ltr";

const isLocale = (value: unknown): value is Locale => {
  return typeof value === "string" && (locales as readonly string[]).includes(value);
};

export { locales, defaultLocale, localeNames, localeCookieName, getTextDirection, isLocale };
export type { Locale };
