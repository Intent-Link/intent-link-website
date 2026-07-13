import type { DocText } from "@/content/docs/types";

const troubleshooting: DocText = {
  "toc.nothing": "Nothing fires",
  "toc.prefetch": "Unexpected prefetching",
  "toc.custom": "Custom component refs",
  "toc.mobile": "Mobile testing",
  "toc.development": "Development mode",
  "nothingHeading": "onIntent never fires",
  "nothing.provider": "Is `IntentProvider` mounted above these links?",
  "nothing.callback": "Does the target have an `onIntent` callback? Targets without one are not registered.",
  "nothing.input": "Move the pointer on desktop or scroll on mobile. The engine sleeps until the first interaction.",
  "nothing.size": "Make sure the target is visible and has a real width and height.",
  "nothing.wiring": "Temporarily try `importance=\"high\"` and `cost=\"low\"` to confirm the integration, then restore the defaults.",
  "prefetchHeading": "A route prefetches without onIntent",
  "prefetchBody": "Check for another Next.js `Link` pointing to the same route, including links hidden by responsive styles. Also check application code that calls `router.prefetch()` directly.",
  "customHeading": "A custom component does not work",
  "customBody": "The component must forward the ref to a real HTML element. If it does not, attach the intent ref to a native wrapper such as a `div`.",
  "mobileHeading": "Testing on mobile",
  "mobileBody": "Use a real touch device or enable touch emulation in browser developer tools, then scroll. Merely narrowing a desktop browser window does not necessarily enable mobile behavior.",
  "developmentHeading": "Development and production",
  "developmentBody": "Test important behavior in a production build too. React development checks and framework tooling can make callbacks and network requests look different from production.",
};

export { troubleshooting };
