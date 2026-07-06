"use client";

import { cn } from "@/utils/class-names";

interface Segment {
  value: string;
  label: string;
}

interface SegmentedControlProps {
  segments: Segment[];
  value: string;
  onChange: (value: string) => void;
  className?: string;
}

/**
 * Sliding-thumb segmented control — a glossy knob slides under the options with
 * a spring bounce (the prototype's importance/cost tuning sliders). Designed for
 * the dark console surface.
 */
const SegmentedControl = ({ segments, value, onChange, className }: SegmentedControlProps) => {
  const activeIndex = Math.max(
    0,
    segments.findIndex((segment) => segment.value === value),
  );

  return (
    <div
      className={cn(
        "relative inline-flex w-full overflow-hidden rounded-[9px] bg-white/[0.08] p-[3px]",
        className,
      )}
    >
      <span
        aria-hidden
        className="absolute inset-y-[3px] left-[3px] rounded-md bg-[linear-gradient(180deg,#ffffff,#dfeafc)] shadow-[inset_0_1px_0_rgba(255,255,255,.95),0_1px_3px_rgba(0,0,0,.35),0_4px_12px_-2px_rgba(0,102,255,.5)] transition-transform duration-[380ms] ease-[cubic-bezier(0.34,1.56,0.5,1)]"
        style={{
          width: `calc((100% - 6px) / ${segments.length})`,
          transform: `translateX(${activeIndex * 100}%)`,
        }}
      />
      {segments.map((segment) => {
        const isActive = segment.value === value;
        return (
          <button
            key={segment.value}
            type="button"
            onClick={() => onChange(segment.value)}
            data-active={isActive}
            className={cn(
              "relative z-10 flex-1 rounded-md px-3 py-[7px] font-mono text-[11px] font-semibold transition-colors",
              isActive ? "text-[#0b1220]" : "text-term-dim hover:text-term-ink",
            )}
          >
            {segment.label}
          </button>
        );
      })}
    </div>
  );
};

export { SegmentedControl };
