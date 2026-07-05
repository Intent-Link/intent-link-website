"use client";

import { useCallback, useRef, useState } from "react";

interface UseCopyInfo {
  copied: boolean;
  copy: (value: string) => Promise<void>;
}

/** Copy text to the clipboard and expose a transient `copied` flag. */
const useCopy = (resetMilliseconds = 1600): UseCopyInfo => {
  const [copied, setCopied] = useState(false);
  const timer = useRef<ReturnType<typeof setTimeout> | null>(null);

  const copy = useCallback(
    async (value: string) => {
      try {
        await navigator.clipboard.writeText(value);
        setCopied(true);
        if (timer.current) clearTimeout(timer.current);
        timer.current = setTimeout(() => setCopied(false), resetMilliseconds);
      } catch {
        setCopied(false);
      }
    },
    [resetMilliseconds],
  );

  return { copied, copy };
};

export { useCopy };
