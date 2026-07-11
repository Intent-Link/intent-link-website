import { Fragment } from "react";
import { Section } from "@/components/ui/section";
import { SectionHeading } from "@/components/ui/section-heading";
import { Card } from "@/components/ui/card";
import { sectionIds } from "@/constants/section-ids";
import { testIds } from "@/constants/test-ids";
import type { SectionsText } from "@/i18n/messages/sections";

interface BeyondPrefetchProps {
  text: SectionsText["beyondPrefetch"];
}

/** Beyond prefetch (06) — use-case cards + the Measure → Estimate → Prepare pattern, generalized. */
const BeyondPrefetch = ({ text }: BeyondPrefetchProps) => {
  return (
    <Section
      id={sectionIds.beyondPrefetch}
      testId={testIds.section.beyondPrefetch}
      ariaLabel={text.ariaLabel}
      className="border-t border-line-soft bg-white"
    >
      <div className="mx-auto max-w-[1240px] px-8 pb-[100px] pt-[88px]">
        <SectionHeading
          eyebrow={text.eyebrow}
          heading={text.heading}
          body={text.body}
          className="max-w-[56ch]"
        />

        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {text.uses.map((use) => (
            <Card key={use.title} className="px-[18px] pt-[18px] pb-5">
              <p className="font-mono text-[11px] text-accent">{use.tag}</p>
              <h3 className="mt-[10px] text-[15px] font-bold tracking-[-0.01em]">{use.title}</h3>
              <p className="mt-[5px] text-[12.5px] leading-[1.5] text-ink-2">{use.body}</p>
            </Card>
          ))}
        </div>

        <div className="mt-[34px] border-t border-line pt-[30px]">
          <div className="mb-5 font-mono text-xs text-ink-3">{text.patternLabel}</div>
          <div className="flex flex-wrap items-center gap-2">
            {text.pattern.map((step, index) => (
              <Fragment key={step.step}>
                <div className="min-w-[190px] flex-1">
                  <div className="font-mono text-[11px] text-accent">{step.step}</div>
                  <div className="mt-2 text-[clamp(24px,2.6vw,32px)] font-extrabold leading-none tracking-[-0.03em]">
                    {step.title}
                  </div>
                  <div className="mt-2 text-[13.5px] text-ink-2">{step.body}</div>
                </div>
                {index < text.pattern.length - 1 && (
                  <div aria-hidden className="flex-none px-1.5 text-[26px] font-light text-accent">
                    →
                  </div>
                )}
              </Fragment>
            ))}
          </div>
          <p className="mt-[26px] max-w-[64ch] text-[14.5px] leading-[1.55] text-ink-2">
            {text.patternClose}
          </p>
        </div>
      </div>
    </Section>
  );
};

export { BeyondPrefetch };
