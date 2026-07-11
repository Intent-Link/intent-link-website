import type { DocText } from "@/content/docs/types";

const installation: DocText = {
  "toc.requirements": "Requirements",
  "toc.app-router": "Mounting",
  "intro": "intent-link ships as ESM + CJS with TypeScript types. Install with your package manager of choice.",
  "requirementsHeading": "Requirements",
  "col.peer": "Peer dependency",
  "col.version": "Version",
  "appRouterHeading": "Mounting",
  "appRouterBody": "Every export ships its own `\"use client\"` directive, so you never add one yourself. Mount `IntentProvider` once in your `app/layout.jsx` — it works directly inside the server layout. See the [Quickstart](quickstart) for the full snippet.",
};

export { installation };
