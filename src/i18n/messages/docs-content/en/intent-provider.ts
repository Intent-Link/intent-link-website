import type { DocText } from "@/content/docs/types";

const intentProvider: DocText = {
  "toc.usage": "Usage",
  "toc.notes": "Notes",
  "intro": "Context provider that runs the prediction engine. Mount it **once**, near the root of your app. Everything inside can use `IntentLink` or read `IntentContext` directly. It takes **no props**.",
  "usageHeading": "Usage",
  "notesHeading": "Notes",
  "notes.client": "It's a **client component** (`\"use client\"`). In the App Router, mount it inside a client boundary.",
  "notes.loop": "Internally it runs a single `requestAnimationFrame` loop and attaches both a `mousemove` and a `scroll` listener, using whichever suits the device, so mounting it more than once is wasteful.",
  "notes.provides": "It provides `probabilities`, `registerLink`, and `unregisterLink` to descendants via `IntentContext`.",
};

export { intentProvider };
