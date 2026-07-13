import { blockKind, calloutTone, inlineKind, tableCellKind, type DocContent } from "./types";
import { codeLanguage } from "@/utils/syntax-highlight";

const onIntentSnippet = `onIntent?: () => void`;

const exampleSnippet = `"use client"

import { IntentLink } from "intent-link"
import { useRouter } from "next/navigation"

export function ProductCard() {
  const router = useRouter()
  const href = "/checkout"

  return (
    <IntentLink
      href={href}
      importance="medium"
      cost="low"
      onIntent={() => router.prefetch(href)}
    >
      Checkout
    </IntentLink>
  )
}`;

const intentLink: DocContent = {
  slug: "intent-link",
  blocks: [
    { kind: blockKind.paragraph, textKey: "intro" },

    { kind: blockKind.heading, level: 2, id: "props", textKey: "propsHeading" },
    {
      kind: blockKind.table,
      columns: [
        { id: "prop", headerKey: "col.prop" },
        { id: "type", headerKey: "col.type" },
        { id: "default", headerKey: "col.default" },
        { id: "description", headerKey: "col.description" },
      ],
      rows: [
        [
          { kind: inlineKind.code, value: "href" },
          { kind: inlineKind.code, value: "string | UrlObject" },
          { kind: tableCellKind.value, value: "—" },
          { kind: inlineKind.text, textKey: "prop.href" },
        ],
        [
          { kind: inlineKind.code, value: "importance" },
          { kind: inlineKind.code, value: '"high" | "medium" | "low"' },
          { kind: inlineKind.code, value: '"medium"' },
          { kind: inlineKind.text, textKey: "prop.importance" },
        ],
        [
          { kind: inlineKind.code, value: "cost" },
          { kind: inlineKind.code, value: '"high" | "medium" | "low"' },
          { kind: inlineKind.code, value: '"low"' },
          { kind: inlineKind.text, textKey: "prop.cost" },
        ],
        [
          { kind: inlineKind.code, value: "onIntent" },
          { kind: inlineKind.code, value: "() => void" },
          { kind: tableCellKind.value, value: "—" },
          { kind: inlineKind.text, textKey: "prop.onIntent" },
        ],
        [
          { kind: inlineKind.code, value: "...rest" },
          { kind: tableCellKind.value, value: "—" },
          { kind: tableCellKind.value, value: "—" },
          { kind: inlineKind.text, textKey: "prop.rest" },
        ],
      ],
    },
    { kind: blockKind.callout, tone: calloutTone.note, textKey: "prefetchNote" },

    { kind: blockKind.heading, level: 2, id: "onintent", textKey: "onIntentHeading" },
    { kind: blockKind.paragraph, textKey: "onIntentBody" },
    { kind: blockKind.code, language: codeLanguage.ts, code: onIntentSnippet },

    { kind: blockKind.heading, level: 2, id: "tuning", textKey: "tuningHeading" },
    { kind: blockKind.paragraph, textKey: "tuningBody" },
    {
      kind: blockKind.list,
      ordered: false,
      itemKeys: ["tuning.importance", "tuning.cost", "tuning.defaults"],
    },

    { kind: blockKind.heading, level: 2, id: "example", textKey: "exampleHeading" },
    { kind: blockKind.code, language: codeLanguage.tsx, code: exampleSnippet },
  ],
};

export { intentLink };
