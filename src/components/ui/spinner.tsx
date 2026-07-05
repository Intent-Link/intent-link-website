"use client";

import { cn } from "@/lib/utils";
import { testIds } from "@/constants/test-ids";
import { useCommonText } from "@/hooks/use-common-text";

interface SpinnerProps {
  /** Accessible label; defaults to the localized "Loading" string. */
  label?: string;
  className?: string;
}

/** Loading spinner. Anim: il-spin. */
const Spinner = ({ label, className }: SpinnerProps) => {
  const text = useCommonText();
  const ariaLabel = label ?? text.aria.loading;
  return (
    <span
      role="status"
      aria-label={ariaLabel}
      data-testid={testIds.spinner.root}
      className={cn(
        "inline-block h-4 w-4 animate-[il-spin_.7s_linear_infinite] rounded-full border-2 border-line border-t-accent",
        className,
      )}
    />
  );
};

export { Spinner };
