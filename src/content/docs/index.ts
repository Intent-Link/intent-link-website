import type { DocContent } from "./types";
import type { DocSlug } from "@/constants/docs-nav";
import { quickstart } from "./quickstart";
import { howItWorks } from "./how-it-works";
import { intentProvider } from "./intent-provider";
import { intentLink } from "./intent-link";
import { useIntentTarget } from "./use-intent-target";
import { customIntentComponents } from "./custom-intent-components";
import { examples } from "./examples";
import { troubleshooting } from "./troubleshooting";
import { changelog } from "./changelog";

/** Locale-independent structure for every doc, keyed by slug. */
const docsContent: Record<DocSlug, DocContent> = {
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

const getDocContent = (slug: DocSlug): DocContent => docsContent[slug];

export { getDocContent };
