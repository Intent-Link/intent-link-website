import type { DocContent } from "./types";
import type { DocSlug } from "@/constants/docs-nav";
import { quickstart } from "./quickstart";
import { installation } from "./installation";
import { howItWorks } from "./how-it-works";
import { importanceAndCost } from "./importance-and-cost";
import { intentProvider } from "./intent-provider";
import { intentLink } from "./intent-link";
import { intentContext } from "./intent-context";
import { applications } from "./applications";
import { customComponents } from "./custom-components";
import { beyondPrefetch } from "./beyond-prefetch";
import { mobileBehavior } from "./mobile-behavior";
import { typescript } from "./typescript";
import { troubleshooting } from "./troubleshooting";
import { changelog } from "./changelog";

/** Locale-independent structure for every doc, keyed by slug. */
const docsContent: Record<DocSlug, DocContent> = {
  quickstart,
  installation,
  "how-it-works": howItWorks,
  "importance-and-cost": importanceAndCost,
  "intent-provider": intentProvider,
  "intent-link": intentLink,
  "intent-context": intentContext,
  "applications": applications,
  "custom-components": customComponents,
  "beyond-prefetch": beyondPrefetch,
  "mobile-behavior": mobileBehavior,
  typescript,
  troubleshooting,
  changelog,
};

const getDocContent = (slug: DocSlug): DocContent => docsContent[slug];

export { getDocContent };
