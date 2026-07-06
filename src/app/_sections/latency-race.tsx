"use client";

import { Section } from "@/components/ui/section";
import { SectionHeading } from "@/components/ui/section-heading";
import { Skeleton } from "@/components/ui/skeleton";
import { Spinner } from "@/components/ui/spinner";
import { cn } from "@/utils/class-names";
import { useLatencyRace, racePhase, armStatus, type RacePhase } from "@/hooks/use-latency-race";
import { useSectionsText } from "@/hooks/use-sections-text";
import { useLocale } from "@/i18n/locale-provider";
import { sectionIds } from "@/constants/section-ids";
import { testIds } from "@/constants/test-ids";
import type { SectionsText } from "@/i18n/messages/sections";

interface RacePanelBodyProps {
  phase: RacePhase;
  accent: boolean;
  text: SectionsText["latencyRace"];
}

const RacePanelBody = ({ phase, accent, text }: RacePanelBodyProps) => {
  if (phase === racePhase.idle) {
    return (
      <div className="flex h-[200px] items-center justify-center font-mono text-[11.5px] text-ink-3">
        {text.productPath}
      </div>
    );
  }

  if (phase === racePhase.loading) {
    // "With intent-link" loads less: two skeletons, no spinner.
    if (accent) {
      return (
        <div className="flex flex-col gap-3">
          <Skeleton className="h-24 w-full" />
          <Skeleton className="h-3.5 w-[70%]" />
        </div>
      );
    }
    return (
      <div className="flex flex-col gap-3">
        <Skeleton className="h-24 w-full" />
        <Skeleton className="h-3.5 w-[70%]" />
        <Skeleton className="h-3.5 w-[45%]" />
        <div className="mt-1 flex items-center gap-2 font-mono text-[11px] text-ink-3">
          <Spinner className="h-[13px] w-[13px]" />
          {text.fetching}
        </div>
      </div>
    );
  }

  return (
    <div className="flex animate-[il-fadein_.3s_ease] flex-col gap-2.5">
      <div className="h-24 rounded-lg bg-[repeating-linear-gradient(135deg,#eef0f4_0_14px,rgba(0,0,0,.035)_14px_28px)]" />
      <p className="text-[15px] font-bold tracking-[-0.01em]">{text.productName}</p>
      <p className="font-mono text-[13px] text-ink-2">{text.productPrice}</p>
      <div
        className={cn(
          "mt-0.5 rounded-[7px] px-2 py-2 text-center text-[12.5px] font-semibold text-white",
          accent ? "bg-accent" : "bg-ink",
        )}
      >
        {text.addToCart}
      </div>
    </div>
  );
};

/** Latency Race (03) — two panels race idle → loading → done; the "with" panel arms on approach. */
const LatencyRace = () => {
  const locale = useLocale();
  const text = useSectionsText().latencyRace;
  const race = useLatencyRace();

  const withoutDone = race.without === racePhase.done;
  const withReady = race.withStatus === armStatus.ready;
  const withDone = race.withIntent === racePhase.done;
  const armedReady = withReady;

  const withoutBadge =
    race.without === racePhase.idle
      ? text.notLoaded
      : race.without === racePhase.loading
        ? "…"
        : text.milliseconds(race.withoutMs);

  // Design gates the "instant" claim + green on sub-120ms; a slow/unarmed run reads plain + orange.
  const withFast = withDone && race.withMs < 120;

  const withBadge = withDone
    ? withFast
      ? text.instant(race.withMs)
      : text.milliseconds(race.withMs)
    : withReady
      ? text.ready
      : race.withStatus === armStatus.prefetching
        ? text.prefetching
        : text.idle;

  const withStatusClass =
    withReady || withFast
      ? "text-[#15803d]"
      : withDone
        ? "text-[#c2410c]"
        : race.withStatus === armStatus.prefetching
          ? "text-accent"
          : "text-ink-3";

  const controlLabel = race.running
    ? text.opening
    : withDone
      ? text.replay
      : text.open;

  return (
    <Section
      id={sectionIds.latencyRace}
      testId={testIds.section.latencyRace}
      ariaLabel={text.ariaLabel}
      decor="glyph"
      glyphVariant="race"
      className="border-t border-line-soft bg-[linear-gradient(180deg,rgba(255,255,255,0),var(--paper)_90%)]"
    >
      <div className="mx-auto max-w-[1240px] px-8 pb-[100px] pt-[88px]" onPointerMove={race.arm}>
        <div className="mb-[30px] flex flex-wrap items-end justify-between gap-7">
          <SectionHeading
            eyebrow={text.eyebrow}
            heading={text.heading}
            body={text.body}
            className="max-w-[52ch]"
          />
          <div className="flex-none rounded-[14px] border border-line bg-surface px-5 py-3.5 text-right shadow-[0_1px_3px_rgba(0,0,0,.05)]">
            <p className="mb-1 font-mono text-[10.5px] uppercase tracking-[0.04em] text-ink-3">
              {text.timeSavedLabel}
            </p>
            <p
              className="font-mono text-[34px] font-bold leading-none text-accent tabular-nums"
            >
              {race.timeSaved.toLocaleString(locale)}
              <span className="text-[16px] font-medium text-ink-3"> ms</span>
            </p>
          </div>
        </div>

        <div className="grid gap-5 sm:grid-cols-2">
          <div
            className="overflow-hidden rounded-2xl border border-line bg-surface shadow-[0_1px_3px_rgba(0,0,0,.05)]"
          >
            <div className="flex items-center justify-between gap-2.5 border-b border-line-soft bg-sidebar px-[15px] py-[11px]">
              <span className="font-mono text-[12px] font-semibold text-ink-2">
                {text.withoutTitle}
              </span>
              <span
                className={cn(
                  "font-mono text-[11px]",
                  withoutDone ? "text-[#c2410c]" : "text-ink-3",
                )}
              >
                {withoutBadge}
              </span>
            </div>
            <div className="relative min-h-[236px] p-[18px]">
              <RacePanelBody phase={race.without} accent={false} text={text} />
            </div>
          </div>

          <div
            className={cn(
              "overflow-hidden rounded-2xl border bg-surface transition-all",
              withReady
                ? "border-accent shadow-[0_10px_28px_-12px_rgba(0,102,255,.5)]"
                : withDone
                  ? "border-accent shadow-[0_1px_3px_rgba(0,0,0,.05)]"
                  : "border-line shadow-[0_1px_3px_rgba(0,0,0,.05)]",
            )}
          >
            <div className="flex items-center justify-between gap-2.5 border-b border-line-soft bg-sidebar px-[15px] py-[11px]">
              <span className="font-mono text-[12px] font-semibold text-ink">{text.withTitle}</span>
              <span
                className={cn(
                  "inline-flex items-center gap-1.5 font-mono text-[11px]",
                  withStatusClass,
                )}
              >
                <span className="block h-1.5 w-1.5 rounded-full bg-current" />
                {withBadge}
              </span>
            </div>
            <div className="relative min-h-[236px] p-[18px]">
              <RacePanelBody phase={race.withIntent} accent text={text} />
            </div>
          </div>
        </div>

        <div className="mt-[26px] flex flex-col items-center gap-2.5">
          <button
            type="button"
            onClick={race.run}
            className="inline-flex items-center gap-[9px] rounded-lg bg-accent px-[26px] py-[13px] font-mono text-sm font-semibold text-accent-ink shadow-[0_6px_18px_-6px_rgba(0,102,255,.5)]"
          >
            {controlLabel}
          </button>
          <span className="font-mono text-[11px] text-ink-3">
            {armedReady ? text.hintAfter : text.hintBefore}
          </span>
        </div>
      </div>
    </Section>
  );
};

export { LatencyRace };
