"use client";

import { Section } from "@/components/ui/section";
import { sectionIds } from "@/constants/section-ids";
import { testIds } from "@/constants/test-ids";
import type { SectionsText } from "@/i18n/messages/sections";

interface PredictionFieldDemoProps {
  text: SectionsText["predictionFieldDemo"];
}

/**
 * Prediction Field demo (01 / live demo).
 * Storefront grid of ProductTiles that consume `intent-link`'s IntentContext,
 * a status toast, and a dark console with importance/cost tuning + onIntent stream.
 * TODO: port behavior via use-pointer-intent / IntentContext.
 */
const PredictionFieldDemo = ({ text }: PredictionFieldDemoProps) => {
  return (
    <Section
      id={sectionIds.predictionFieldDemo}
      testId={testIds.section.predictionFieldDemo}
      ariaLabel={text.ariaLabel}
      className="border-b border-line-soft"
    >
      <p className="px-6 pt-10 text-xs uppercase tracking-wide text-ink-3">{text.eyebrow}</p>
      {/* TODO: prediction field demo */}
    </Section>
  );
};

export { PredictionFieldDemo };
