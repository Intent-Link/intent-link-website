"use client";

import { useContext, useEffect, useRef } from "react";
import { IntentContext } from "intent-link";
import { ProbabilityRing } from "./probability-ring";
import { testIds } from "@/constants/test-ids";

interface ProductTileProps {
  id: string;
  label: string;
}

/**
 * Custom target-aware component for the demo. Registers itself with the real
 * `intent-link` IntentContext and reads back its live probability — the
 * canonical "build your own consumer" pattern from the package docs.
 */
const ProductTile = ({ id, label }: ProductTileProps) => {
  const elementRef = useRef<HTMLDivElement>(null);
  const { probabilities, registerLink, unregisterLink } = useContext(IntentContext);

  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;
    registerLink(id, element);
    return () => unregisterLink(id);
  }, [id, registerLink, unregisterLink]);

  const probability = probabilities[id]?.probability ?? 0;

  return (
    <div
      ref={elementRef}
      data-testid={testIds.productTile.root}
      className="relative rounded-lg border border-line p-4"
    >
      <div className="absolute right-2 top-2">
        <ProbabilityRing value={probability} />
      </div>
      <span className="text-sm">{label}</span>
    </div>
  );
};

export { ProductTile };
