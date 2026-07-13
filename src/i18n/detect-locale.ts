import { defaultLocale, isLocale, type Locale } from "@/i18n/locales";

interface LanguagePreference {
  language: string;
  quality: number;
  order: number;
}

/** Parse an Accept-Language header in preference order. */
const parseAcceptLanguage = (header: string): LanguagePreference[] =>
  header
    .split(",")
    .map((entry, order) => {
      const [rawLanguage, ...parameters] = entry.trim().split(";");
      const qualityParameter = parameters.find((parameter) => parameter.trim().startsWith("q="));
      const parsedQuality = qualityParameter
        ? Number.parseFloat(qualityParameter.trim().slice(2))
        : 1;
      return {
        language: rawLanguage.toLowerCase(),
        quality: Number.isFinite(parsedQuality) ? parsedQuality : 0,
        order,
      };
    })
    .filter(({ language, quality }) => language !== "*" && quality > 0)
    .sort((left, right) => right.quality - left.quality || left.order - right.order);

/**
 * Pick a locale for the bare domain. An explicit saved choice wins, followed
 * by the browser's language list; unsupported languages fall back to English.
 */
const detectLocale = (savedLocale: string | undefined, acceptLanguage: string | null): Locale => {
  if (isLocale(savedLocale)) {
    return savedLocale;
  }

  for (const { language } of parseAcceptLanguage(acceptLanguage ?? "")) {
    const baseLanguage = language.split("-")[0];
    if (isLocale(baseLanguage)) {
      return baseLanguage;
    }
  }

  return defaultLocale;
};

export { detectLocale, parseAcceptLanguage };
