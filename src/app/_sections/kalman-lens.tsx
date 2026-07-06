"use client";

import type { ReactNode } from "react";
import { Section } from "@/components/ui/section";
import { SectionHeading } from "@/components/ui/section-heading";
import { useKalmanLens } from "@/hooks/use-kalman-lens";
import { useMediaQuery } from "@/hooks/use-media-query";
import { sectionIds } from "@/constants/section-ids";
import { testIds } from "@/constants/test-ids";
import type { SectionsText } from "@/i18n/messages/sections";

interface KalmanLensProps {
  text: SectionsText["kalmanLens"];
}

const legendSwatch: Record<"raw" | "filtered" | "cone", ReactNode> = {
  raw: <span className="block h-2 w-2 rounded-full bg-[rgba(20,30,45,.28)]" />,
  filtered: <span className="block h-[3px] w-3.5 rounded-sm bg-accent" />,
  cone: (
    <span className="block h-0 w-0 border-x-[7px] border-b-[11px] border-x-transparent border-b-[rgba(0,102,255,.28)]" />
  ),
};

/** Kalman Lens (02) — three beat cards + an interactive filtered-estimate canvas. */
const KalmanLens = ({ text }: KalmanLensProps) => {
  const { canvasRef } = useKalmanLens();
  const isTouch = useMediaQuery("(pointer: coarse)");

  return (
    <Section
      id={sectionIds.kalmanLens}
      testId={testIds.section.kalmanLens}
      ariaLabel={text.ariaLabel}
      decor="glyph"
      glyphVariant="how"
      className="border-t border-line-soft"
    >
      <div className="mx-auto max-w-[1240px] px-8 pb-[100px] pt-[88px]">
        <SectionHeading
          eyebrow={text.eyebrow}
          heading={text.heading}
          body={text.body}
          className="mb-[34px] max-w-[62ch]"
        />

        <div className="flex flex-col gap-[18px]">
          <div className="grid gap-4 sm:grid-cols-3">
            {text.beats.map((beat, index) => (
              <div
                key={beat.title}
                className="rounded-[14px] border border-line bg-surface p-[16px_18px] shadow-[0_1px_3px_rgba(0,0,0,.05)]"
              >
                <div className="flex items-center gap-2.5">
                  <span className="grid h-[22px] w-[22px] place-items-center rounded-md bg-accent font-mono text-[11px] font-bold text-white">
                    {index + 1}
                  </span>
                  <span className="text-[14.5px] font-bold tracking-[-0.01em]">{beat.title}</span>
                </div>
                <p className="mt-1.5 text-[12.5px] leading-[1.45] text-ink-2">{beat.body}</p>
              </div>
            ))}
          </div>

          <div className="relative min-h-[420px] overflow-hidden rounded-2xl border border-line bg-surface shadow-[0_1px_3px_rgba(0,0,0,.05)]">
            <canvas
              ref={canvasRef}
              className="block h-[420px] w-full cursor-crosshair [touch-action:none]"
            />
            <p className="pointer-events-none absolute left-4 top-3.5 font-mono text-[11px] text-ink-3">
              {isTouch ? text.hintTouch : text.hintCursor}
            </p>
            <div
              className="pointer-events-none absolute bottom-3.5 left-4 flex flex-wrap items-center gap-x-4 gap-y-2 font-mono text-[10.5px] text-ink-2"
            >
              {(["raw", "filtered", "cone"] as const).map((key) => (
                <span key={key} className="flex items-center gap-1.5">
                  {legendSwatch[key]}
                  {text.legend[key]}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
};

export { KalmanLens };
