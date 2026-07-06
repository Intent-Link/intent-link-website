import type { DocSlug } from "@/constants/docs-nav";
import type { CodeLanguage } from "@/utils/syntax-highlight";

/**
 * The doc content model. A doc's *structure* (this file's blocks) is
 * locale-independent; its *prose* lives in the per-locale `docsContent` i18n
 * namespace, addressed by `textKey`. Code, ids, slugs, and table code/value
 * cells are literals here and are never translated.
 */

// ---- inline nodes: resolved from the per-locale text namespace ----

/** Inline node kinds. Const map + derived union — no magic strings. */
const inlineKind = {
  text: "text",
  code: "code",
  strong: "strong",
  link: "link",
  extLink: "extLink",
} as const;

interface TextNode {
  kind: typeof inlineKind.text;
  value: string;
}
interface CodeNode {
  kind: typeof inlineKind.code;
  value: string;
}
interface StrongNode {
  kind: typeof inlineKind.strong;
  children: InlineNode[];
}
interface LinkNode {
  kind: typeof inlineKind.link;
  slug: DocSlug;
  anchor?: string;
  children: InlineNode[];
}
interface ExtLinkNode {
  kind: typeof inlineKind.extLink;
  href: string;
  children: InlineNode[];
}

type InlineNode = TextNode | CodeNode | StrongNode | LinkNode | ExtLinkNode;

// ---- blocks: locale-independent structure ----

/** Block kinds. Const map + derived union. */
const blockKind = {
  heading: "heading",
  paragraph: "paragraph",
  code: "code",
  list: "list",
  callout: "callout",
  table: "table",
  install: "install",
} as const;

/** Callout tones. Const map + derived union. */
const calloutTone = {
  note: "note",
  warning: "warning",
  tip: "tip",
} as const;

type CalloutTone = (typeof calloutTone)[keyof typeof calloutTone];

type TextKey = string;

interface HeadingBlock {
  kind: typeof blockKind.heading;
  level: 2 | 3;
  id: string;
  textKey: TextKey;
}
interface ParagraphBlock {
  kind: typeof blockKind.paragraph;
  textKey: TextKey;
}
interface CodeBlockNode {
  kind: typeof blockKind.code;
  language: CodeLanguage;
  code: string;
}
interface ListBlock {
  kind: typeof blockKind.list;
  ordered: boolean;
  itemKeys: TextKey[];
}
interface CalloutBlock {
  kind: typeof blockKind.callout;
  tone: CalloutTone;
  textKey: TextKey;
}

interface TableColumn {
  id: string;
  headerKey: TextKey;
}
/** Table cell kinds. Const map + derived union — no magic strings. */
const tableCellKind = {
  text: inlineKind.text,
  code: inlineKind.code,
  value: "value",
} as const;

/** A prose cell (translated) or a literal code / value cell (never translated). */
type TableCell =
  | { kind: typeof tableCellKind.text; textKey: TextKey }
  | { kind: typeof tableCellKind.code; value: string }
  | { kind: typeof tableCellKind.value; value: string };
interface TableBlock {
  kind: typeof blockKind.table;
  columns: TableColumn[];
  rows: TableCell[][];
}

/** Package-manager install block (npm/pnpm/yarn/bun tabs). */
interface InstallBlock {
  kind: typeof blockKind.install;
}

type DocBlock =
  | HeadingBlock
  | ParagraphBlock
  | CodeBlockNode
  | ListBlock
  | CalloutBlock
  | TableBlock
  | InstallBlock;

interface DocContent {
  slug: DocSlug;
  blocks: DocBlock[];
}

/**
 * One slug's prose, one locale. Values are micro-markdown strings
 * (`` `code` ``, `**strong**`, `[label](slug#anchor)`) parsed by `parseInline`.
 */
type DocText = Record<TextKey, string>;
/** The whole `docsContent` namespace, one locale. */
type DocsContentText = Record<DocSlug, DocText>;

export { inlineKind, blockKind, calloutTone, tableCellKind };
export type { InlineNode, HeadingBlock, CalloutTone, TableCell, DocContent, DocText, DocsContentText };
