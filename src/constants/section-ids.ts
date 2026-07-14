/**
 * DOM anchor ids for the landing-page sections (used for in-page navigation and
 * scroll targeting). These are stable identifiers, not user-facing copy — the
 * localized labels live in the sections i18n dictionary.
 */
const sectionIds = {
  hero: "hero",
  predictionFieldDemo: "prediction-field-demo",
  latencyRace: "latency-race",
  whyDifferent: "why-different",
  beyondPrefetch: "beyond-prefetch",
  ctaBand: "cta-band",
} as const;

type SectionId = (typeof sectionIds)[keyof typeof sectionIds];

export { sectionIds };
export type { SectionId };
