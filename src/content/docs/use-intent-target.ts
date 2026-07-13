import { blockKind, type DocContent } from "./types";
import { codeLanguage } from "@/utils/syntax-highlight";

const buttonSnippet = `"use client"

import { useIntentTarget } from "intent-link"

export function PreviewButton() {
  const intentRef = useIntentTarget<HTMLButtonElement>({
    onIntent: () => preloadProductPreview(),
  })

  return <button ref={intentRef}>Preview product</button>
}`;

const thirdPartySnippet = `const intentRef = useIntentTarget<HTMLDivElement>({
  onIntent: () => prepareCarousel(),
})

return <ThirdPartyCarousel ref={intentRef} />`;

const wrapperSnippet = `const intentRef = useIntentTarget<HTMLDivElement>({
  onIntent: () => prepareCarousel(),
})

return (
  <div ref={intentRef}>
    <ThirdPartyCarousel />
  </div>
)`;

const useIntentTarget: DocContent = {
  slug: "use-intent-target",
  blocks: [
    { kind: blockKind.paragraph, textKey: "intro" },
    { kind: blockKind.heading, level: 2, id: "button", textKey: "buttonHeading" },
    { kind: blockKind.paragraph, textKey: "buttonBody" },
    { kind: blockKind.code, language: codeLanguage.tsx, code: buttonSnippet },
    { kind: blockKind.heading, level: 2, id: "options", textKey: "optionsHeading" },
    {
      kind: blockKind.list,
      ordered: false,
      itemKeys: ["options.onIntent", "options.importance", "options.cost"],
    },
    { kind: blockKind.heading, level: 2, id: "third-party", textKey: "thirdPartyHeading" },
    { kind: blockKind.paragraph, textKey: "thirdPartyBody" },
    { kind: blockKind.code, language: codeLanguage.tsx, code: thirdPartySnippet },
    { kind: blockKind.paragraph, textKey: "wrapperBody" },
    { kind: blockKind.code, language: codeLanguage.tsx, code: wrapperSnippet },
  ],
};

export { useIntentTarget };
