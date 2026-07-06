"use client";

import { useEffect, type RefObject } from "react";

/** Dismissal reasons. Const map + derived union — no magic strings. */
const dismissReason = {
  escape: "escape",
  outside: "outside",
} as const;

type DismissReason = (typeof dismissReason)[keyof typeof dismissReason];

interface UseDismissableProps {
  /** Only listen while the overlay is open. */
  when: boolean;
  /** Called on Escape or (when `outsideRef` is set) pointerdown outside it. Must be referentially stable. */
  onDismiss: (reason: DismissReason) => void;
  /** Element whose outside pointerdowns dismiss; omit for Escape-only overlays. */
  outsideRef?: RefObject<HTMLElement | null>;
}

/** Shared dismissal wiring for popovers, drawers, and modals: Escape + optional outside click. */
const useDismissable = ({ when, onDismiss, outsideRef }: UseDismissableProps) => {
  useEffect(() => {
    if (!when) {
      return;
    }

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        event.preventDefault();
        onDismiss(dismissReason.escape);
      }
    };

    const handlePointerDown = (event: MouseEvent) => {
      if (!outsideRef?.current?.contains(event.target as Node)) {
        onDismiss(dismissReason.outside);
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    if (outsideRef) {
      document.addEventListener("pointerdown", handlePointerDown);
    }
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      if (outsideRef) {
        document.removeEventListener("pointerdown", handlePointerDown);
      }
    };
  }, [when, onDismiss, outsideRef]);
};

export { useDismissable, dismissReason };
export type { DismissReason };
