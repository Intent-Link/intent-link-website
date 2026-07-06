import { blockKind, inlineKind, tableCellKind, type DocContent, type InlineNode, type TableCell } from "./types";
import { parseInline } from "./parse-inline";
import { getDocText } from "@/i18n/messages/docs-content";
import { getDocTitle } from "@/i18n/messages/docs";
import { docHref } from "@/constants/routes";
import { installCommands } from "@/constants/package-managers";
import { defaultLocale, type Locale } from "@/i18n/locales";

const nodeToText = (node: InlineNode): string => {
  switch (node.kind) {
    case inlineKind.text:
    case inlineKind.code:
      return node.value;
    default:
      return node.children.map(nodeToText).join("");
  }
};

/** Flatten a prose string to bare text (strips bold/code/link markup). */
const inlineToPlainText = (text: string): string =>
  parseInline(text).map(nodeToText).join("");

/** Flatten one inline node to Markdown, preserving code/bold/links. */
const nodeToMarkdown = (node: InlineNode, locale: Locale): string => {
  const children = () =>
    "children" in node ? node.children.map((child) => nodeToMarkdown(child, locale)).join("") : "";
  switch (node.kind) {
    case inlineKind.text:
      return node.value;
    case inlineKind.code:
      return `\`${node.value}\``;
    case inlineKind.strong:
      return `**${children()}**`;
    case inlineKind.link:
      return `[${children()}](${docHref(locale, node.slug, node.anchor)})`;
    case inlineKind.extLink:
      return `[${children()}](${node.href})`;
  }
};

/** Re-emit a prose string as Markdown with doc links resolved to the locale's pages. */
const inlineToMarkdown = (text: string, locale: Locale): string =>
  parseInline(text).map((node) => nodeToMarkdown(node, locale)).join("");

const cellToMarkdown = (cell: TableCell, resolve: (key: string) => string, locale: Locale): string => {
  if (cell.kind === inlineKind.code) return `\`${cell.value}\``;
  if (cell.kind === tableCellKind.value) return cell.value;
  return inlineToMarkdown(resolve(cell.textKey), locale);
};

/** Render one doc's structured content to a Markdown section. */
const docToMarkdown = (content: DocContent, locale: Locale = defaultLocale): string => {
  const text = getDocText(content.slug, locale);
  const resolve = (key: string): string => text[key];
  const lines: string[] = [`## ${getDocTitle(content.slug, locale)}`, ""];

  for (const block of content.blocks) {
    switch (block.kind) {
      case blockKind.heading:
        lines.push(`${block.level === 2 ? "###" : "####"} ${inlineToMarkdown(text[block.textKey], locale)}`, "");
        break;
      case blockKind.paragraph:
        lines.push(inlineToMarkdown(text[block.textKey], locale), "");
        break;
      case blockKind.code:
        lines.push("```" + block.language, block.code, "```", "");
        break;
      case blockKind.list:
        lines.push(
          ...block.itemKeys.map((key) => `- ${inlineToMarkdown(text[key], locale)}`),
          "",
        );
        break;
      case blockKind.callout:
        lines.push(`> ${inlineToMarkdown(text[block.textKey], locale)}`, "");
        break;
      case blockKind.table: {
        lines.push(`| ${block.columns.map((column) => inlineToMarkdown(text[column.headerKey], locale)).join(" | ")} |`);
        lines.push(`| ${block.columns.map(() => "---").join(" | ")} |`);
        for (const row of block.rows) {
          lines.push(`| ${row.map((cell) => cellToMarkdown(cell, resolve, locale)).join(" | ")} |`);
        }
        lines.push("");
        break;
      }
      case blockKind.install:
        lines.push("```bash", installCommands.npm, "```", "");
        break;
    }
  }

  return lines.join("\n").trimEnd();
};

export { docToMarkdown, inlineToPlainText };
