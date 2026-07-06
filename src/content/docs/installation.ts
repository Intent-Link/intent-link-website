import { blockKind, inlineKind, tableCellKind, type DocContent } from "./types";
import { codeLanguage } from "@/utils/syntax-highlight";

const pagesRouterSnippet = `// pages/_app.jsx  (Pages Router)
import { IntentProvider } from "intent-link"

export default function App({ Component, pageProps }) {
  return (
    <IntentProvider>
      <Component {...pageProps} />
    </IntentProvider>
  )
}`;

const installation: DocContent = {
  slug: "installation",
  blocks: [
    { kind: blockKind.paragraph, textKey: "intro" },
    { kind: blockKind.install },

    { kind: blockKind.heading, level: 2, id: "requirements", textKey: "requirementsHeading" },
    {
      kind: blockKind.table,
      columns: [
        { id: "peer", headerKey: "col.peer" },
        { id: "version", headerKey: "col.version" },
      ],
      rows: [
        [
          { kind: inlineKind.code, value: "react" },
          { kind: tableCellKind.value, value: "≥ 18.0.0" },
        ],
        [
          { kind: inlineKind.code, value: "react-dom" },
          { kind: tableCellKind.value, value: "≥ 18.0.0" },
        ],
        [
          { kind: inlineKind.code, value: "next" },
          { kind: tableCellKind.value, value: "≥ 13.0.0" },
        ],
      ],
    },

    { kind: blockKind.heading, level: 2, id: "app-router", textKey: "appRouterHeading" },
    { kind: blockKind.paragraph, textKey: "appRouterBody" },
    { kind: blockKind.code, language: codeLanguage.tsx, code: pagesRouterSnippet },
  ],
};

export { installation };
