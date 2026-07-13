"use client";

import { memo, useCallback } from "react";
import { useIntentTarget, type IntentLevel } from "intent-link";
import { tileIcons } from "./tile-icons";
import { cn } from "@/utils/class-names";
import type { TileCategory } from "@/constants/tile-categories";

interface ProductTileProps {
  id: TileCategory;
  label: string;
  tint?: string;
  importance?: IntentLevel;
  cost?: IntentLevel;
  prefetched?: boolean;
  onIntent?: (id: TileCategory) => void;
  text: {
    tileImageLabel: string;
    tileBadge: string;
  };
}

/** A custom target driven only by intent-link's supported useIntentTarget API. */
const ProductTile = memo(({
  id,
  label,
  tint,
  importance = "medium",
  cost = "low",
  prefetched = false,
  onIntent,
  text,
}: ProductTileProps) => {
  const handleIntent = useCallback(() => onIntent?.(id), [id, onIntent]);
  const intentRef = useIntentTarget<HTMLDivElement>({ importance, cost, onIntent: handleIntent });
  const Icon = tileIcons[id];

  return (
    <div
      ref={intentRef}
      data-card={id}
      style={{ backgroundColor: tint }}
      className={cn(
        "relative block aspect-[4/5] overflow-hidden rounded-xl border-2 transition-colors [touch-action:pan-y] min-[500px]:aspect-square min-[700px]:h-[92px] min-[700px]:aspect-auto sm:transition-[border-color,box-shadow]",
        prefetched
          ? "border-accent shadow-[0_1px_3px_rgba(0,0,0,.05)] sm:shadow-[0_10px_28px_-12px_rgba(0,102,255,.5)]"
          : "border-[rgba(0,0,0,.1)] shadow-[0_1px_3px_rgba(0,0,0,.05)]",
      )}
    >
      <div className="absolute left-[13px] top-[13px] text-black/[0.26]">
        <Icon className="h-6 w-6" />
        <span className="sr-only">{text.tileImageLabel}</span>
      </div>

      {prefetched && (
        <span className="absolute right-[10px] top-[10px] rounded-full bg-accent px-2 py-[3px] font-mono text-[9px] font-semibold text-white">
          {text.tileBadge}
        </span>
      )}

      <div className="absolute inset-x-0 bottom-0 z-[2] px-[13px] pb-[10px]">
        <span className="text-[13.5px] font-semibold tracking-[-0.01em] text-ink">{label}</span>
      </div>
    </div>
  );
});

ProductTile.displayName = "ProductTile";

export { ProductTile };
