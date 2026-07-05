import { Section } from "@/components/ui/section";
import { sectionIds } from "@/constants/section-ids";
import { testIds } from "@/constants/test-ids";
import type { SectionsText } from "@/i18n/messages/sections";

interface CtaBandProps {
  text: SectionsText["ctaBand"];
}

/**
 * Closing CTA band — "Ship navigation that feels instant."
 * Grid + glyph background, inline install command + copy, Get started / GitHub.
 * TODO: port via CopyButton + Button.
 */
const CtaBand = ({ text }: CtaBandProps) => {
  return (
    <Section
      id={sectionIds.ctaBand}
      testId={testIds.section.ctaBand}
      ariaLabel={text.ariaLabel}
      decor={["grid", "glyph"]}
      className="border-t border-line-soft"
    >
      {/* TODO: closing CTA */}
    </Section>
  );
};

export { CtaBand };
