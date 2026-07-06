import { blockKind, type DocContent } from "./types";
import { codeLanguage } from "@/utils/syntax-highlight";

const previewsSnippet = `<IntentLink href="/pricing" onIntent={() => setShowPreview(true)}>
  Pricing
</IntentLink>`;

const analyticsSnippet = `<IntentLink
  href="/upgrade"
  onIntent={({ href, utility }) => track("predicted_intent", { href, utility })}
>
  Upgrade
</IntentLink>`;

const beyondPrefetch: DocContent = {
  slug: "beyond-prefetch",
  blocks: [
    { kind: blockKind.paragraph, textKey: "intro" },

    { kind: blockKind.heading, level: 2, id: "previews", textKey: "previewsHeading" },
    { kind: blockKind.code, language: codeLanguage.tsx, code: previewsSnippet },

    { kind: blockKind.heading, level: 2, id: "analytics", textKey: "analyticsHeading" },
    { kind: blockKind.paragraph, textKey: "analyticsBody" },
    { kind: blockKind.code, language: codeLanguage.tsx, code: analyticsSnippet },

    { kind: blockKind.heading, level: 2, id: "adaptive", textKey: "adaptiveHeading" },
    { kind: blockKind.paragraph, textKey: "adaptiveBody" },
  ],
};

export { beyondPrefetch };
