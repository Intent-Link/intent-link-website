"use client";

import { IntentLink } from "intent-link";
import { useRouter } from "next/navigation";
import { useCallback } from "react";
import type { ComponentProps } from "react";

type PrefetchLinkProps = ComponentProps<typeof IntentLink>;

/**
 * The site eating its own dog food: an internal link powered by the real
 * `intent-link` engine. When the prediction engine decides this link is the
 * likely target (before the click), it warms the route via `router.prefetch`.
 * A drop-in for `next/link` on first-party routes; external links use a plain
 * anchor instead.
 *
 * `onIntent` is memoized so links keep a stable callback while the surrounding
 * layout re-renders.
 */
const PrefetchLink = ({
  href,
  importance = "high",
  cost = "low",
  onIntent,
  ...rest
}: PrefetchLinkProps) => {
  const router = useRouter();
  const handleIntent = useCallback<NonNullable<PrefetchLinkProps["onIntent"]>>(
    () => {
      if (typeof href === "string") router.prefetch(href);
      onIntent?.();
    },
    [href, router, onIntent],
  );
  return (
    <IntentLink href={href} importance={importance} cost={cost} onIntent={handleIntent} {...rest} />
  );
};

export { PrefetchLink };
