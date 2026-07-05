"use client";

import { cn } from "@/lib/utils";
import { testIds } from "@/constants/test-ids";

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

/** Sliding-thumb segmented control (PM tabs / importance-cost / code tabs). */
const SegmentedControl = ({ segments, value, onChange, className }: SegmentedControlProps) => (
  <div
    data-testid={testIds.segmentedControl.root}
    className={cn("inline-flex rounded-md border border-line p-0.5", className)}
  >
    {segments.map((segment) => (
      <button
        key={segment.value}
        type="button"
        data-testid={testIds.segmentedControl.segment}
        onClick={() => onChange(segment.value)}
        data-active={segment.value === value}
        className="rounded px-3 py-1 text-xs data-[active=true]:bg-accent data-[active=true]:text-accent-ink"
      >
        {segment.label}
      </button>
    ))}
  </div>
);

export { SegmentedControl };
export type { Segment };
