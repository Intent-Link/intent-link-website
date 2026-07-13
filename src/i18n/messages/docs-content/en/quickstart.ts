import type { DocText } from "@/content/docs/types";

const quickstart: DocText = {
  "toc.1-install": "Install",
  "toc.2-wrap": "Wrap your app",
  "toc.3-links": "Use IntentLink",
  "intro": "Add intent-aware actions to a Next.js app in three steps.",
  "installHeading": "1 · Install",
  "wrapHeading": "2 · Wrap your app once",
  "wrapBody": "Mount `IntentProvider` once in your root layout. It runs the shared intent engine for everything inside it.",
  "linksHeading": "3 · Use IntentLink",
  "linksBody": "Use `IntentLink` like a normal Next.js link and put the work you want to start early inside `onIntent`.",
  "closing": "That is all most applications need. The library does not prefetch automatically—you choose what `onIntent` does.",
};

export { quickstart };
