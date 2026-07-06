import { blockKind, inlineKind, tableCellKind, type DocContent } from "./types";
import { codeLanguage } from "@/utils/syntax-highlight";

const utilitySnippet = `utility = (probability × importanceWeight) − costWeight
// onIntent fires once, the first time utility > 0`;

const importanceAndCost: DocContent = {
  slug: "importance-and-cost",
  blocks: [
    { kind: blockKind.paragraph, textKey: "intro" },
    { kind: blockKind.code, language: codeLanguage.text, code: utilitySnippet },

    { kind: blockKind.heading, level: 2, id: "importance", textKey: "importanceHeading" },
    { kind: blockKind.paragraph, textKey: "importanceBody" },
    {
      kind: blockKind.table,
      columns: [
        { id: "value", headerKey: "col.value" },
        { id: "weight", headerKey: "col.weight" },
        { id: "effect", headerKey: "col.effect" },
      ],
      rows: [
        [
          { kind: inlineKind.code, value: '"high"' },
          { kind: tableCellKind.value, value: "1.0" },
          { kind: inlineKind.text, textKey: "importance.high" },
        ],
        [
          { kind: inlineKind.code, value: '"medium"' },
          { kind: tableCellKind.value, value: "0.5" },
          { kind: inlineKind.text, textKey: "importance.medium" },
        ],
        [
          { kind: inlineKind.code, value: '"low"' },
          { kind: tableCellKind.value, value: "0.2" },
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
        { id: "weight", headerKey: "col.weight" },
        { id: "effect", headerKey: "col.effect" },
      ],
      rows: [
        [
          { kind: inlineKind.code, value: '"high"' },
          { kind: tableCellKind.value, value: "0.8" },
          { kind: inlineKind.text, textKey: "cost.high" },
        ],
        [
          { kind: inlineKind.code, value: '"medium"' },
          { kind: tableCellKind.value, value: "0.4" },
          { kind: inlineKind.text, textKey: "cost.medium" },
        ],
        [
          { kind: inlineKind.code, value: '"low"' },
          { kind: tableCellKind.value, value: "0.1" },
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
