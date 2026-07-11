import Link from "next/link";
import { Section } from "@/components/ui/section";
import { Chip } from "@/components/ui/chip";
import { Badge } from "@/components/ui/badge";
import { GravityWell } from "@/components/ui/gravity-well";
import { InstallCommand } from "@/components/ui/install-command";
import { PrefetchLink } from "@/components/ui/prefetch-link";
import { buttonClassName } from "@/components/ui/button";
import { sectionIds } from "@/constants/section-ids";
import { testIds } from "@/constants/test-ids";
import { localePath } from "@/constants/routes";
import { docsEntryPath } from "@/constants/docs-nav";
import { site } from "@/constants/site";
import type { SectionsText } from "@/i18n/messages/sections";
import type { Locale } from "@/i18n/locales";

interface HeroProps {
  text: SectionsText["hero"];
  locale: Locale;
}

const heroBadges: { label: string; value: string; color: string; valueTextColor?: string }[] = [
  { label: "npm", value: `v${site.version}`, color: "var(--accent)" },
  { label: "license", value: "MIT", color: "#28a745" },
  { label: "react", value: "≥18", color: "#61dafb", valueTextColor: "#0b1220" },
  { label: "next", value: "≥13", color: "#111" },
];

/**
 * Hero — "Know the target before the click." Eyebrow pill · H1 · subcopy · CTAs ·
 * shields badge row · the interactive Gravity Well field as the marquee visual.
 */
const Hero = ({ text, locale }: HeroProps) => {
  return (
    <Section
      id={sectionIds.hero}
      testId={testIds.section.hero}
      ariaLabel={text.ariaLabel}
      decor="glyph"
      glyphVariant="hero"
    >
      <div className="mx-auto grid max-w-[1180px] items-center gap-[60px] px-8 pt-[78px] pb-[92px] lg:grid-cols-[1.08fr_0.92fr]">
        <div>
          <Chip>{text.eyebrow}</Chip>
          <h1 className="mt-6 text-balance text-[54px] font-extrabold leading-[1.03] tracking-[-0.04em]">
            {text.titleLead}
            <br />
            <span className="text-accent">{text.titleEmphasis}</span>
          </h1>
          <p className="mt-5 max-w-[48ch] text-pretty text-[18.5px] leading-[1.55] text-ink-2">{text.subcopy}</p>
          <div className="mt-7 flex flex-wrap items-center gap-3">
            <PrefetchLink href={localePath(locale, docsEntryPath)} className={buttonClassName("primary", "group")}>
              {text.getStarted}
              <span aria-hidden className="transition-transform duration-200 group-hover:translate-x-1">
                →
              </span>
            </PrefetchLink>
            <Link href={`#${sectionIds.predictionFieldDemo}`} className={buttonClassName("outline")}>
              {text.liveDemo}
            </Link>
          </div>
          <InstallCommand className="mt-6" />
          <div className="mt-[26px] flex flex-wrap gap-2">
            {heroBadges.map((badge) => (
              <Badge
                key={badge.label}
                label={badge.label}
                value={badge.value}
                color={badge.color}
                valueTextColor={badge.valueTextColor}
              />
            ))}
          </div>
        </div>

        <GravityWell
          className="lg:h-[520px]"
          labels={{
            cursor: text.well.cursor,
            target: text.well.target,
            arming: text.well.arming,
            armed: text.well.armed,
          }}
          caption={{ lead: text.well.captionLead, body: text.well.captionBody }}
        />
      </div>
    </Section>
  );
};

export { Hero };
