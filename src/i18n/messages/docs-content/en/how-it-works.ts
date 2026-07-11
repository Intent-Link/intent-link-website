import type { DocText } from "@/content/docs/types";

const howItWorks: DocText = {
  "toc.the-estimate": "Reading your motion",
  "toc.scoring": "Your target has gravity",
  "toc.probability": "Probability",
  "intro": "intent-link models pointer motion as a physical system. `IntentProvider` runs a loop that, each frame, reads how you're moving and scores every registered target. The result is a live probability per target.",
  "estimateHeading": "Reading your motion",
  "estimateBody": "Raw pointer input is jittery, so intent-link smooths it into a steady read of your motion — both how fast you're going and how confident it can be in that read right now. A quick, committed motion reads clearly; a slow, wandering one stays ambiguous.",
  "scoringHeading": "Your target has gravity",
  "scoringBody": "Think of every target as having its own gravity. A target pulls harder the more your motion commits toward it and the closer it sits to where you're heading. Each frame, intent-link turns that pull into a single `weight` per target.",
  "scoringNote": "A target lined up with a confident motion scores high. One off to the side — or that your motion isn't really committing to — fades toward zero.",
  "probabilityHeading": "Probability & the null option",
  "probabilityBody": "Weights become probabilities by weighing each target against its neighbors, plus a constant `1` in the denominator:",
  "nullOption": "That leading `1` is a **\"heading nowhere\" option**: probabilities never sum to 1 across your links, so the engine can stay unsure and simply not fire. Every target's live [PhysicsState](intent-context#physicsstate) is exposed through `IntentContext`.",
  "touch": "On touch devices there is no cursor, so the engine tracks [scroll velocity](mobile-behavior) instead and scores targets by vertical proximity.",
};

export { howItWorks };
