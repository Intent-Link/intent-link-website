import { Section } from "@/components/ui/section";
import { sectionIds } from "@/constants/section-ids";
import { testIds } from "@/constants/test-ids";
import type { SectionsText } from "@/i18n/messages/sections";

interface WhyDifferentProps {
  text: SectionsText["whyDifferent"];
}

/**
 * Why it's different (05) — "Not visibility. Not hover. Intent."
 * Comparison table (approaches × attributes) + benefits stat grid.
 * TODO: port via DocTable-style comparison + Card grid.
 */
const WhyDifferent = ({ text }: WhyDifferentProps) => {
  return (
    <Section
      id={sectionIds.whyDifferent}
      testId={testIds.section.whyDifferent}
      ariaLabel={text.ariaLabel}
      className="border-b border-line-soft"
    >
      <p className="px-6 pt-10 text-xs uppercase tracking-wide text-ink-3">{text.eyebrow}</p>
      {/* TODO: comparison table + benefits */}
    </Section>
  );
};

export { WhyDifferent };
