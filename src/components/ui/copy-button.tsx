"use client";

import type { ReactNode } from "react";
import { useCopy } from "@/hooks/use-copy";
import { useCommonText } from "@/hooks/use-common-text";
import { cn } from "@/utils/class-names";

interface CopyButtonProps {
  value: string;
  /** Idle label; defaults to the localized "copy" string. */
  label?: string;
  className?: string;
  /** Extra classes applied only while in the copied state (e.g. accent tint). */
  copiedClassName?: string;
  /** Leading icon; swapped for a check mark while in the copied state. */
  icon?: ReactNode;
  /** Classes on the label span (e.g. `hidden sm:inline` for icon-only mobile). */
  labelClassName?: string;
}

const checkIcon = (
  <svg
    width="12"
    height="12"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={2.4}
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden
  >
    <path d="M20 6 9 17l-5-5" />
  </svg>
);

/** Copy-to-clipboard button whose label flips to the localized "copied" string. */
const CopyButton = ({
  value,
  label,
  className,
  copiedClassName,
  icon,
  labelClassName,
}: CopyButtonProps) => {
  const { copied, copy } = useCopy();
  const text = useCommonText();
  const idleLabel = label ?? text.actions.copy;
  return (
    <button
      type="button"
      aria-label={idleLabel}
      onClick={() => copy(value)}
      className={cn("font-mono text-xs text-ink-2", className, copied && copiedClassName)}
    >
      {icon && (copied ? checkIcon : icon)}
      <span className={labelClassName}>{copied ? text.actions.copied : idleLabel}</span>
    </button>
  );
};

export { CopyButton };
