import { blockKind, type DocContent } from "./types";
import { codeLanguage } from "@/utils/syntax-highlight";

const usageSnippet = `<IntentProvider>{children}</IntentProvider>`;

const intentProvider: DocContent = {
  slug: "intent-provider",
  blocks: [
    { kind: blockKind.paragraph, textKey: "intro" },

    { kind: blockKind.heading, level: 2, id: "usage", textKey: "usageHeading" },
    { kind: blockKind.code, language: codeLanguage.tsx, code: usageSnippet },

    { kind: blockKind.heading, level: 2, id: "notes", textKey: "notesHeading" },
    { kind: blockKind.list, ordered: false, itemKeys: ["notes.client", "notes.loop", "notes.provides"] },
  ],
};

export { intentProvider };
