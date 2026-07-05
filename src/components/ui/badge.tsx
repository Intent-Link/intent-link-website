import type { ReactNode } from "react";
import { cn } from "@/lib/utils";
import { testIds } from "@/constants/test-ids";

interface BadgeProps {
  children: ReactNode;
  className?: string;
}

/** shields.io-style split badge (npm / license / react / next). TODO: style. */
const Badge = ({ children, className }: BadgeProps) => {
  return (
    <span
      data-testid={testIds.badge.root}
      className={cn(
        "inline-flex items-center gap-1 rounded font-mono text-xs text-ink-2",
        className,
      )}
    >
      {children}
    </span>
  );
};

export { Badge };
