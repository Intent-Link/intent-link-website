import { blockKind, type DocContent } from "./types";
import { codeLanguage } from "@/utils/syntax-highlight";

const usageSnippet = `// app/layout.tsx
import { IntentProvider } from "intent-link"

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <IntentProvider>{children}</IntentProvider>
      </body>
    </html>
  )
}`;

const intentProvider: DocContent = {
  slug: "intent-provider",
  blocks: [
    { kind: blockKind.paragraph, textKey: "intro" },

    { kind: blockKind.heading, level: 2, id: "usage", textKey: "usageHeading" },
    { kind: blockKind.code, language: codeLanguage.tsx, code: usageSnippet },

    { kind: blockKind.heading, level: 2, id: "notes", textKey: "notesHeading" },
    {
      kind: blockKind.list,
      ordered: false,
      itemKeys: ["notes.once", "notes.props", "notes.client"],
    },
  ],
};

export { intentProvider };
