import type { DocText } from "@/content/docs/types";

const mobileBehavior: DocText = {
  "toc.scroll": "Scroll model",
  "toc.diff": "Differences",
  "intro": "On touch devices there is no cursor, so intent comes from **scroll velocity** instead.",
  "scrollHeading": "The scroll model",
  "scroll.origin": "The “agent” origin is fixed near the reading position: `innerWidth × 0.5`, `innerHeight × 0.6`.",
  "scroll.vertical": "Only the **vertical** axis is scored (horizontal distance is ignored). A user decelerating near a target signals intent.",
  "scroll.weight": "Probabilities are not normalized by weighing links against each other. Instead, the raw “weight” probability score is used.",
  "diffHeading": "Differences from desktop",
  "diffBody": "No changes are needed. The same `IntentLink` and `onIntent` work.",
};

export { mobileBehavior };
