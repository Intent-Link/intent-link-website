import type { DocText } from "@/content/docs/types";

const importanceAndCost: DocText = {
  "toc.importance": "importance",
  "toc.cost": "cost",
  "toc.picking": "Picking values",
  "intro": "The probability is just evidence. Whether `onIntent` actually fires is decided by two per-link knobs — `importance` and `cost` — that turn evidence into a decision. `onIntent` fires the first time a target's utility crosses above zero.",
  "exampleLead": "Set both as props on any `IntentLink`:",
  "col.value": "Value",
  "col.effect": "Effect",
  "importanceHeading": "importance: how readily to act",
  "importanceBody": "How much weight predicted intent alone carries. Raise it for targets you're happy to act on early (a prominent CTA).",
  "importance.high": "Fires early, on weaker evidence",
  "importance.medium": "Balanced **(default)**",
  "importance.low": "Waits until nearly certain",
  "costHeading": "cost: the price of a wrong guess",
  "costBody": "The penalty for firing `onIntent` when it turns out you weren't heading there. Raise it when a wrong guess is expensive or disruptive.",
  "cost.high": "Very cautious, needs strong evidence",
  "cost.medium": "Balanced",
  "cost.low": "Aggressive, cheap to be wrong **(default)**",
  "pickingHeading": "Picking values",
  "picking.cheap": "**Cheap action** (a `router.prefetch`): high importance, low cost. Fire early and often.",
  "picking.expensive": "**Expensive action** (a metered API call, a websocket): lower importance, higher cost. Wait for near-certainty.",
  "pickingNote": "`onIntent` fires once per approach; it re-arms after the target's probability drops back down, so a fresh approach can fire it again.",
};

export { importanceAndCost };
