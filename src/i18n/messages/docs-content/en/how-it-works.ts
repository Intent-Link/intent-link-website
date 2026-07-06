import type { DocText } from "@/content/docs/types";

const howItWorks: DocText = {
  "toc.the-estimate": "The estimate",
  "toc.scoring": "Scoring a target",
  "toc.probability": "Probability",
  "intro": "intent-link models pointer motion as a physical system. `IntentProvider` runs a `requestAnimationFrame` loop that, each frame, estimates your motion and scores every registered target. The result is a live probability per target.",
  "estimateHeading": "The estimate",
  "estimateBody": "Raw pointer samples are noisy. A **Kalman filter** (2D for the cursor, 1D for scroll on touch) turns them into a smoothed **velocity** and, critically, an **uncertainty** (σ): how much to trust that estimate right now. A fast, straight motion yields a confident estimate quickly; a slow, wandering one stays uncertain.",
  "scoringHeading": "Scoring a target",
  "scoringBody": "Each target's `weight` combines three exponential terms, two kinetic (from motion) and one potential (from geometry):",
  "scoringNote": "A target that is large (big `w`), close (small `d`), and aligned with a confident motion scores high. A tiny, far, or off-trajectory target scores near zero.",
  "probabilityHeading": "Probability & the null option",
  "probabilityBody": "Weights are normalized into probabilities with a softmax-style denominator that includes a constant `1`:",
  "nullOption": "That leading `1` is a **\"heading nowhere\" option**: probabilities never sum to 1 across your links, so the engine can stay unsure and simply not fire. Every target's live [PhysicsState](intent-context#physicsstate) (probability, weight, and the three terms) is exposed through `IntentContext`.",
  "touch": "On touch devices there is no cursor, so the engine tracks [scroll velocity](mobile-behavior) instead and scores targets by vertical proximity.",
};

export { howItWorks };
