"use client";

import { useCopy } from "@/hooks/use-copy";
import { useCommonText } from "@/hooks/use-common-text";
import { testIds } from "@/constants/test-ids";
import { cn } from "@/lib/utils";

interface CopyButtonProps {
  value: string;
  /** Idle label; defaults to the localized "Copy" string. */
  label?: string;
  className?: string;
}

/** Copy-to-clipboard button whose label flips to the localized "copied" string. */
const CopyButton = ({ value, label, className }: CopyButtonProps) => {
  const { copied, copy } = useCopy();
  const text = useCommonText();
  return (
    <button
      type="button"
      data-testid={testIds.copyButton.root}
      onClick={() => copy(value)}
      className={cn("font-mono text-xs text-ink-2", className)}
    >
      {copied ? text.actions.copied : (label ?? text.actions.copy)}
    </button>
  );
};

export { CopyButton };
