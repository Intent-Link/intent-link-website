import type { DocText } from "@/content/docs/types";

const intentLink: DocText = {
  "toc.props": "Props",
  "toc.onintent": "onIntent",
  "toc.tuning": "Importance and cost",
  "toc.example": "Example",
  "intro": "Use `IntentLink` wherever you would normally use Next.js `Link`. Add `onIntent` for work that should begin before the click.",
  "propsHeading": "Props",
  "col.prop": "Prop",
  "col.type": "Type",
  "col.default": "Default",
  "col.description": "Description",
  "prop.href": "Required. Same as Next.js Link.",
  "prop.importance": "How readily the action may start.",
  "prop.cost": "How cautious the prediction should be.",
  "prop.onIntent": "Called once when the user is likely to choose this link.",
  "prop.rest": "Any Next.js Link or anchor prop, including className, style, and ref.",
  "prefetchNote": "`IntentLink` disables Next.js automatic prefetching. If you want predictive prefetching, call `router.prefetch()` inside `onIntent`.",
  "onIntentHeading": "onIntent",
  "onIntentBody": "The callback takes no arguments and returns nothing. It runs once per approach, then rearms after the user moves away.",
  "tuningHeading": "Importance and cost",
  "tuningBody": "These settings are optional. Most applications should keep the defaults.",
  "tuning.importance": "`importance` controls how readily the action may start. Default: `medium`.",
  "tuning.cost": "`cost` controls how cautious the prediction should be. Default: `low`.",
  "tuning.defaults": "Only change them after testing the real action on both desktop and mobile.",
  "exampleHeading": "Example",
};

export { intentLink };
