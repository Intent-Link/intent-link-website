import { Section } from "@/components/ui/section";
import { glyphVariant } from "@/components/ui/glyph-background";
import { InstallCommand } from "@/components/ui/install-command";
import { GithubIcon } from "@/components/ui/github-icon";
import { PrefetchLink } from "@/components/ui/prefetch-link";
import { buttonClassName } from "@/components/ui/button";
import { sectionIds } from "@/constants/section-ids";
import { testIds } from "@/constants/test-ids";
import { externalUrls, localePath } from "@/constants/routes";
import { docsEntryPath } from "@/constants/docs-nav";
import type { SectionsText } from "@/i18n/messages/sections";
import type { Locale } from "@/i18n/locales";

interface CtaBandProps {
  text: SectionsText["ctaBand"];
  locale: Locale;
}

/** Closing CTA band — install pill + copy, Get started / GitHub, over the grid. */
const CtaBand = ({ text, locale }: CtaBandProps) => {
  return (
    <Section
      id={sectionIds.ctaBand}
      testId={testIds.section.ctaBand}
      ariaLabel={text.ariaLabel}
      decor={["grid", "glyph"]}
      glyphVariant={glyphVariant.cta}
      className="border-t border-line-soft"
    >
      <div className="mx-auto max-w-[760px] px-8 py-24 text-center">
        <h2 className="text-[clamp(30px,4vw,44px)] font-extrabold leading-[1.05] tracking-[-0.04em] text-balance">
          {text.heading}
        </h2>

        <InstallCommand className="mt-8" />

        <div className="mt-[26px] flex flex-wrap justify-center gap-3">
          <PrefetchLink href={localePath(locale, docsEntryPath)} className={buttonClassName("primary", "group text-sm")}>
            {text.getStarted}
            <span aria-hidden className="transition-transform duration-200 group-hover:translate-x-1">
              →
            </span>
          </PrefetchLink>
          <a
            href={externalUrls.github}
            target="_blank"
            rel="noreferrer"
            className={buttonClassName("outline", "gap-2 px-[22px] text-sm")}
          >
            <GithubIcon size={15} />
            {text.github}
          </a>
        </div>
      </div>
    </Section>
  );
};

export { CtaBand };
