import type { DocText } from "@/content/docs/types";

const intentProvider: DocText = {
  "toc.usage": "Usage",
  "toc.notes": "Notes",
  "intro": "Mount `IntentProvider` once near the root of your application. It runs the shared intent engine for `IntentLink` and `useIntentTarget`.",
  "usageHeading": "Usage",
  "notesHeading": "Notes",
  "notes.once": "Use one provider for the application. Do not nest providers.",
  "notes.props": "It only needs `children`; there is nothing else to configure.",
  "notes.client": "It already includes its client boundary, so it can be imported by a Next.js server layout.",
};

export { intentProvider };
