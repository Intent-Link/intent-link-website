import { blockKind, inlineKind, type DocContent } from "./types";
import { codeLanguage } from "@/utils/syntax-highlight";

const contextTypeSnippet = `{
  probabilities: Record<string, PhysicsState>
  registerLink:   (id: string, el: HTMLElement) => void
  unregisterLink: (id: string) => void
}`;

const intentContext: DocContent = {
  slug: "intent-context",
  blocks: [
    { kind: blockKind.paragraph, textKey: "intro" },

    { kind: blockKind.heading, level: 2, id: "physicsstate", textKey: "physicsStateHeading" },
    { kind: blockKind.paragraph, textKey: "physicsStateBody" },
    {
      kind: blockKind.table,
      columns: [
        { id: "field", headerKey: "col.field" },
        { id: "type", headerKey: "col.type" },
        { id: "meaning", headerKey: "col.meaning" },
      ],
      rows: [
        [
          { kind: inlineKind.code, value: "probability" },
          { kind: inlineKind.code, value: "number" },
          { kind: inlineKind.text, textKey: "field.probability" },
        ],
        [
          { kind: inlineKind.code, value: "weight" },
          { kind: inlineKind.code, value: "number" },
          { kind: inlineKind.text, textKey: "field.weight" },
        ],
        [
          { kind: inlineKind.code, value: "kineticAgent" },
          { kind: inlineKind.code, value: "number" },
          { kind: inlineKind.text, textKey: "field.kineticAgent" },
        ],
        [
          { kind: inlineKind.code, value: "kineticTarget" },
          { kind: inlineKind.code, value: "number" },
          { kind: inlineKind.text, textKey: "field.kineticTarget" },
        ],
        [
          { kind: inlineKind.code, value: "potential" },
          { kind: inlineKind.code, value: "number" },
          { kind: inlineKind.text, textKey: "field.potential" },
        ],
      ],
    },

    { kind: blockKind.heading, level: 2, id: "contexttype", textKey: "contextTypeHeading" },
    { kind: blockKind.code, language: codeLanguage.ts, code: contextTypeSnippet },
    { kind: blockKind.paragraph, textKey: "seeAlso" },
  ],
};

export { intentContext };
