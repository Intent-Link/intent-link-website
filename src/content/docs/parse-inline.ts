import { isDocSlug } from "@/constants/docs-nav";
import { inlineKind, type InlineNode } from "./types";

/**
 * Micro-markdown for doc prose: `` `code` ``, `**strong**`, and
 * `[label](target)` where target is a doc slug (plus optional `#anchor`) or an
 * absolute URL. Prose is authored and translated as plain strings; this parser
 * produces the InlineNode tree the renderers consume. An unknown link target
 * throws, so a broken cross-link fails the static build instead of shipping.
 */

const tokenPattern = /`([^`]+)`|\*\*([^*]+?)\*\*|\[([^\]]+)\]\(([^)\s]+)\)/g;

const parseLink = (label: string, target: string): InlineNode => {
  if (target.startsWith("http://") || target.startsWith("https://")) {
    return { kind: inlineKind.extLink, href: target, children: parseInline(label) };
  }
  const [slug, anchor] = target.split("#");
  if (!isDocSlug(slug)) {
    throw new Error(`parseInline: unknown link target "${target}" in "${label}"`);
  }
  return anchor
    ? { kind: inlineKind.link, slug, anchor, children: parseInline(label) }
    : { kind: inlineKind.link, slug, children: parseInline(label) };
};

/** Parse a prose string to inline nodes. Plain text yields a single text node. */
const parseInline = (value: string): InlineNode[] => {
  const nodes: InlineNode[] = [];
  let cursor = 0;
  tokenPattern.lastIndex = 0;

  for (const match of value.matchAll(tokenPattern)) {
    const [, code, strong, label, target] = match;
    if (match.index > cursor) {
      nodes.push({ kind: inlineKind.text, value: value.slice(cursor, match.index) });
    }
    if (code !== undefined) {
      nodes.push({ kind: inlineKind.code, value: code });
    } else if (strong !== undefined) {
      nodes.push({ kind: inlineKind.strong, children: parseInline(strong) });
    } else {
      nodes.push(parseLink(label, target));
    }
    cursor = match.index + match[0].length;
  }

  if (cursor < value.length) {
    nodes.push({ kind: inlineKind.text, value: value.slice(cursor) });
  }
  return nodes;
};

export { parseInline };
