/**
 * Docs sidebar structure: ordered groups, each an id (→ i18n group title) and
 * its ordered page slugs (→ i18n page titles). Slugs are the canonical route
 * params; titles are resolved through the docs text query.
 */

interface DocGroup {
  id: string;
  slugs: string[];
}

const docsNav: DocGroup[] = [
  { id: "gettingStarted", slugs: ["quickstart", "installation"] },
  { id: "coreConcepts", slugs: ["how-it-works", "importance-and-cost"] },
  { id: "apiReference", slugs: ["intent-provider", "intent-link", "intent-context"] },
  {
    id: "guides",
    slugs: ["predictive-prefetch", "custom-components", "beyond-prefetch", "mobile-behavior"],
  },
  { id: "more", slugs: ["typescript", "troubleshooting", "changelog"] },
];

/** Flat, ordered list of every doc slug — derived once. */
const docSlugs: string[] = docsNav.flatMap((group) => group.slugs);

export { docsNav, docSlugs };
export type { DocGroup };
