/**
 * Pure, dependency-free tokenizer that turns a code string into typed spans
 * for the code blocks. TODO: port the highlighting rules used in the design
 * prototypes (Landing.dc.html / Docs.dc.html).
 */

/** The kinds of span the tokenizer can emit. Const map + derived union — no magic strings. */
const tokenKind = {
  keyword: "keyword",
  string: "string",
  functionName: "functionName",
  number: "number",
  attribute: "attribute",
  comment: "comment",
  plain: "plain",
} as const;

type TokenKind = (typeof tokenKind)[keyof typeof tokenKind];

interface Token {
  kind: TokenKind;
  value: string;
}

const tokenize = (code: string): Token[] => {
  // TODO: real tokenizer. Stub returns the code as a single plain token.
  return [{ kind: tokenKind.plain, value: code }];
};

export { tokenKind, tokenize };
export type { TokenKind, Token };
