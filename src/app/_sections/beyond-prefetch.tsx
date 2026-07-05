import { Section } from "@/components/ui/section";
import { sectionIds } from "@/constants/section-ids";
import { testIds } from "@/constants/test-ids";
import type { SectionsText } from "@/i18n/messages/sections";

interface BeyondPrefetchProps {
  text: SectionsText["beyondPrefetch"];
}

/**
 * Beyond prefetch (06) — "One signal. Many uses."
 * Use-case cards + "Measure → Estimate → Prepare" pattern row + vision copy.
 * TODO: port via Card grid.
 */
const BeyondPrefetch = ({ text }: BeyondPrefetchProps) => {
  return (
    <Section
      id={sectionIds.beyondPrefetch}
      testId={testIds.section.beyondPrefetch}
      ariaLabel={text.ariaLabel}
      decor="glyph"
      className="border-b border-line-soft"
    >
      <p className="px-6 pt-10 text-xs uppercase tracking-wide text-ink-3">{text.eyebrow}</p>
      {/* TODO: use cases */}
    </Section>
  );
};

export { BeyondPrefetch };
