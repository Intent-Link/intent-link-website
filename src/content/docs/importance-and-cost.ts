import { blockKind, inlineKind, type DocContent } from "./types";
import { codeLanguage } from "@/utils/syntax-highlight";

const exampleSnippet = `<IntentLink href="/pricing" importance="high" cost="low">
  Pricing
</IntentLink>`;

const importanceAndCost: DocContent = {
  slug: "importance-and-cost",
  blocks: [
    { kind: blockKind.paragraph, textKey: "intro" },
    { kind: blockKind.paragraph, textKey: "exampleLead" },
    { kind: blockKind.code, language: codeLanguage.tsx, code: exampleSnippet },

    { kind: blockKind.heading, level: 2, id: "importance", textKey: "importanceHeading" },
    { kind: blockKind.paragraph, textKey: "importanceBody" },
    {
      kind: blockKind.table,
      columns: [
        { id: "value", headerKey: "col.value" },
        { id: "effect", headerKey: "col.effect" },
      ],
      rows: [
        [
          { kind: inlineKind.code, value: '"high"' },
          { kind: inlineKind.text, textKey: "importance.high" },
        ],
        [
          { kind: inlineKind.code, value: '"medium"' },
          { kind: inlineKind.text, textKey: "importance.medium" },
        ],
        [
          { kind: inlineKind.code, value: '"low"' },
          { kind: inlineKind.text, textKey: "importance.low" },
        ],
      ],
    },

    { kind: blockKind.heading, level: 2, id: "cost", textKey: "costHeading" },
    { kind: blockKind.paragraph, textKey: "costBody" },
    {
      kind: blockKind.table,
      columns: [
        { id: "value", headerKey: "col.value" },
        { id: "effect", headerKey: "col.effect" },
      ],
      rows: [
        [
          { kind: inlineKind.code, value: '"high"' },
          { kind: inlineKind.text, textKey: "cost.high" },
        ],
        [
          { kind: inlineKind.code, value: '"medium"' },
          { kind: inlineKind.text, textKey: "cost.medium" },
        ],
        [
          { kind: inlineKind.code, value: '"low"' },
          { kind: inlineKind.text, textKey: "cost.low" },
        ],
      ],
    },

    { kind: blockKind.heading, level: 2, id: "picking", textKey: "pickingHeading" },
    { kind: blockKind.list, ordered: false, itemKeys: ["picking.cheap", "picking.expensive"] },
    { kind: blockKind.paragraph, textKey: "pickingNote" },
  ],
};

export { importanceAndCost };
