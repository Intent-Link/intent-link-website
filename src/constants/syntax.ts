import { tokenKind, type TokenKind } from "@/utils/syntax-highlight";

/** Syntax-highlight color map (Material-ish), shared by all code blocks. */
const syntaxColors: Record<TokenKind, string> = {
  [tokenKind.keyword]: "#c792ea",
  [tokenKind.string]: "#c3e88d",
  [tokenKind.functionName]: "#82aaff",
  [tokenKind.number]: "#f78c6c",
  [tokenKind.attribute]: "#ffcb6b",
  [tokenKind.comment]: "#5b6577",
  [tokenKind.plain]: "var(--term-ink)",
};

export { syntaxColors };
