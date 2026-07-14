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
 * Sliding-thumb segmented control with a neutral shadcn-style surface.
 */
const SegmentedControl = ({ segments, value, onChange, className }: SegmentedControlProps) => {
  const activeIndex = Math.max(
    0,
    segments.findIndex((segment) => segment.value === value),
  );

  return (
    <div
      className={cn(
        "relative inline-flex w-full overflow-hidden rounded-[9px] bg-[#f4f4f5] p-[3px]",
        className,
      )}
    >
      <span
        aria-hidden
        className="absolute inset-y-[3px] left-[3px] rounded-md bg-white shadow-[0_1px_3px_rgba(0,0,0,.12)] transition-transform duration-[380ms] ease-[cubic-bezier(0.34,1.56,0.5,1)]"
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
              isActive ? "text-[#09090b]" : "text-[#71717a] hover:text-[#3f3f46]",
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
