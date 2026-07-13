import { Fragment, type ReactNode } from "react";
import Link from "next/link";
import { DocTable } from "./doc-table";
import { CodeBlock } from "@/components/ui/code-block";
import { PackageManagerInstall } from "@/components/ui/package-manager-install";
import { cn } from "@/utils/class-names";
import { docHref } from "@/constants/routes";
import { blockKind, inlineKind, calloutTone, tableCellKind } from "@/content/docs/types";
import type { CalloutTone, DocContent, DocText, InlineNode, TableCell } from "@/content/docs/types";
import { parseInline } from "@/content/docs/parse-inline";
import type { Locale } from "@/i18n/locales";
import { getDocText } from "@/i18n/messages/docs-content";

interface DocContentViewProps {
  content: DocContent;
  locale: Locale;
}

const inlineCodeClass =
  "rounded-[5px] bg-accent/[0.08] px-1.5 py-[1.5px] font-mono text-[13px] text-[#0349b4]";

/** Inline code inside doc tables renders one notch smaller (design: `.doc-table td code{font-size:12px}`). */
const tableInlineCodeClass =
  "rounded-[5px] bg-accent/[0.08] px-1.5 py-[1.5px] font-mono text-[12px] text-[#0349b4]";

/** Render one inline node to an element. Internal links are locale-prefixed. */
const renderNode = (node: InlineNode, key: number, locale: Locale): ReactNode => {
  switch (node.kind) {
    case inlineKind.text:
      return <Fragment key={key}>{node.value}</Fragment>;
    case inlineKind.code:
      return (
        <code key={key} dir="ltr" className={inlineCodeClass}>
          {node.value}
        </code>
      );
    case inlineKind.strong:
      return (
        <strong key={key} className="font-semibold text-ink">
          <Nodes nodes={node.children} locale={locale} />
        </strong>
      );
    case inlineKind.link:
      return (
        <Link
          key={key}
          href={docHref(locale, node.slug, node.anchor)}
          className="text-accent hover:underline"
        >
          <Nodes nodes={node.children} locale={locale} />
        </Link>
      );
    case inlineKind.extLink:
      return (
        <a
          key={key}
          href={node.href}
          target="_blank"
          rel="noreferrer"
          className="text-accent hover:underline"
        >
          <Nodes nodes={node.children} locale={locale} />
        </a>
      );
  }
};

/** Render parsed inline nodes to elements. */
const Nodes = ({ nodes, locale }: { nodes: InlineNode[]; locale: Locale }): ReactNode =>
  nodes.map((node, index) => renderNode(node, index, locale));

/** Render a micro-markdown prose string to inline elements. */
const Inline = ({ text, locale }: { text: string; locale: Locale }): ReactNode => (
  <Nodes nodes={parseInline(text)} locale={locale} />
);

const calloutClass: Record<CalloutTone, string> = {
  [calloutTone.note]: "border-accent/30 bg-accent/[0.05]",
  [calloutTone.warning]: "border-[#c2410c]/30 bg-[#c2410c]/[0.05]",
  [calloutTone.tip]: "border-[#15803d]/30 bg-[#15803d]/[0.05]",
};

const renderCell = (cell: TableCell, text: DocText, locale: Locale): ReactNode => {
  if (cell.kind === inlineKind.code) {
    return <code dir="ltr" className={tableInlineCodeClass}>{cell.value}</code>;
  }
  if (cell.kind === tableCellKind.value) {
    return <span dir="ltr" className="font-mono text-[12px]">{cell.value}</span>;
  }
  return <Inline text={text[cell.textKey]} locale={locale} />;
};

/**
 * Renders a doc's block array to elements, resolving each `textKey` against the
 * per-locale prose. Server component — no client state; code/links are literals.
 */
const DocContentView = ({ content, locale }: DocContentViewProps) => {
  const text = getDocText(content.slug, locale);

  return (
    <>
      {content.blocks.map((block, index) => {
        switch (block.kind) {
          case blockKind.heading: {
            const className =
              block.level === 2
                ? "mt-[38px] scroll-mt-20 text-[20px] font-bold leading-[1.2] tracking-[-0.02em] text-ink"
                : "mt-6 text-[15px] font-bold text-ink";
            const Heading = block.level === 2 ? "h2" : "h3";
            return (
              <Heading key={index} id={block.id} className={className}>
                <Inline text={text[block.textKey]} locale={locale} />
              </Heading>
            );
          }
          case blockKind.paragraph:
            return (
              <p key={index} className="mt-3 max-w-[70ch] text-[15px] leading-[1.65] text-ink-2">
                <Inline text={text[block.textKey]} locale={locale} />
              </p>
            );
          case blockKind.code:
            return (
              <CodeBlock key={index} code={block.code} language={block.language} className="my-4" />
            );
          case blockKind.list: {
            const List = block.ordered ? "ol" : "ul";
            return (
              <List
                key={index}
                className={cn(
                  "mt-3 max-w-[68ch] space-y-1.5 text-[15px] leading-[1.6] text-ink-2",
                  block.ordered ? "list-decimal" : "list-disc",
                  "pl-5",
                )}
              >
                {block.itemKeys.map((itemKey) => (
                  <li key={itemKey}>
                    <Inline text={text[itemKey]} locale={locale} />
                  </li>
                ))}
              </List>
            );
          }
          case blockKind.callout:
            return (
              <div
                key={index}
                className={cn(
                  "my-4 rounded-lg border px-4 py-3 text-[14px] text-ink-2",
                  calloutClass[block.tone],
                )}
              >
                <Inline text={text[block.textKey]} locale={locale} />
              </div>
            );
          case blockKind.table:
            return (
              <DocTable
                key={index}
                headers={block.columns.map((column) => (
                  <Inline key={column.id} text={text[column.headerKey]} locale={locale} />
                ))}
                rows={block.rows.map((row) => row.map((cell) => renderCell(cell, text, locale)))}
              />
            );
          case blockKind.install:
            return <PackageManagerInstall key={index} className="my-4" />;
        }
      })}
    </>
  );
};

export { DocContentView };
