"use client";

import { Section } from "@/components/ui/section";
import { sectionIds } from "@/constants/section-ids";
import { testIds } from "@/constants/test-ids";
import type { SectionsText } from "@/i18n/messages/sections";

interface KalmanLensProps {
  text: SectionsText["kalmanLens"];
}

/**
 * Kalman Lens / How it works (02).
 * Three numbered "beat" cards + an interactive <canvas> (raw samples, filtered
 * trail, projection cone). TODO: port via use-kalman-lens hook.
 */
const KalmanLens = ({ text }: KalmanLensProps) => {
  return (
    <Section
      id={sectionIds.kalmanLens}
      testId={testIds.section.kalmanLens}
      ariaLabel={text.ariaLabel}
      decor="glyph"
      className="border-b border-line-soft"
    >
      <p className="px-6 pt-10 text-xs uppercase tracking-wide text-ink-3">{text.eyebrow}</p>
      {/* TODO: kalman lens canvas */}
    </Section>
  );
};

export { KalmanLens };
