import { defaultLocale, type Locale } from "@/i18n/locales";
import { createTextQuery } from "@/i18n/create-text-query";

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
    "predictive-prefetch": "Predictive prefetch",
    "custom-components": "Custom components",
    "beyond-prefetch": "Beyond prefetch",
    "mobile-behavior": "Mobile behavior",
    typescript: "TypeScript",
    troubleshooting: "Troubleshooting",
    changelog: "Changelog",
  },
} as const;

type DocsText = typeof en;

/** Docs registry + server query. Falls back to the `en` dictionary. */
const { messages: docsMessages, getText: getDocsText } = createTextQuery(en);

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

export { docsMessages, getDocsText, getDocTitle, getDocGroupTitle };
export type { DocsText };
