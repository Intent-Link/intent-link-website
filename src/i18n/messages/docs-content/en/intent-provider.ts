import type { DocText } from "@/content/docs/types";

const intentProvider: DocText = {
  "toc.usage": "Usage",
  "toc.notes": "Notes",
  "intro": "Context provider that runs the prediction engine. Mount it **once** in your `app/layout.jsx`. Everything inside can use `IntentLink` or read `IntentContext` directly. It takes **no props**.",
  "usageHeading": "Usage",
  "notesHeading": "Notes",
  "notes.client": "It ships its own `\"use client\"` directive, so it works directly inside a server layout — you don't need to wrap it.",
  "notes.provides": "It provides `probabilities`, `registerLink`, and `unregisterLink` to descendants via `IntentContext`.",
};

export { intentProvider };
