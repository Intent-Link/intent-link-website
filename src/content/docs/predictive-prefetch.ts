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

const predictivePrefetch: DocContent = {
  slug: "predictive-prefetch",
  blocks: [
    { kind: blockKind.paragraph, textKey: "intro" },

    { kind: blockKind.heading, level: 2, id: "route", textKey: "routeHeading" },
    { kind: blockKind.code, language: codeLanguage.tsx, code: routeSnippet },
    { kind: blockKind.paragraph, textKey: "routeBody" },

    { kind: blockKind.heading, level: 2, id: "data", textKey: "dataHeading" },
    { kind: blockKind.paragraph, textKey: "dataBody" },
    { kind: blockKind.code, language: codeLanguage.tsx, code: dataSnippet },
  ],
};

export { predictivePrefetch };
