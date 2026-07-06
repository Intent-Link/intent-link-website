import { locales } from "@/i18n/locales";
import { docSlugs } from "@/constants/docs-nav";
import { getDocText } from "@/i18n/messages/docs-content";
import { getDocContent } from "@/content/docs";
import { parseInline } from "./parse-inline";

/**
 * Authoring-time validation of every locale's doc prose: each value must parse
 * as micro-markdown (an unknown `[label](target)` slug throws), so a broken
 * cross-link in any translation fails CI with the locale, slug, and key named —
 * instead of failing the static build or a page render with no context.
 */
describe("docs-content prose", () => {
  it.each(locales)("parses every %s prose string", (locale) => {
    for (const slug of docSlugs) {
      const text = getDocText(slug, locale);
      for (const [key, value] of Object.entries(text)) {
        expect(() => parseInline(value), `${locale}/${slug} :: ${key}`).not.toThrow();
      }
    }
  });

  it("references only existing text keys from every doc's structure", () => {
    for (const slug of docSlugs) {
      const text = getDocText(slug);
      for (const block of getDocContent(slug).blocks) {
        const keys: string[] = [];
        if ("textKey" in block) keys.push(block.textKey);
        if ("itemKeys" in block) keys.push(...block.itemKeys);
        if ("columns" in block) keys.push(...block.columns.map((column) => column.headerKey));
        for (const key of keys) {
          expect(text[key], `${slug} :: ${key}`).toBeDefined();
        }
      }
    }
  });
});
