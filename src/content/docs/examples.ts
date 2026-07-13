import { blockKind, type DocContent } from "./types";
import { codeLanguage } from "@/utils/syntax-highlight";

const routeSnippet = `<IntentLink href={href} onIntent={() => router.prefetch(href)}>
  {label}
</IntentLink>`;

const dataSnippet = `<IntentLink
  href={\`/product/\${id}\`}
  onIntent={() => queryClient.prefetchQuery({ queryKey: ["product", id] })}
>
  {name}
</IntentLink>`;

const assetSnippet = `<IntentLink
  href={\`/product/\${id}\`}
  onIntent={() => {
    const image = new Image()
    image.src = heroImageFor(id)
  }}
>
  {name}
</IntentLink>`;

const actionSnippet = `const intentRef = useIntentTarget<HTMLButtonElement>({
  onIntent: () => { void import("./product-preview") },
})

return <button ref={intentRef}>Open preview</button>`;

const examples: DocContent = {
  slug: "examples",
  blocks: [
    { kind: blockKind.paragraph, textKey: "intro" },
    { kind: blockKind.heading, level: 2, id: "route", textKey: "routeHeading" },
    { kind: blockKind.paragraph, textKey: "routeBody" },
    { kind: blockKind.code, language: codeLanguage.tsx, code: routeSnippet },
    { kind: blockKind.heading, level: 2, id: "data", textKey: "dataHeading" },
    { kind: blockKind.paragraph, textKey: "dataBody" },
    { kind: blockKind.code, language: codeLanguage.tsx, code: dataSnippet },
    { kind: blockKind.heading, level: 2, id: "asset", textKey: "assetHeading" },
    { kind: blockKind.paragraph, textKey: "assetBody" },
    { kind: blockKind.code, language: codeLanguage.tsx, code: assetSnippet },
    { kind: blockKind.heading, level: 2, id: "action", textKey: "actionHeading" },
    { kind: blockKind.paragraph, textKey: "actionBody" },
    { kind: blockKind.code, language: codeLanguage.tsx, code: actionSnippet },
  ],
};

export { examples };
