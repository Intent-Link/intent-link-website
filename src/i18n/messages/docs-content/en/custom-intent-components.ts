import type { DocText } from "@/content/docs/types";

const customIntentComponents: DocText = {
  "toc.intent-button": "IntentButton",
  "toc.intent-button-usage": "Usage",
  "toc.intent-article": "IntentArticle",
  "toc.intent-article-usage": "Usage",
  "intro": "If your application has many targets of the same kind, wrap `useIntentTarget` once and reuse the resulting component.",
  "buttonHeading": "Reusable IntentButton",
  "buttonBody": "This component accepts normal button props together with `onIntent`, `importance`, and `cost`.",
  "articleHeading": "Reusable IntentArticle",
  "articleBody": "The same pattern works for product cards and other semantic containers.",
  "usageHeading": "Usage",
};

export { customIntentComponents };
