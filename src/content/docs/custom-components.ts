import { blockKind, type DocContent } from "./types";
import { codeLanguage } from "@/utils/syntax-highlight";

const exampleSnippet = `import { useContext, useRef, useEffect, useId } from "react"
import { IntentContext } from "intent-link"

function PredictiveButton({ onIntent, children }) {
  const { probabilities, registerLink, unregisterLink } = useContext(IntentContext)
  const ref = useRef(null)
  const id = useId()

  useEffect(() => {
    if (ref.current) registerLink(id, ref.current)
    return () => unregisterLink(id)
  }, [id])

  const p = probabilities[id]?.probability ?? 0
  useEffect(() => { if (p > 0.5) onIntent?.() }, [p])

  return <button ref={ref}>{children}</button>
}`;

const customComponents: DocContent = {
  slug: "custom-components",
  blocks: [
    { kind: blockKind.paragraph, textKey: "intro" },

    { kind: blockKind.heading, level: 2, id: "register", textKey: "registerHeading" },
    { kind: blockKind.paragraph, textKey: "registerBody" },

    { kind: blockKind.heading, level: 2, id: "example", textKey: "exampleHeading" },
    { kind: blockKind.code, language: codeLanguage.tsx, code: exampleSnippet },
  ],
};

export { customComponents };
