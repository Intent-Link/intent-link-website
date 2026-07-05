import type { ReactNode } from "react";
import { cn } from "@/lib/utils";
import { testIds } from "@/constants/test-ids";

interface ChipProps {
  children: ReactNode;
  className?: string;
}

/** Eyebrow / pill chip (dot + label). TODO: style. */
const Chip = ({ children, className }: ChipProps) => (
  <span
    data-testid={testIds.chip.root}
    className={cn(
      "inline-flex items-center gap-1.5 rounded-full border border-line px-3 py-1 text-xs",
      className,
    )}
  >
    {children}
  </span>
);

export { Chip };
