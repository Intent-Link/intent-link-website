import type { DocText } from "@/content/docs/types";

const troubleshooting: DocText = {
  "toc.nothing": "Nothing fires",
  "toc.ssr": "SSR errors",
  "nothingHeading": "onIntent never fires",
  "nothing.provider": "Is `IntentProvider` mounted above these links?",
  "nothing.mousemove": "The engine only runs after the first `mousemove`, so move the cursor.",
  "nothing.size": "Off-screen targets can't be scored — make sure the target is actually rendered and in the viewport.",
  "nothing.wiring": "Try `importance=\"high\"` / `cost=\"low\"` to confirm wiring, then dial back.",
  "ssrHeading": "SSR / \"use client\" errors",
  "ssrBody": "Every export ships its own `\"use client\"` directive and works directly inside a server layout, so you don't add `\"use client\"` yourself.",
};

export { troubleshooting };
