import { blockKind, type DocContent } from "./types";
import { codeLanguage } from "@/utils/syntax-highlight";

const typesSnippet = `import type {
  IntentLinkProps,
  PhysicsState,
  IntentContextType
} from "intent-link"`;

const typescript: DocContent = {
  slug: "typescript",
  blocks: [
    { kind: blockKind.paragraph, textKey: "intro" },
    { kind: blockKind.heading, level: 2, id: "types", textKey: "typesHeading" },
    { kind: blockKind.code, language: codeLanguage.ts, code: typesSnippet },
    {
      kind: blockKind.list,
      ordered: false,
      itemKeys: ["types.props", "types.physics", "types.context"],
    },
  ],
};

export { typescript };
