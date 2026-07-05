import { defaultLocale, type Locale } from "@/i18n/locales";

/** A per-namespace dictionary: `en` is required; other locales are optional. */
type LocaleMessages<TextShape> = Partial<Record<Locale, TextShape>> & {
  en: TextShape;
};

interface TextQueryInfo<TextShape> {
  messages: LocaleMessages<TextShape>;
  getText: (locale?: Locale) => TextShape;
}

/**
 * Build a message registry + server-side query from an `en` source of truth.
 * Missing locales fall back whole-object to `en`. Every namespace goes through
 * this, so the fallback policy lives in exactly one place.
 */
const createTextQuery = <TextShape>(en: TextShape): TextQueryInfo<TextShape> => {
  const messages: LocaleMessages<TextShape> = { en };
  const getText = (locale: Locale = defaultLocale): TextShape =>
    messages[locale] ?? messages.en;
  return { messages, getText };
};

export { createTextQuery };
export type { LocaleMessages, TextQueryInfo };
