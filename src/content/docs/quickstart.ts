import { blockKind, type DocContent } from "./types";
import { codeLanguage } from "@/utils/syntax-highlight";

const layoutSnippet = `// app/layout.tsx
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

const linkSnippet = `"use client"

import { IntentLink } from "intent-link"
import { useRouter } from "next/navigation"

function ProductCard({ href }: { href: string }) {
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
    { kind: blockKind.heading, level: 2, id: "2-wrap", textKey: "wrapHeading" },
    { kind: blockKind.paragraph, textKey: "wrapBody" },
    { kind: blockKind.code, language: codeLanguage.tsx, code: layoutSnippet },
    { kind: blockKind.heading, level: 2, id: "3-links", textKey: "linksHeading" },
    { kind: blockKind.paragraph, textKey: "linksBody" },
    { kind: blockKind.code, language: codeLanguage.tsx, code: linkSnippet },
    { kind: blockKind.callout, tone: "tip", textKey: "closing" },
  ],
};

export { quickstart };
