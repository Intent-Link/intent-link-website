import type { DocsContentText } from "@/content/docs/types";
import { quickstart } from "./quickstart";
import { installation } from "./installation";
import { howItWorks } from "./how-it-works";
import { importanceAndCost } from "./importance-and-cost";
import { intentProvider } from "./intent-provider";
import { intentLink } from "./intent-link";
import { intentContext } from "./intent-context";
import { predictivePrefetch } from "./predictive-prefetch";
import { customComponents } from "./custom-components";
import { beyondPrefetch } from "./beyond-prefetch";
import { mobileBehavior } from "./mobile-behavior";
import { typescript } from "./typescript";
import { troubleshooting } from "./troubleshooting";
import { changelog } from "./changelog";

/** Spanish docs prose, keyed by slug. */
const es: DocsContentText = {
  quickstart,
  installation,
  "how-it-works": howItWorks,
  "importance-and-cost": importanceAndCost,
  "intent-provider": intentProvider,
  "intent-link": intentLink,
  "intent-context": intentContext,
  "predictive-prefetch": predictivePrefetch,
  "custom-components": customComponents,
  "beyond-prefetch": beyondPrefetch,
  "mobile-behavior": mobileBehavior,
  typescript,
  troubleshooting,
  changelog,
};

export { es };
