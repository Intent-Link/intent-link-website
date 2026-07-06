import type { DocText } from "@/content/docs/types";

const installation: DocText = {
  "toc.requirements": "Requirements",
  "toc.app-router": "App vs Pages Router",
  "intro": "intent-link ships as ESM + CJS with TypeScript types. Install with your package manager of choice.",
  "requirementsHeading": "Requirements",
  "col.peer": "Peer dependency",
  "col.version": "Version",
  "appRouterHeading": "App Router vs Pages Router",
  "appRouterBody": "Every export is a client component (they carry `\"use client\"`). In the **App Router**, mount `IntentProvider` in a client boundary: either a `\"use client\"` layout or a small client wrapper you render from a server layout. In the **Pages Router**, wrap your app in `pages/_app.jsx`.",
};

export { installation };
