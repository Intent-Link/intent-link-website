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
      <div className="mx-auto max-w-[1240px] px-8 pb-[72px] pt-[88px]">
        <SectionHeading
          eyebrow={text.eyebrow}
          heading={text.heading}
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

        <div className="relative mt-7 overflow-hidden rounded-[26px] border border-accent/20 bg-[#f6f9ff] p-4 shadow-[0_18px_50px_rgba(9,105,255,0.08)] sm:p-6 lg:p-7">
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 opacity-70 [background-image:linear-gradient(rgba(9,105,255,0.07)_1px,transparent_1px),linear-gradient(90deg,rgba(9,105,255,0.07)_1px,transparent_1px)] [background-size:32px_32px]"
          />
          <div
            aria-hidden
            className="pointer-events-none absolute -left-24 top-1/2 size-72 -translate-y-1/2 rounded-full bg-accent/[0.09] blur-3xl"
          />
          <div
            aria-hidden
            className="pointer-events-none absolute -right-16 -top-24 size-64 rounded-full border border-accent/15"
          />
          <div
            aria-hidden
            className="pointer-events-none absolute -right-3 -top-12 size-40 rounded-full border border-accent/10"
          />

          <div className="relative grid items-stretch gap-3 lg:grid-cols-[1fr_auto_1fr_auto_1fr] lg:gap-4">
            {text.pattern.map((step, index) => (
              <Fragment key={step.step}>
                <div className="relative flex min-h-[160px] flex-col justify-center px-4 py-5 sm:px-6 lg:min-h-[172px] lg:px-7">
                  <div className="flex items-center gap-3">
                    <div className="relative flex size-10 items-center justify-center rounded-full border border-accent/25 bg-white/75 font-mono text-[11px] font-semibold text-accent shadow-[0_0_0_7px_rgba(9,105,255,0.05)]">
                      <span aria-hidden className="absolute size-2 rounded-full bg-accent shadow-[0_0_18px_rgba(9,105,255,0.65)]" />
                      <span className="sr-only">{step.step}</span>
                    </div>
                    <div className="font-mono text-[11px] font-semibold tracking-[0.1em] text-accent/75">
                      {step.step}
                    </div>
                  </div>
                  <div className="mt-6 text-[clamp(29px,2.8vw,40px)] font-extrabold leading-none tracking-[-0.045em] text-ink">
                    {step.title}
                  </div>
                  <div className="mt-3 text-[14px] font-medium text-ink-2/90">{step.body}</div>
                </div>
                {index < text.pattern.length - 1 && (
                  <div aria-hidden className="flex items-center justify-center py-0.5 lg:px-0 lg:py-0">
                    <div className="relative flex h-8 w-14 rotate-90 items-center justify-center lg:rotate-0">
                      <span className="h-px w-10 bg-gradient-to-r from-accent/25 to-accent" />
                      <span className="-ml-1 size-2 rotate-45 border-r-2 border-t-2 border-accent" />
                      <span className="absolute left-0 size-2 rounded-full bg-accent/25" />
                    </div>
                  </div>
                )}
              </Fragment>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
};

export { BeyondPrefetch };
