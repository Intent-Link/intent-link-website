/**
 * Docs sidebar structure: ordered groups, each an id (→ i18n group title) and
 * its ordered page slugs (→ i18n page titles). Slugs are the canonical route
 * params; titles are resolved through the docs text query.
 */
import { appRoutes } from "./routes";

/** Every doc slug, as a tuple so the union is exhaustively typed. */
const docSlugTuple = [
  "quickstart",
  "how-it-works",
  "intent-provider",
  "intent-link",
  "use-intent-target",
  "custom-intent-components",
  "examples",
  "troubleshooting",
  "changelog",
] as const;

type DocSlug = (typeof docSlugTuple)[number];

interface DocGroup {
  id: string;
  slugs: DocSlug[];
}

const docsNav: DocGroup[] = [
  { id: "gettingStarted", slugs: ["quickstart", "how-it-works"] },
  {
    id: "apiReference",
    slugs: ["intent-provider", "intent-link", "use-intent-target", "custom-intent-components"],
  },
  { id: "guides", slugs: ["examples", "troubleshooting"] },
  { id: "more", slugs: ["changelog"] },
];

/** Flat, ordered list of every doc slug — derived once. */
const docSlugs: DocSlug[] = [...docSlugTuple];

const docSlugSet: ReadonlySet<string> = new Set(docSlugTuple);

/** Route-param guard: narrows an arbitrary string to a known doc slug. */
const isDocSlug = (slug: string): slug is DocSlug => docSlugSet.has(slug);

/**
 * Canonical path of the first doc page. "Docs" links target it directly so a
 * click lands in one navigation instead of hopping through the /docs redirect.
 */
const docsEntryPath = appRoutes.docsSlug(docSlugs[0]);

export { docsNav, docSlugs, isDocSlug, docsEntryPath };
export type { DocSlug };
