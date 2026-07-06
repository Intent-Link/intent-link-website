import type { ReactNode } from "react";
import { cn } from "@/utils/class-names";

interface ChipProps {
  children: ReactNode;
  /** Show the leading accent status dot. Defaults to true. */
  dot?: boolean;
  className?: string;
}

/** Eyebrow / pill chip: a blue status dot + an accent mono label on a tinted pill. */
const Chip = ({ children, dot = true, className }: ChipProps) => (
  <span
    className={cn(
      "inline-flex items-center gap-2 rounded-full border border-accent/30 bg-accent/[0.06] px-3 py-[5px] font-mono text-xs text-accent",
      className,
    )}
  >
    {dot && <span className="h-1.5 w-1.5 rounded-full bg-accent" />}
    {children}
  </span>
);

export { Chip };
