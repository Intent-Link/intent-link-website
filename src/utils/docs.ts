import { docsNav } from "@/constants/docs-nav";
import { getDocTitle } from "@/i18n/messages/docs";

/**
 * Pure mapping over the docs navigation: derives one page entry per slug and
 * exposes lookups. `title` is the default-locale title (localized titles are
 * resolved per-request via the docs text query); `body` is placeholder markdown
 * to be filled from llms-full.txt.
 */
interface DocPage {
  slug: string;
  title: string;
  body: string;
}

const docEntries: DocPage[] = docsNav.flatMap((group) =>
  group.slugs.map((slug) => ({
    slug,
    title: getDocTitle(slug),
    body: `# ${getDocTitle(slug)}\n\n> TODO: content from llms-full.txt`,
  })),
);

const docsBySlug = new Map(docEntries.map((doc) => [doc.slug, doc]));

const getDoc = (slug: string): DocPage | undefined => docsBySlug.get(slug);

const getAllDocs = (): DocPage[] => docEntries;

export { getDoc, getAllDocs };
export type { DocPage };
