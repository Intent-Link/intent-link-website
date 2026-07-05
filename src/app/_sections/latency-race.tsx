"use client";

import { Section } from "@/components/ui/section";
import { sectionIds } from "@/constants/section-ids";
import { testIds } from "@/constants/test-ids";
import type { SectionsText } from "@/i18n/messages/sections";

interface LatencyRaceProps {
  text: SectionsText["latencyRace"];
}

/**
 * Latency Race (03) — "Same click. Half the wait."
 * Live time-saved counter + two panels (without / with intent-link) cycling
 * idle → loading (skeletons) → done. TODO: port via use-latency-race hook.
 */
const LatencyRace = ({ text }: LatencyRaceProps) => {
  return (
    <Section
      id={sectionIds.latencyRace}
      testId={testIds.section.latencyRace}
      ariaLabel={text.ariaLabel}
      decor="glyph"
      className="border-b border-line-soft"
    >
      <p className="px-6 pt-10 text-xs uppercase tracking-wide text-ink-3">{text.eyebrow}</p>
      {/* TODO: latency race */}
    </Section>
  );
};

export { LatencyRace };
