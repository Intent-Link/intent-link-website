/**
 * Supported locales and their display names. The locale list is the single
 * source of truth for the language picker and for validating a stored locale.
 */

const locales = ["en", "es", "fr", "de", "ja", "zh", "ko", "pt", "ru", "ar"] as const;

type Locale = (typeof locales)[number];

const defaultLocale: Locale = "en";

/** Endonyms — each language is shown in its own language, so these are stable. */
const localeNames: Record<Locale, string> = {
  en: "English",
  es: "Español",
  fr: "Français",
  de: "Deutsch",
  ja: "日本語",
  zh: "中文",
  ko: "한국어",
  pt: "Português",
  ru: "Русский",
  ar: "العربية",
};

/** Cookie key that persists the reader's chosen locale across requests. */
const localeCookieName = "locale";

const isLocale = (value: unknown): value is Locale => {
  return typeof value === "string" && (locales as readonly string[]).includes(value);
};

export { locales, defaultLocale, localeNames, localeCookieName, isLocale };
export type { Locale };
