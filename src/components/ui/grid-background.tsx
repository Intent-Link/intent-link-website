import { cn } from "@/lib/utils";
import { testIds } from "@/constants/test-ids";

interface GridBackgroundProps {
  className?: string;
}

/** Decorative blueprint grid (var(--grid) lines). Purely visual. */
const GridBackground = ({ className }: GridBackgroundProps) => {
  return (
    <div
      aria-hidden
      data-testid={testIds.gridBackground.root}
      className={cn("pointer-events-none absolute inset-0", className)}
      style={{
        backgroundImage:
          "linear-gradient(var(--grid) 1px, transparent 1px), linear-gradient(90deg, var(--grid) 1px, transparent 1px)",
        backgroundSize: "64px 64px",
      }}
    />
  );
};

export { GridBackground };
