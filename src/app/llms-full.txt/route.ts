import { site } from "@/constants/site";
import { docSlugs } from "@/constants/docs-nav";
import { getDocContent } from "@/content/docs";
import { docToMarkdown } from "@/content/docs/markdown";

/**
 * The full docs as a single Markdown file, generated from the same structured
 * content the docs pages render — so it never drifts from the site.
 */
// Pure GET with no request data — prerender at build time.
export const dynamic = "force-static";

const GET = async () => {
  const intro = [
    `# ${site.name}: full documentation`,
    "",
    `> ${site.tagline}. Version ${site.version} · MIT.`,
    "",
  ].join("\n");

  const body = docSlugs
    .map((slug) => docToMarkdown(getDocContent(slug)))
    .join("\n\n---\n\n");

  return new Response(`${intro}\n${body}\n`, {
    headers: { "content-type": "text/plain; charset=utf-8" },
  });
};

export { GET };
