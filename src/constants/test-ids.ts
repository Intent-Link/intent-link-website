/**
 * Central registry of `data-testid` values, reserved for elements that specs
 * cannot query by role or text (decorative aria-hidden layers, section roots).
 * A test id must have a spec reading it — everything else queries by role/text.
 */
const testIds = {
  section: {
    hero: "section-hero",
    predictionFieldDemo: "section-prediction-field-demo",
    latencyRace: "section-latency-race",
    codeExample: "section-code-example",
    whyDifferent: "section-why-different",
    beyondPrefetch: "section-beyond-prefetch",
    ctaBand: "section-cta-band",
  },
  gridBackground: { root: "grid-background" },
  glyphBackground: { root: "glyph-background" },
} as const;

export { testIds };
