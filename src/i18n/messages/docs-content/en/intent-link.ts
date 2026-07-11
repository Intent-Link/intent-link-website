import type { DocText } from "@/content/docs/types";

const intentLink: DocText = {
  "toc.props": "Props",
  "toc.onintent": "onIntent",
  "toc.example": "Example",
  "intro": "A prediction-aware drop-in replacement for `next/link`. Accepts everything `next/link` and a native `<a>` accept; anything not listed below passes straight through to the anchor. `ref` is forwarded.",
  "propsHeading": "Props",
  "col.prop": "Prop",
  "col.type": "Type",
  "col.default": "Default",
  "col.description": "Description",
  "prop.href": "Required. Same as next/link.",
  "prop.importance": "How readily predicted intent triggers onIntent.",
  "prop.cost": "Penalty for a false trigger.",
  "prop.onIntent": "Called once when utility crosses zero.",
  "prop.rest": "Any next/link or anchor prop (className, style, ref…).",
  "prefetchNote": "Note: `IntentLink` sets `prefetch={false}` on the underlying `next/link`. Prefetching is treated as one consumer of the signal, never forced.",
  "onIntentHeading": "onIntent",
  "onIntentBody": "Fires once, the first time the target's utility crosses above zero. The callback receives:",
  "exampleHeading": "Example",
};

export { intentLink };
