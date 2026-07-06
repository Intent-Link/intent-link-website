import { blockKind, type DocContent, type HeadingBlock } from "./types";
import { inlineToPlainText } from "./markdown";
import { getDocText } from "@/i18n/messages/docs-content";
import type { Locale } from "@/i18n/locales";

/** One "on this page" entry, derived from a doc's H2 heading blocks. */
interface TocItem {
  id: string;
  level: number;
  text: string;
}

/** Derive the "on this page" TOC from a doc's H2 heading blocks (design lists H2 only). */
const deriveToc = (content: DocContent, locale: Locale): TocItem[] => {
  const text = getDocText(content.slug, locale);
  return content.blocks
    .filter(
      (block): block is HeadingBlock => block.kind === blockKind.heading && block.level === 2,
    )
    .map((heading) => {
      // Prefer a short TOC label (`toc.<id>`) when the locale provides one,
      // matching the design's hand-written sidebar labels; else use the heading.
      const tocKey = `toc.${heading.id}`;
      const label = tocKey in text ? text[tocKey] : text[heading.textKey];
      return { id: heading.id, level: heading.level, text: inlineToPlainText(label) };
    });
};

export { deriveToc };
export type { TocItem };
