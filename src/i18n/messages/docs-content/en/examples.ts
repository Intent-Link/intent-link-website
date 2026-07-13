import type { DocText } from "@/content/docs/types";

const examples: DocText = {
  "toc.route": "Prefetch a route",
  "toc.data": "Warm data",
  "toc.asset": "Preload an image",
  "toc.action": "Prepare a component",
  "intro": "`onIntent` can start any safe, repeatable preparation work. Keep irreversible actions—such as purchases, messages, and form submissions—behind a real click.",
  "routeHeading": "Prefetch a route",
  "routeBody": "The common Next.js use case.",
  "dataHeading": "Warm data",
  "dataBody": "Ask your data library to cache information the next screen will need.",
  "assetHeading": "Preload an image",
  "assetBody": "Begin loading a large asset before navigation.",
  "actionHeading": "Prepare a component",
  "actionBody": "Use `useIntentTarget` when the target is not a link.",
};

export { examples };
