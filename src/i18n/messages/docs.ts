import { defaultLocale, type Locale } from "@/i18n/locales";
import { createTextQuery } from "@/i18n/create-text-query";
import { pickNamespace } from "@/i18n/translations";

/** Docs group titles (by group id) and page titles (by slug). */
const en = {
  groupTitles: {
    gettingStarted: "Getting Started",
    coreConcepts: "Core Concepts",
    apiReference: "API Reference",
    guides: "Guides",
    more: "More",
  },
  pageTitles: {
    quickstart: "Quickstart",
    installation: "Installation",
    "how-it-works": "How it works",
    "importance-and-cost": "Importance & cost",
    "intent-provider": "IntentProvider",
    "intent-link": "IntentLink",
    "intent-context": "IntentContext",
    "applications": "Applications",
    "custom-components": "Custom components",
    "beyond-prefetch": "Beyond prefetch",
    "mobile-behavior": "Mobile behavior",
    typescript: "TypeScript",
    troubleshooting: "Troubleshooting",
    changelog: "Changelog",
  },
  /** On-page H1s that are fuller than the sidebar label; other slugs use the page title. */
  headings: {
    "importance-and-cost": "Tuning: importance & cost",
    "custom-components": "Custom target-aware components",
  },
  /** Per-page <meta description> copy, one concise sentence per doc slug. */
  descriptions: {
    quickstart:
      "Install intent-link, mount IntentProvider, and swap in IntentLink to get predictive prefetch working in a few minutes.",
    installation:
      "Install intent-link with npm, pnpm, or yarn, and mount IntentProvider in your App Router layout.",
    "how-it-works":
      "How intent-link models pointer motion as a physical system and scores every registered target into a live probability.",
    "importance-and-cost":
      "Tune the importance and cost props to control how early and how confidently onIntent fires for each target.",
    "intent-provider":
      "IntentProvider API reference: the context provider that runs intent-link's prediction engine at the root of your app.",
    "intent-link":
      "IntentLink API reference: a prediction-aware drop-in replacement for next/link with importance, cost, and onIntent props.",
    "intent-context":
      "IntentContext API reference: read the raw probability stream and register custom elements for target prediction.",
    "applications":
      "Use intent-link's onIntent signal to prefetch routes, warm data, and preload assets before a user clicks, not after.",
    "custom-components":
      "Register buttons, cards, or any non-link element with IntentContext to add target prediction beyond links.",
    "beyond-prefetch":
      "Beyond prefetching: use intent-link's prediction signal for progressive disclosure, intent analytics, and adaptive UI.",
    "mobile-behavior":
      "How intent-link predicts intent on touch devices using scroll velocity instead of cursor trajectory.",
    typescript: "intent-link is fully typed. Reference for IntentLinkProps, PhysicsState, and IntentContextType.",
    troubleshooting:
      "Fixes for common intent-link issues: onIntent not firing and SSR / \"use client\" errors.",
    changelog: "Release notes and version history for the intent-link package.",
  },
} as const;

type DocsText = typeof en;

/** Docs query. Falls back to the `en` dictionary. */
const { getText: getDocsText } = createTextQuery(en, pickNamespace("docs"));

/** Resolve a doc page title by slug, falling back to the slug itself. */
const getDocTitle = (slug: string, locale: Locale = defaultLocale): string => {
  const { pageTitles } = getDocsText(locale);
  return pageTitles[slug as keyof typeof pageTitles] ?? slug;
};

/** Resolve a docs group title by group id, falling back to the id itself. */
const getDocGroupTitle = (groupId: string, locale: Locale = defaultLocale): string => {
  const { groupTitles } = getDocsText(locale);
  return groupTitles[groupId as keyof typeof groupTitles] ?? groupId;
};

/**
 * Resolve a doc's on-page H1 heading. A few slugs carry a fuller heading than
 * their sidebar label; everything else falls back to the localized page title.
 */
const getDocHeading = (slug: string, locale: Locale = defaultLocale): string => {
  const headings: Record<string, string> = getDocsText(locale).headings;
  return headings[slug] ?? getDocTitle(slug, locale);
};

/** Resolve a doc page's <meta description>, falling back to the page title. */
const getDocDescription = (slug: string, locale: Locale = defaultLocale): string => {
  const { descriptions } = getDocsText(locale);
  return descriptions[slug as keyof typeof descriptions] ?? getDocTitle(slug, locale);
};

export { getDocTitle, getDocGroupTitle, getDocHeading, getDocDescription };
export type { DocsText };
