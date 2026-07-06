import { blockKind, type DocContent } from "./types";
import { codeLanguage } from "@/utils/syntax-highlight";

const layoutSnippet = `// app/layout.jsx
import { IntentProvider } from "intent-link"

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <IntentProvider>{children}</IntentProvider>
      </body>
    </html>
  )
}`;

const linkSnippet = `import { IntentLink } from "intent-link"
import { useRouter } from "next/navigation"

function ProductCard({ href }) {
  const router = useRouter()
  return (
    <IntentLink href={href} onIntent={() => router.prefetch(href)}>
      View product
    </IntentLink>
  )
}`;

const quickstart: DocContent = {
  slug: "quickstart",
  blocks: [
    { kind: blockKind.paragraph, textKey: "intro" },
    { kind: blockKind.heading, level: 2, id: "1-install", textKey: "installHeading" },
    { kind: blockKind.install },
    { kind: blockKind.paragraph, textKey: "peerDeps" },
    { kind: blockKind.heading, level: 2, id: "2-wrap", textKey: "wrapHeading" },
    { kind: blockKind.paragraph, textKey: "wrapBody" },
    { kind: blockKind.code, language: codeLanguage.tsx, code: layoutSnippet },
    { kind: blockKind.heading, level: 2, id: "3-links", textKey: "linksHeading" },
    { kind: blockKind.paragraph, textKey: "linksBody" },
    { kind: blockKind.code, language: codeLanguage.tsx, code: linkSnippet },
    { kind: blockKind.paragraph, textKey: "closing" },
  ],
};

export { quickstart };
