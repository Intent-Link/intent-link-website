import type { DocText } from "@/content/docs/types";

const quickstart: DocText = {
  "toc.1-install": "Install",
  "toc.2-wrap": "Wrap your app",
  "toc.3-links": "Swap your links",
  "intro": "Get from install to a working prediction in a few minutes. intent-link watches pointer motion, estimates where it's heading with a Kalman filter, and fires onIntent once a link is the likely target, before the click.",
  "installHeading": "1 · Install",
  "peerDeps": "Peer dependencies: `react ≥ 18`, `react-dom ≥ 18`, `next ≥ 13`.",
  "wrapHeading": "2 · Wrap your app once",
  "wrapBody": "Mount `IntentProvider` near the root. It runs the prediction engine and computes a live probability for every registered target. It's a client component, so in the App Router it must sit inside a `\"use client\"` boundary.",
  "linksHeading": "3 · Swap your links",
  "linksBody": "Use `IntentLink`, a drop-in for `next/link`, and do something in `onIntent`. It fires once, the first time the link's utility crosses zero.",
  "closing": "That's predictive prefetch. Next: tune [importance & cost](importance-and-cost), or read the raw probabilities to build your own behavior.",
};

export { quickstart };
