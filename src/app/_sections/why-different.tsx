import { Section } from "@/components/ui/section";
import { SectionHeading } from "@/components/ui/section-heading";
import { cn } from "@/utils/class-names";
import { sectionIds } from "@/constants/section-ids";
import { testIds } from "@/constants/test-ids";
import type { SectionsText } from "@/i18n/messages/sections";

interface WhyDifferentProps {
  text: SectionsText["whyDifferent"];
}

const trajectoryPath =
  "M58 426C128 414 146 354 214 362C292 371 308 270 378 282C432 291 440 174 492 126";

const IntentFieldGraphic = ({ label }: { label: string }) => (
  <div className="relative h-full overflow-hidden rounded-[22px] border border-accent/15 bg-[#f8fbff]">
    <svg
      aria-hidden="true"
      className="block h-full w-full"
      viewBox="0 0 560 500"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <pattern id="comparison-grid" width="28" height="28" patternUnits="userSpaceOnUse">
          <path d="M28 0H0V28" stroke="#0066ff" strokeOpacity="0.07" />
        </pattern>
        <linearGradient
          id="intent-corridor"
          x1="58"
          y1="426"
          x2="492"
          y2="126"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#0066ff" stopOpacity="0" />
          <stop offset="0.6" stopColor="#0066ff" stopOpacity="0.08" />
          <stop offset="1" stopColor="#0066ff" stopOpacity="0.18" />
        </linearGradient>
        <marker
          id="intent-arrow"
          markerWidth="8"
          markerHeight="8"
          refX="6"
          refY="4"
          orient="auto"
        >
          <path
            d="M1 1L7 4L1 7"
            stroke="#0066ff"
            strokeWidth="1.4"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </marker>
      </defs>

      <rect width="560" height="500" fill="url(#comparison-grid)" />
      <rect
        x="32"
        y="30"
        width="496"
        height="410"
        rx="22"
        stroke="#0066ff"
        strokeOpacity="0.16"
        strokeDasharray="5 7"
      />

      <g fill="#ffffff" stroke="#64748b" strokeOpacity="0.22">
        <rect x="76" y="70" width="68" height="50" rx="11" />
        <rect x="252" y="48" width="68" height="50" rx="11" />
        <rect x="404" y="175" width="68" height="50" rx="11" />
        <rect x="86" y="246" width="68" height="50" rx="11" />
        <rect x="260" y="352" width="68" height="50" rx="11" />
      </g>
      <g fill="#64748b" fillOpacity="0.22">
        <circle cx="110" cy="95" r="4" />
        <circle cx="286" cy="73" r="4" />
        <circle cx="438" cy="200" r="4" />
        <circle cx="120" cy="271" r="4" />
        <circle cx="294" cy="377" r="4" />
      </g>

      <path d={trajectoryPath} stroke="url(#intent-corridor)" strokeWidth="42" strokeLinecap="round" />
      <path
        d={trajectoryPath}
        stroke="#0066ff"
        strokeOpacity="0.6"
        strokeWidth="2"
        strokeLinecap="round"
        markerEnd="url(#intent-arrow)"
      />
      <path
        d="M58 426C128 414 146 354 214 362C292 371 308 270 378 282"
        stroke="#0066ff"
        strokeOpacity="0.22"
        strokeWidth="1.5"
        strokeDasharray="3 7"
      />

      <g>
        <circle cx="214" cy="362" r="13" fill="#ffffff" stroke="#0066ff" strokeOpacity="0.22" />
        <circle cx="214" cy="362" r="6" fill="#0066ff" />
      </g>
      <g>
        <circle cx="378" cy="282" r="30" fill="#0066ff" fillOpacity="0.045" />
        <circle
          className="motion-safe:animate-pulse"
          cx="378"
          cy="282"
          r="20"
          stroke="#0066ff"
          strokeOpacity="0.28"
        />
        <circle cx="378" cy="282" r="6" fill="#0066ff" />
      </g>

      <g>
        <rect
          x="452"
          y="88"
          width="76"
          height="76"
          rx="13"
          fill="#eef5ff"
          stroke="#0066ff"
          strokeOpacity="0.48"
        />
        <circle cx="490" cy="126" r="8" fill="#0066ff" />
        <circle cx="490" cy="126" r="18" stroke="#0066ff" strokeOpacity="0.15" />
      </g>

      <g transform="translate(322 306)">
        <rect
          width="116"
          height="30"
          rx="15"
          fill="#ffffff"
          stroke="#0066ff"
          strokeOpacity="0.18"
        />
        <circle cx="17" cy="15" r="4" fill="#0066ff" />
        <text
          x="29"
          y="19"
          fill="#0066ff"
          fontFamily="var(--font-plex-mono), monospace"
          fontSize="11"
          fontWeight="600"
        >
          {label}
        </text>
      </g>

      <circle className="motion-reduce:hidden" r="4.5" fill="#0066ff">
        <animateMotion dur="7s" repeatCount="indefinite" path={trajectoryPath} />
      </circle>
    </svg>
  </div>
);

const FeatureIcon = ({ index }: { index: number }) => (
  <span className="flex size-8 shrink-0 items-center justify-center rounded-lg bg-accent/[0.07] text-accent">
    <svg
      aria-hidden="true"
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      {index === 0 && (
        <>
          <path d="M4 12h13" />
          <path d="m13 7 5 5-5 5" />
          <path d="M4 7v10" />
        </>
      )}
      {index === 1 && (
        <>
          <path d="M5 17a8 8 0 1 1 14 0" />
          <path d="m12 13 4-4" />
          <path d="M7 17h10" />
        </>
      )}
      {index === 2 && (
        <>
          <path d="M4 7h10" />
          <path d="M18 7h2" />
          <path d="M4 17h2" />
          <path d="M10 17h10" />
          <circle cx="16" cy="7" r="2" />
          <circle cx="8" cy="17" r="2" />
        </>
      )}
      {index === 3 && (
        <>
          <path d="M8 4H5a2 2 0 0 0-2 2v3" />
          <path d="M16 4h3a2 2 0 0 1 2 2v3" />
          <path d="M8 20H5a2 2 0 0 1-2-2v-3" />
          <path d="M16 20h3a2 2 0 0 0 2-2v-3" />
          <circle cx="12" cy="12" r="3" />
        </>
      )}
      {index === 4 && (
        <>
          <circle cx="6" cy="12" r="3" />
          <circle cx="18" cy="12" r="3" />
          <path d="M9 12h6" />
        </>
      )}
      {index === 5 && (
        <>
          <rect x="5" y="10" width="14" height="10" rx="2" />
          <path d="M8 10V7a4 4 0 0 1 7.5-2" />
          <path d="M12 14v2" />
        </>
      )}
    </svg>
  </span>
);

const visibleBenefitIndexes = [1, 3, 4, 5] as const;

/** Why it's different (04) — core facts, target-field illustration, and comparison table. */
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
        <div className="grid items-stretch gap-8 lg:grid-cols-[minmax(0,1.12fr)_minmax(390px,0.88fr)] lg:gap-10">
          <div className="flex min-w-0 flex-col">
            <SectionHeading
              eyebrow={text.eyebrow}
              heading={text.heading}
              body={text.body}
              className="max-w-[56ch]"
            />

            <div className="mt-7 grid flex-1 grid-rows-2 gap-[0.5px] overflow-hidden rounded-[16px] border-[0.5px] border-line bg-line sm:grid-cols-2">
              {visibleBenefitIndexes.map((index) => {
                const benefit = text.benefits[index];

                return (
                  <div
                    key={benefit.title}
                    className="flex min-h-[132px] flex-col justify-center bg-white px-5 py-5"
                  >
                    <div className="flex items-center gap-3.5">
                      <FeatureIcon index={index} />
                      <p className="min-w-0 font-mono text-[18px] font-extrabold leading-tight text-accent">
                        {benefit.stat}
                      </p>
                    </div>
                    <h3 className="mt-1 ps-[46px] text-[13px] font-normal leading-[1.45] tracking-[-0.005em] text-ink-muted">
                      {benefit.title}
                    </h3>
                  </div>
                );
              })}
            </div>
          </div>

          <IntentFieldGraphic label={text.highlightName} />
        </div>

        <div className="mt-10 overflow-hidden rounded-2xl border border-line shadow-[0_1px_3px_rgba(0,0,0,.05)]">
          <div className="relative">
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
                              ? "bg-[#eef5ff] font-bold text-accent shadow-[inset_0_3px_0_#0066ff]"
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
                              attribute.center
                                ? "text-center text-[14px]"
                                : "text-left text-[12.5px]",
                              highlighted ? "bg-[#eef5ff] font-semibold" : "font-normal",
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
            <div className="pointer-events-none absolute inset-y-0 right-0 w-8 bg-gradient-to-l from-white to-transparent sm:hidden" />
          </div>
        </div>

      </div>
    </Section>
  );
};

export { WhyDifferent };
