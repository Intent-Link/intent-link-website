import { defaultLocale, type Locale } from "@/i18n/locales";

/**
 * Deep-widen a literal shape: turns the `as const` `en` dictionaries (whose
 * values are string literals like `"Docs"`) into their base types (`string`),
 * so a translated override can supply different text. Functions and arrays are
 * preserved structurally.
 */
type Loosen<T> = T extends (...args: infer A) => infer R
  ? (...args: A) => R
  : T extends readonly (infer E)[]
    ? Loosen<E>[]
    : T extends object
      ? { -readonly [K in keyof T]: Loosen<T[K]> }
      : T extends string
        ? string
        : T extends number
          ? number
          : T extends boolean
            ? boolean
            : T;

/**
 * Deep-partial view of a text shape: any branch may be omitted and falls back
 * to `en` per key. Functions and arrays are atomic leaves — a locale overrides
 * them wholesale or not at all.
 */
type PartialText<T> = T extends (...args: infer A) => infer R
  ? (...args: A) => R
  : T extends readonly unknown[]
    ? T
    : T extends object
      ? { [K in keyof T]?: PartialText<T[K]> }
      : T;

/** A per-namespace dictionary: `en` is required; other locales are optional. */
type LocaleMessages<TextShape> = Partial<Record<Locale, TextShape>> & {
  en: TextShape;
};

const isPlainObject = (value: unknown): value is Record<string, unknown> =>
  typeof value === "object" && value !== null && !Array.isArray(value);

/** Merge an override onto `en`, key by key. Arrays and functions replace wholesale. */
const deepMerge = <T>(base: T, override: unknown): T => {
  if (override === undefined) {
    return base;
  }
  if (isPlainObject(base) && isPlainObject(override)) {
    const merged: Record<string, unknown> = { ...base };
    for (const key of Object.keys(override)) {
      merged[key] = deepMerge(base[key], override[key]);
    }
    return merged as T;
  }
  return override as T;
};

interface TextQueryInfo<TextShape> {
  messages: LocaleMessages<TextShape>;
  getText: (locale?: Locale) => TextShape;
}

/**
 * Build a message registry + server-side query from an `en` source of truth.
 * `overrides` supplies translated locales as deep-partial diffs: any key a
 * locale omits falls back to `en`. Merging happens once at module init, so
 * `getText` stays a plain synchronous lookup. Every namespace goes through
 * this, so the fallback policy lives in one place.
 */
const createTextQuery = <TextShape>(
  en: TextShape,
  overrides: Partial<Record<Locale, PartialText<Loosen<TextShape>>>> = {},
): TextQueryInfo<TextShape> => {
  const messages: LocaleMessages<TextShape> = { en };
  for (const [locale, override] of Object.entries(overrides)) {
    messages[locale as Locale] = deepMerge(en, override);
  }
  const getText = (locale: Locale = defaultLocale): TextShape =>
    messages[locale] ?? messages.en;
  return { messages, getText };
};

export { createTextQuery };
export type { Loosen, PartialText };
