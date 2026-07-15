import { Section } from "@/components/ui/section";
import { SectionHeading } from "@/components/ui/section-heading";
import { Card } from "@/components/ui/card";
import { cn } from "@/utils/class-names";
import { sectionIds } from "@/constants/section-ids";
import { testIds } from "@/constants/test-ids";
import type { SectionsText } from "@/i18n/messages/sections";

interface WhyDifferentProps {
  text: SectionsText["whyDifferent"];
}

/** Why it's different (05) — transposed comparison table (intent-link column highlighted) + benefit grid. */
const WhyDifferent = ({ text }: WhyDifferentProps) => {
  const attributes = [
    { label: text.columns.timing, key: "timing", center: false },
    { label: text.columns.selective, key: "selective", center: false },
  ] as const;
  const highlightedApproach = text.rows.find((approach) => approach.name === text.highlightName);
  const approaches = highlightedApproach
    ? [highlightedApproach, ...text.rows.filter((approach) => approach.name !== text.highlightName)]
    : text.rows;

  return (
    <Section
      id={sectionIds.whyDifferent}
      testId={testIds.section.whyDifferent}
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

        <div className="mt-8 overflow-hidden rounded-2xl border border-line shadow-[0_1px_3px_rgba(0,0,0,.05)]">
          <div className="overflow-x-auto">
            <table className="w-full min-w-[820px] border-collapse text-left font-mono">
              <thead>
                <tr>
                  <th className="border-b border-line bg-sidebar px-4 py-[13px] text-[11px] font-semibold uppercase tracking-[0.03em] text-ink-3">
                    {text.columns.approach}
                  </th>
                  {approaches.map((approach) => {
                    const highlighted = approach.name === text.highlightName;
                    return (
                      <th
                        key={approach.name}
                        className={cn(
                          "border-b border-line px-[14px] py-[13px] text-[13px] whitespace-nowrap",
                          highlighted
                            ? "bg-accent/[0.06] font-bold text-accent"
                            : "bg-sidebar font-semibold text-ink",
                        )}
                      >
                        {approach.name}
                      </th>
                    );
                  })}
                </tr>
              </thead>
              <tbody>
                {attributes.map((attribute) => (
                  <tr key={attribute.key} className="border-b border-line-soft last:border-b-0">
                    <td className="bg-sidebar px-4 py-[13px] text-[11px] font-semibold uppercase tracking-[0.03em] whitespace-nowrap text-ink-3">
                      {attribute.label}
                    </td>
                    {approaches.map((approach) => {
                      const highlighted = approach.name === text.highlightName;
                      const value = approach[attribute.key];
                      return (
                        <td
                          key={approach.name}
                          className={cn(
                            "px-[14px] py-[13px]",
                            attribute.center ? "text-center text-[14px]" : "text-left text-[12.5px]",
                            highlighted ? "bg-accent/[0.06] font-semibold" : "font-normal",
                            highlighted ? "text-ink" : "text-ink-2",
                          )}
                        >
                          {value}
                        </td>
                      );
                    })}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div className="mt-[22px] grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {text.benefits.map((benefit) => (
            <Card key={benefit.title} className="px-[18px] py-4">
              <p className="font-mono text-[18px] font-extrabold text-accent">{benefit.stat}</p>
              <h3 className="mt-2 text-[14px] font-medium leading-[1.35] tracking-[-0.01em] text-ink-2">
                {benefit.title}
              </h3>
            </Card>
          ))}
        </div>
      </div>
    </Section>
  );
};

export { WhyDifferent };
