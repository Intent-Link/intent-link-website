"use client";

import { useEffect, useState } from "react";

/**
 * Track which heading is currently in view for a table of contents. Observes
 * each id and reports the topmost intersecting one. SSR-safe (all DOM access is
 * inside the effect); re-subscribes when the id set changes.
 */
const useScrollSpy = (ids: string[]): string | null => {
  const [activeId, setActiveId] = useState<string | null>(null);
  const key = ids.join(",");

  useEffect(() => {
    const observedIds = key ? key.split(",") : [];
    if (observedIds.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        // setState in the observer callback (an event), not the effect body.
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);
        if (visible[0]) setActiveId(visible[0].target.id);
      },
      { rootMargin: "0px 0px -70% 0px", threshold: 0 },
    );

    for (const id of observedIds) {
      const element = document.getElementById(id);
      if (element) observer.observe(element);
    }
    return () => observer.disconnect();
  }, [key]);

  return activeId;
};

export { useScrollSpy };
