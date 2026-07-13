"use client";

import { Section } from "@/components/ui/section";
import { SectionHeading } from "@/components/ui/section-heading";
import { ProductTile } from "@/components/ui/product-tile";
import { SegmentedControl } from "@/components/ui/segmented-control";
import { Toast } from "@/components/ui/toast";
import { cn } from "@/utils/class-names";
import { usePredictionConsole } from "@/hooks/use-prediction-console";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";
import { useMediaQuery } from "@/hooks/use-media-query";
import { useSectionsText } from "@/hooks/use-sections-text";
import type { IntentLevel } from "intent-link";
import { sectionIds } from "@/constants/section-ids";
import { testIds } from "@/constants/test-ids";
import { tileCategory } from "@/constants/tile-categories";

const tiles = [
  { id: tileCategory.women, tint: "#eef0f4" },
  { id: tileCategory.men, tint: "#eef1f0" },
  { id: tileCategory.kids, tint: "#f1eff2" },
  { id: tileCategory.shoes, tint: "#f0f0ec" },
  { id: tileCategory.bags, tint: "#edf0f3" },
  { id: tileCategory.accessories, tint: "#f2f0ea" },
  { id: tileCategory.sport, tint: "#ecf1f0" },
  { id: tileCategory.denim, tint: "#edeff4" },
  { id: tileCategory.outerwear, tint: "#f0efec" },
  { id: tileCategory.beauty, tint: "#f3eef1" },
  { id: tileCategory.home, tint: "#eff1ed" },
  { id: tileCategory.sale, tint: "#f2eeed" },
  { id: tileCategory.electronics, tint: "#edf1f4" },
  { id: tileCategory.watches, tint: "#f1efe9" },
  { id: tileCategory.jewelry, tint: "#f3eef3" },
  { id: tileCategory.furniture, tint: "#eef0eb" },
  { id: tileCategory.gifts, tint: "#f3efed" },
  { id: tileCategory.travel, tint: "#edf0f2" },
] as const;

/** Phones through 499px use 2×2; 500–699px screens use a 3×3 grid. */
const narrowMobileTileCount = 4;
const mobileTileCount = 9;
/** Mid-sized screens use three rows of four tiles. */
const tabletTileCount = 12;

/**
 * Prediction Field demo (01) — a storefront grid whose tiles register with the
 * real intent-link engine, beside a console that records its onIntent calls.
 */
const PredictionFieldDemo = () => {
  const text = useSectionsText().predictionFieldDemo;
  const panel = usePredictionConsole();
  const { ref, revealed } = useScrollReveal<HTMLDivElement>();
  const isNarrowMobile = useMediaQuery("(max-width: 499px)");
  const isMobile = useMediaQuery("(max-width: 699px)");
  const isTablet = useMediaQuery("(max-width: 1023px)");

  const visibleTileCount = isNarrowMobile
    ? narrowMobileTileCount
    : isMobile
      ? mobileTileCount
      : isTablet
        ? tabletTileCount
        : tiles.length;
  const visibleTiles = tiles.slice(0, visibleTileCount);

  const levelSegments = [
    { value: "low", label: text.levels.low },
    { value: "medium", label: text.levels.medium },
    { value: "high", label: text.levels.high },
  ];

  const addressSlash = text.addressBar.indexOf("/");
  const addressHost = addressSlash === -1 ? text.addressBar : text.addressBar.slice(0, addressSlash);
  const addressPath = addressSlash === -1 ? "" : text.addressBar.slice(addressSlash);

  return (
    <Section
      id={sectionIds.predictionFieldDemo}
      testId={testIds.section.predictionFieldDemo}
      ariaLabel={text.ariaLabel}
      className="border-t border-line-soft bg-white"
    >
      <div
        ref={ref}
        className={cn(
          "mx-auto max-w-[1240px] px-8 pb-[100px] pt-[88px] transition-all duration-700 ease-out",
          revealed ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0",
        )}
      >
        <SectionHeading
          eyebrow={text.eyebrow}
          heading={text.heading}
          className="max-w-[60ch]"
          reveal={false}
        />

        <div className="mt-8 flex flex-col gap-5 [overflow-anchor:none]">
          {/* Console */}
          <div
            className="flex flex-col overflow-hidden rounded-2xl border border-black/25 bg-term-bg text-term-ink shadow-[0_30px_60px_-30px_rgba(11,18,32,0.55)]"
          >
            <div className="flex items-center justify-between gap-2.5 border-b border-white/[0.08] px-4 py-3">
              <div className="flex items-center gap-2.5">
                <span className="flex gap-[7px]">
                  <span className="h-[11px] w-[11px] rounded-full bg-[#ff5f57]" />
                  <span className="h-[11px] w-[11px] rounded-full bg-[#febc2e]" />
                  <span className="h-[11px] w-[11px] rounded-full bg-[#28c840]" />
                </span>
                <span className="font-mono text-xs font-medium text-term-ink">{text.consoleTitle}</span>
              </div>
              <div className="flex items-center gap-3.5">
                <button
                  type="button"
                  onClick={panel.reset}
                  className="inline-flex items-center gap-1.5 rounded-md border border-white/20 px-[11px] py-1.5 font-mono text-[11px] font-semibold text-term-ink transition-colors hover:bg-white/10"
                >
                  <svg
                    width="11"
                    height="11"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2.2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden
                  >
                    <path d="M3 12a9 9 0 1 0 3-6.7L3 8" />
                    <path d="M3 3v5h5" />
                  </svg>
                  {text.reset}
                </button>
              </div>
            </div>

            <div className="flex flex-col md:flex-row md:items-stretch">
              <div
                className="flex w-full shrink-0 flex-col justify-center gap-2 border-b border-white/[0.08] px-[18px] py-3 md:w-[372px] md:border-b-0 md:border-r"
              >
                <div className="flex min-h-[44px] items-center justify-between gap-3 border-b border-white/[0.07] pb-2">
                  <p className="min-w-0 font-mono text-[11px] font-semibold text-term-ink">
                    {text.importanceLabel}
                  </p>
                  <div className="w-[174px] shrink-0">
                    <SegmentedControl
                      segments={levelSegments}
                      value={panel.importance}
                      onChange={(value) => panel.setImportance(value as IntentLevel)}
                      className="border-white/15"
                    />
                  </div>
                </div>
                <div className="flex min-h-[44px] items-center justify-between gap-3 pt-1">
                  <p className="min-w-0 font-mono text-[11px] font-semibold text-term-ink">
                    {text.costLabel}
                  </p>
                  <div className="w-[174px] shrink-0">
                    <SegmentedControl
                      segments={levelSegments}
                      value={panel.cost}
                      onChange={(value) => panel.setCost(value as IntentLevel)}
                      className="border-white/15"
                    />
                  </div>
                </div>
              </div>

              <div className="flex min-w-0 flex-1 flex-col">
                <div className="flex items-center justify-between px-4 py-3 font-mono text-[10.5px] text-term-dim">
                  <span className="uppercase tracking-[0.04em]">{text.streamTitle}</span>
                  <span>{text.firedCount(panel.fired)}</span>
                </div>
                <div
                  className="h-[88px] flex-none overflow-y-auto px-4 pb-2 font-mono text-[11.5px] leading-relaxed"
                >
                  {panel.log.length === 0 ? (
                    <span className="block py-3 text-[#4d5768]">{text.streamEmpty}</span>
                  ) : (
                    panel.log.map((entry) => (
                      <div
                        key={entry.key}
                        className="flex items-baseline gap-[9px] border-b border-white/[0.04] py-[3.5px] text-term-ink"
                      >
                        <span className="text-[#4d5768]">{entry.time}</span>
                        <span className="text-[#82aaff]">→ prefetch</span>
                        <span className="min-w-0 flex-1 truncate">{entry.path}</span>
                      </div>
                    ))
                  )}
                </div>
              </div>
            </div>
          </div>

          {/* Storefront */}
          <div
            className="overflow-hidden rounded-2xl border border-line bg-surface shadow-[0_1px_3px_rgba(0,0,0,.05)]"
          >
            <div className="flex items-center gap-2 border-b border-line-soft bg-sidebar px-[14px] py-[11px]">
              <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f57]" />
              <span className="h-2.5 w-2.5 rounded-full bg-[#febc2e]" />
              <span className="h-2.5 w-2.5 rounded-full bg-[#28c840]" />
              <div className="ml-2 flex flex-1 items-center gap-[7px] rounded-md border border-line bg-white px-[11px] py-[5px] font-mono text-[11.5px] text-ink-3">
                <svg
                  width="11"
                  height="11"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  aria-hidden
                >
                  <rect x="4" y="10" width="16" height="11" rx="2" />
                  <path d="M8 10V7a4 4 0 0 1 8 0v3" />
                </svg>
                <span>
                  {addressHost}
                  <span className="text-ink">{addressPath}</span>
                </span>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-3 p-[18px] [touch-action:pan-y] min-[500px]:grid-cols-3 min-[700px]:grid-cols-4 lg:grid-cols-6">
              {visibleTiles.map((tile) => (
                <ProductTile
                  key={`${panel.generation}-${tile.id}`}
                  id={tile.id}
                  label={text.tiles[tile.id]}
                  tint={tile.tint}
                  importance={panel.importance}
                  cost={panel.cost}
                  prefetched={panel.prefetched[tile.id]}
                  onIntent={panel.recordIntent}
                  text={{
                    tileImageLabel: text.tileImageLabel,
                    tileBadge: text.tileBadge,
                  }}
                />
              ))}
            </div>
            <div className="flex h-[54px] items-center justify-between gap-3 overflow-hidden border-t border-line-soft bg-sidebar px-4 py-2.5">
              {panel.toast ? (
                <Toast className="inline-flex min-w-0 max-w-full flex-1 items-center gap-[9px] overflow-hidden whitespace-nowrap rounded-lg border border-white/[0.14] bg-term-bg px-3 py-[7px] font-mono text-xs text-term-ink shadow-[0_8px_20px_-8px_rgba(11,18,32,.45)]">
                  <span className="h-[7px] w-[7px] shrink-0 rounded-full bg-[#28c840] shadow-[0_0_8px_#28c840]" />
                  <span className="min-w-0 truncate whitespace-nowrap">
                    <span className="min-[700px]:hidden">
                      <span className="text-[#82aaff]">prefetch(</span>
                      <span className="text-[#c3e88d]">&quot;{panel.toast.path}&quot;</span>
                      <span className="text-[#82aaff]">)</span>
                    </span>
                    <span className="hidden min-[700px]:inline">
                      <span className="text-term-dim">onIntent → </span>
                      <span className="text-[#82aaff]">router.prefetch(</span>
                      <span className="text-[#c3e88d]">&apos;{panel.toast.path}&apos;</span>
                      <span className="text-[#82aaff]">)</span>
                    </span>
                  </span>
                </Toast>
              ) : (
                <span className="min-w-0 truncate font-mono text-xs text-ink-3">{text.storefrontIdle}</span>
              )}
              <span className="shrink-0 font-mono text-[11px] text-ink-3">{text.categories(visibleTiles.length)}</span>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
};

export { PredictionFieldDemo };
