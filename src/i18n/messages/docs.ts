import { defaultLocale, type Locale } from "@/i18n/locales";
import { createTextQuery } from "@/i18n/create-text-query";
import { pickNamespace } from "@/i18n/translations";

/** Docs group titles (by group id) and page titles (by slug). */
const en = {
  groupTitles: {
    gettingStarted: "Getting Started",
    apiReference: "API Reference",
    guides: "Guides",
    more: "More",
  },
  pageTitles: {
    quickstart: "Quickstart",
    "how-it-works": "How it works",
    "intent-provider": "IntentProvider",
    "intent-link": "IntentLink",
    "use-intent-target": "useIntentTarget",
    "custom-intent-components": "Custom Intent Components",
    examples: "Examples",
    troubleshooting: "Troubleshooting",
    changelog: "Changelog",
  },
  /** Per-page <meta description> copy, one concise sentence per doc slug. */
  descriptions: {
    quickstart:
      "Install intent-link, mount IntentProvider, and swap in IntentLink to get predictive prefetch working in a few minutes.",
    "how-it-works":
      "How intent-link observes movement, considers visible targets, and calls onIntent before a click.",
    "intent-provider":
      "IntentProvider API reference: the context provider that runs intent-link's prediction engine at the root of your app.",
    "intent-link":
      "IntentLink API reference: a prediction-aware drop-in replacement for next/link with importance, cost, and onIntent props.",
    "use-intent-target":
      "Add intent detection to buttons, cards, and third-party components with a single ref.",
    "custom-intent-components":
      "Build reusable intent-aware buttons, articles, cards, and other application components.",
    examples:
      "Practical examples for route prefetching, data warming, asset preloading, and custom targets.",
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

/** Resolve a doc's on-page H1 heading. */
const getDocHeading = getDocTitle;

/** Resolve a doc page's <meta description>, falling back to the page title. */
const getDocDescription = (slug: string, locale: Locale = defaultLocale): string => {
  const { descriptions } = getDocsText(locale);
  return descriptions[slug as keyof typeof descriptions] ?? getDocTitle(slug, locale);
};

export { getDocTitle, getDocGroupTitle, getDocHeading, getDocDescription };
export type { DocsText };
