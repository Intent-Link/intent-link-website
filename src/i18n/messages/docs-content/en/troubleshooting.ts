import type { DocText } from "@/content/docs/types";

const troubleshooting: DocText = {
  "toc.nothing": "Nothing fires",
  "toc.ssr": "SSR errors",
  "toc.touch": "Touch",
  "nothingHeading": "onIntent never fires",
  "nothing.provider": "Is `IntentProvider` mounted above these links?",
  "nothing.mousemove": "The engine only runs after the first `mousemove`, so move the cursor.",
  "nothing.size": "Very small or off-screen targets score near zero; give real hit areas.",
  "nothing.wiring": "Try `importance=\"high\"` / `cost=\"low\"` to confirm wiring, then dial back.",
  "ssrHeading": "SSR / \"use client\" errors",
  "ssrBody": "All exports are client components. In the App Router, mount `IntentProvider` inside a `\"use client\"` boundary; don't call it from a server component directly.",
  "touchHeading": "Touch devices do nothing",
  "touchBody": "On touch, intent comes from **scrolling**, not tapping. See [Mobile behavior](mobile-behavior).",
};

export { troubleshooting };
