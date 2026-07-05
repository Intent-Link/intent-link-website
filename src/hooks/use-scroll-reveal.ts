"use client";

import { useEffect, useRef, useState, type RefObject } from "react";

interface UseScrollRevealInfo<T extends HTMLElement> {
  ref: RefObject<T | null>;
  revealed: boolean;
}

/**
 * IntersectionObserver-based reveal. Returns a ref to attach and whether the
 * element has entered the viewport. Respects prefers-reduced-motion.
 */
const useScrollReveal = <T extends HTMLElement = HTMLDivElement>(): UseScrollRevealInfo<T> => {
  const ref = useRef<T>(null);
  const [revealed, setRevealed] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const observer = new IntersectionObserver(
      ([entry]) => {
        // setState lives in the observer callback (an event), not the effect body.
        if (reduceMotion || entry.isIntersecting) {
          setRevealed(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 },
    );
    observer.observe(element);
    return () => observer.disconnect();
  }, []);

  return { ref, revealed };
};

export { useScrollReveal };
