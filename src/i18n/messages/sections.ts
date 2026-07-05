import { createTextQuery } from "@/i18n/create-text-query";

/** Landing-page section eyebrows and accessibility labels. */
const en = {
  hero: { ariaLabel: "Hero" },
  predictionFieldDemo: { eyebrow: "01 / live demo", ariaLabel: "Live prediction demo" },
  kalmanLens: { eyebrow: "02 / how it works", ariaLabel: "How it works" },
  latencyRace: { eyebrow: "03 / latency race", ariaLabel: "Latency race" },
  codeExample: { eyebrow: "04 / code", ariaLabel: "Code example" },
  whyDifferent: { eyebrow: "05 / why it's different", ariaLabel: "Why it's different" },
  beyondPrefetch: { eyebrow: "06 / beyond prefetch", ariaLabel: "Beyond prefetch" },
  ctaBand: { ariaLabel: "Get started" },
} as const;

type SectionsText = typeof en;

/** Section registry + server query. Falls back to the `en` dictionary. */
const { messages: sectionsMessages, getText: getSectionsText } = createTextQuery(en);

export { sectionsMessages, getSectionsText };
export type { SectionsText };
