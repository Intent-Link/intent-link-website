import type { DocText } from "@/content/docs/types";

const customComponents: DocText = {
  "toc.register": "registerLink",
  "toc.example": "Example",
  "intro": "When you want prediction on something that isn't a link, consume `IntentContext` and register the element yourself.",
  "registerHeading": "registerLink / unregisterLink",
  "registerBody": "Give each element a stable id (`useId`), register it on mount, unregister on unmount, then read `probabilities[id]`.",
  "exampleHeading": "Example",
};

export { customComponents };
