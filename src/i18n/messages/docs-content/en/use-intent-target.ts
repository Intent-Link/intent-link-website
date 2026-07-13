import type { DocText } from "@/content/docs/types";

const useIntentTarget: DocText = {
  "toc.button": "Basic usage",
  "toc.options": "Options",
  "toc.third-party": "Third-party components",
  "intro": "`useIntentTarget` adds intent detection to a button, card, or other HTML element. It returns a ref; attach that ref to the element you want to observe.",
  "buttonHeading": "Basic usage",
  "buttonBody": "Use the hook inside a client component and attach the returned ref to one HTML element.",
  "optionsHeading": "Options",
  "options.onIntent": "`onIntent`: the action to run when the element becomes the likely target.",
  "options.importance": "`importance`: optional `high`, `medium`, or `low`. Default: `medium`.",
  "options.cost": "`cost`: optional `high`, `medium`, or `low`. Default: `low`.",
  "thirdPartyHeading": "Third-party components",
  "thirdPartyBody": "Attach the ref directly when the component forwards its ref to an HTML element.",
  "wrapperBody": "If it does not forward a ref, wrap it in a native element and attach the ref to the wrapper.",
};

export { useIntentTarget };
