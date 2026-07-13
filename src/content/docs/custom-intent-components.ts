import { blockKind, type DocContent } from "./types";
import { codeLanguage } from "@/utils/syntax-highlight";

const intentButtonSnippet = `"use client";

import type { ButtonHTMLAttributes } from "react";
import {
  useIntentTarget,
  type UseIntentTargetOptions,
} from "intent-link";

type IntentButtonProps =
  ButtonHTMLAttributes<HTMLButtonElement> &
  UseIntentTargetOptions;

export function IntentButton({
  onIntent,
  importance,
  cost,
  children,
  ...buttonProps
}: IntentButtonProps) {
  const intentRef = useIntentTarget<HTMLButtonElement>({
    onIntent,
    importance,
    cost,
  });

  return (
    <button ref={intentRef} {...buttonProps}>
      {children}
    </button>
  );
}`;

const intentButtonUsageSnippet = `<IntentButton
  className="preview-button"
  onIntent={preloadPreview}
>
  Preview
</IntentButton>`;

const intentArticleSnippet = `"use client";

import type { HTMLAttributes } from "react";
import {
  useIntentTarget,
  type UseIntentTargetOptions,
} from "intent-link";

type IntentArticleProps =
  HTMLAttributes<HTMLElement> &
  UseIntentTargetOptions;

export function IntentArticle({
  onIntent,
  importance,
  cost,
  children,
  ...articleProps
}: IntentArticleProps) {
  const intentRef = useIntentTarget<HTMLElement>({
    onIntent,
    importance,
    cost,
  });

  return (
    <article ref={intentRef} {...articleProps}>
      {children}
    </article>
  );
}`;

const intentArticleUsageSnippet = `<IntentArticle
  className="product-card"
  onIntent={() => preloadProduct(productId)}
>
  <ProductImage />
  <ProductDetails />
</IntentArticle>`;

const customIntentComponents: DocContent = {
  slug: "custom-intent-components",
  blocks: [
    { kind: blockKind.paragraph, textKey: "intro" },
    { kind: blockKind.heading, level: 2, id: "intent-button", textKey: "buttonHeading" },
    { kind: blockKind.paragraph, textKey: "buttonBody" },
    { kind: blockKind.code, language: codeLanguage.tsx, code: intentButtonSnippet },
    { kind: blockKind.heading, level: 3, id: "intent-button-usage", textKey: "usageHeading" },
    { kind: blockKind.code, language: codeLanguage.tsx, code: intentButtonUsageSnippet },
    { kind: blockKind.heading, level: 2, id: "intent-article", textKey: "articleHeading" },
    { kind: blockKind.paragraph, textKey: "articleBody" },
    { kind: blockKind.code, language: codeLanguage.tsx, code: intentArticleSnippet },
    { kind: blockKind.heading, level: 3, id: "intent-article-usage", textKey: "usageHeading" },
    { kind: blockKind.code, language: codeLanguage.tsx, code: intentArticleUsageSnippet },
  ],
};

export { customIntentComponents };
