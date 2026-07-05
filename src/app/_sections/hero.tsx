import { Section } from "@/components/ui/section";
import { sectionIds } from "@/constants/section-ids";
import { testIds } from "@/constants/test-ids";
import type { SectionsText } from "@/i18n/messages/sections";

interface HeroProps {
  text: SectionsText["hero"];
}

/**
 * Hero — "Know the target before the click."
 * Eyebrow pill · H1 · subcopy · CTAs · shields badge row · install terminal card.
 * TODO: port markup from intent-link-website-rebuild/project/Landing.dc.html.
 */
const Hero = ({ text }: HeroProps) => {
  return (
    <Section
      id={sectionIds.hero}
      testId={testIds.section.hero}
      ariaLabel={text.ariaLabel}
      decor="glyph"
      className="border-b border-line-soft"
    >
      {/* TODO: hero content */}
    </Section>
  );
};

export { Hero };
