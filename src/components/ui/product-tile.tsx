"use client";

import { memo, useContext, useEffect, useRef } from "react";
import { IntentContext } from "intent-link";
import { ProbabilityRing } from "./probability-ring";
import { tileIcons } from "./tile-icons";
import { cn } from "@/utils/class-names";
import type { TileCategory } from "@/constants/tile-categories";

/** Visual state of a demo tile. Const map + derived union — no magic strings. */
const tileState = {
  watching: "watching",
  arming: "arming",
  prefetched: "prefetched",
} as const;

type TileState = (typeof tileState)[keyof typeof tileState];

const stateColor: Record<TileState, string> = {
  watching: "#82aaff",
  arming: "#febc2e",
  prefetched: "#28c840",
};

interface ProductTileProps {
  id: TileCategory;
  label: string;
  /** Solid tint color for the "product shot" image area. */
  tint?: string;
  /** Live probability (0..1). Falls back to the engine's own value if omitted. */
  probability?: number;
  /** Whether this tile has fired `onIntent` (prefetched). */
  armed?: boolean;
  /**
   * Probability at which the engine's utility crosses zero for the current
   * importance/cost knobs (`costWeight / importanceWeight`). "Arming" is shown
   * once probability climbs past 60% of this real fire point, so the state
   * ladder tracks the package's actual decision math instead of a magic
   * number. Defaults to the paper-validated medium-importance / low-cost
   * configuration (0.1 / 0.5 = 0.2).
   */
  fireAt?: number;
  /** Localized state labels + placeholder copy, from `SectionsText["predictionFieldDemo"]`. */
  text: {
    tileStates: Record<TileState, string>;
    tileImageLabel: string;
    tileBadge: string;
  };
}

const resolveState = (armed: boolean, probability: number, fireAt: number): TileState => {
  if (armed) return tileState.prefetched;
  if (probability >= fireAt * 0.6) return tileState.arming;
  return tileState.watching;
};

interface ProductTileViewProps extends Omit<ProductTileProps, "probability"> {
  liveProbability: number;
  registerLink: (id: string, element: HTMLElement) => void;
  unregisterLink: (id: string) => void;
}

/**
 * Memoized visual body. IntentContext republishes its probabilities object
 * every animation frame, so the context read stays in the thin ProductTile
 * wrapper below and this (memoized) part only re-renders when a quantized
 * value actually changes.
 */
const ProductTileView = memo(({
  id,
  label,
  tint,
  liveProbability,
  armed = false,
  fireAt = 0.2,
  text,
  registerLink,
  unregisterLink,
}: ProductTileViewProps) => {
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;
    registerLink(id, element);
    return () => unregisterLink(id);
  }, [id, registerLink, unregisterLink]);
  const state = resolveState(armed, liveProbability, fireAt);
  const percent = Math.round(liveProbability * 100);
  const Icon = tileIcons[id];

  return (
    <div
      ref={elementRef}
      data-card={id}
      style={{ backgroundColor: tint }}
      className={cn(
        "group/tile relative block aspect-[4/5] overflow-hidden rounded-xl border-2 transition-all [touch-action:pan-y] sm:aspect-auto sm:h-[92px]",
        armed
          ? "border-accent scale-[1.015] shadow-[0_10px_28px_-12px_rgba(0,102,255,.5)]"
          : liveProbability >= fireAt * 0.6
            ? "border-[rgba(0,102,255,.4)] shadow-[0_1px_3px_rgba(0,0,0,.05)]"
            : "border-[rgba(0,0,0,.1)] shadow-[0_1px_3px_rgba(0,0,0,.05)]",
      )}
    >
      <div className="absolute left-[13px] top-[13px] text-black/[0.26]">
        <Icon className="h-6 w-6" />
        <span className="sr-only">{text.tileImageLabel}</span>
      </div>

      {armed && (
        <span
          className="absolute left-[13px] bottom-[34px] z-[3] rounded-full bg-accent px-2 py-[3px] font-mono text-[9px] font-semibold text-white"
        >
          {text.tileBadge}
        </span>
      )}

      <div className="absolute right-[9px] top-[9px] z-[3]">
        <div
          className="transition-opacity duration-200"
          style={{ opacity: liveProbability > 0.02 ? 1 : 0.5 }}
        >
          <ProbabilityRing value={liveProbability} />
        </div>
        <div
          className="absolute right-0 top-0 flex h-[34px] origin-top-right scale-90 items-center gap-2 whitespace-nowrap rounded-full border border-white/[0.16] bg-[#0b1220] px-3 opacity-0 shadow-[0_8px_20px_-8px_rgba(11,18,32,.55)] transition-all group-hover/tile:scale-100 group-hover/tile:opacity-100"
        >
          <span
            className="h-[7px] w-[7px] shrink-0 rounded-full"
            style={{ backgroundColor: stateColor[state], boxShadow: `0 0 7px ${stateColor[state]}` }}
          />
          <span className="font-mono text-[11px] font-semibold" style={{ color: stateColor[state] }}>
            {text.tileStates[state]}
          </span>
          <span className="font-mono text-[11px] tabular-nums text-[#e8edf6]">
            {percent}%
          </span>
        </div>
      </div>

      <div className="absolute inset-x-0 bottom-0 z-[2] px-[13px] pb-[10px]">
        <span className="text-[13.5px] font-semibold tracking-[-0.01em] text-ink">{label}</span>
      </div>
    </div>
  );
});

ProductTileView.displayName = "ProductTileView";

/**
 * Custom target-aware component for the demo. Registers itself with the real
 * `intent-link` IntentContext (so the engine tracks it) and paints its live
 * probability ring, hover state chip, and armed/prefetched styling. The live
 * numbers are supplied by the console hook; the engine value is the fallback.
 */
const ProductTile = ({ probability, ...rest }: ProductTileProps) => {
  const { probabilities, registerLink, unregisterLink } = useContext(IntentContext);
  const liveProbability = probability ?? probabilities[rest.id]?.probability ?? 0;

  return (
    <ProductTileView
      {...rest}
      liveProbability={liveProbability}
      registerLink={registerLink}
      unregisterLink={unregisterLink}
    />
  );
};

export { ProductTile };
