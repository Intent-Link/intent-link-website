import type { DocsContentText } from "@/content/docs/types";
import { quickstart } from "./quickstart";
import { howItWorks } from "./how-it-works";
import { intentProvider } from "./intent-provider";
import { intentLink } from "./intent-link";
import { useIntentTarget } from "./use-intent-target";
import { customIntentComponents } from "./custom-intent-components";
import { examples } from "./examples";
import { troubleshooting } from "./troubleshooting";
import { changelog } from "./changelog";

/** English docs prose, keyed by slug. */
const en: DocsContentText = {
  quickstart,
  "how-it-works": howItWorks,
  "intent-provider": intentProvider,
  "intent-link": intentLink,
  "use-intent-target": useIntentTarget,
  "custom-intent-components": customIntentComponents,
  examples,
  troubleshooting,
  changelog,
};

export { en };
