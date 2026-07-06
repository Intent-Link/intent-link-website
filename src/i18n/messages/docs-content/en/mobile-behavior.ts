import type { DocText } from "@/content/docs/types";

const mobileBehavior: DocText = {
  "toc.scroll": "Scroll model",
  "toc.diff": "Differences",
  "intro": "On touch devices (`pointer: coarse`) there is no cursor, so the engine falls back to **scroll velocity**, fed through a 1D Kalman filter.",
  "scrollHeading": "The scroll model",
  "scroll.origin": "The “agent” origin is fixed near the reading position: `innerWidth × 0.5`, `innerHeight × 0.6`.",
  "scroll.vertical": "Only the **vertical** axis is scored (horizontal distance is ignored). A user decelerating near a target signals intent.",
  "scroll.weight": "Probabilities are **not** softmax-normalized on touch; each target's `weight` is used directly.",
  "diffHeading": "Differences from desktop",
  "diffBody": "No code changes are needed. The same `IntentLink` and `onIntent` work. Just tune expectations: scroll intent is coarser than cursor trajectory, so consider slightly higher `importance` for key targets on mobile.",
};

export { mobileBehavior };
