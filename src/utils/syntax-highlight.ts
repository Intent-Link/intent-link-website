/**
 * Pure, dependency-free tokenizer that turns a code string into typed spans for
 * the dark code blocks. Handles the small surface the site actually renders:
 * JS/TS/JSX (the default), shell commands, and JSON. Highlighting is cosmetic,
 * so the rules favor good-enough spans over a real parser.
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

/** Source languages a code block can declare. Const map + derived union. */
const codeLanguage = {
  tsx: "tsx",
  ts: "ts",
  jsx: "jsx",
  bash: "bash",
  json: "json",
  text: "text",
} as const;

type CodeLanguage = (typeof codeLanguage)[keyof typeof codeLanguage];

interface Token {
  kind: TokenKind;
  value: string;
}

const keywords = new Set([
  "import", "from", "export", "default", "function", "return", "const", "let",
  "var", "if", "else", "new", "await", "async", "for", "while", "typeof",
  "extends", "interface", "type", "as", "in", "of", "void", "class", "this",
]);

// Rendered like numbers (orange), matching the prototype's `.cn` class.
const literals = new Set(["null", "undefined", "true", "false"]);

/** Collapse runs of adjacent `plain` tokens into one span. */
const mergePlain = (tokens: Token[]): Token[] => {
  const merged: Token[] = [];
  for (const token of tokens) {
    const previous = merged[merged.length - 1];
    if (token.kind === tokenKind.plain && previous?.kind === tokenKind.plain) {
      previous.value += token.value;
    } else {
      merged.push({ ...token });
    }
  }
  return merged;
};

const tokenizeJsLike = (code: string): Token[] => {
  const tokens: Token[] = [];
  let index = 0;

  while (index < code.length) {
    const rest = code.slice(index);
    let match: RegExpExecArray | null;

    if ((match = /^\/\/[^\n]*/.exec(rest))) {
      tokens.push({ kind: tokenKind.comment, value: match[0] });
    } else if ((match = /^\/\*[\s\S]*?\*\//.exec(rest))) {
      tokens.push({ kind: tokenKind.comment, value: match[0] });
    } else if ((match = /^(['"`])(?:\\.|(?!\1)[\s\S])*\1?/.exec(rest))) {
      tokens.push({ kind: tokenKind.string, value: match[0] });
    } else if ((match = /^\d+(?:\.\d+)?/.exec(rest))) {
      tokens.push({ kind: tokenKind.number, value: match[0] });
    } else if ((match = /^[A-Za-z_$][A-Za-z0-9_$]*/.exec(rest))) {
      const word = match[0];
      const after = code.slice(index + word.length);
      const isCall = /^\s*\(/.test(after);
      // JSX attribute: lowercase identifier immediately followed by `=` (not
      // `==`/`=>`), e.g. `href=`, `onIntent=` — distinct from `a = b`.
      const isAttribute = /^[a-z]/.test(word) && /^=(?![=>])/.test(after);
      if (keywords.has(word)) {
        tokens.push({ kind: tokenKind.keyword, value: word });
      } else if (literals.has(word)) {
        tokens.push({ kind: tokenKind.number, value: word });
      } else if (isAttribute) {
        tokens.push({ kind: tokenKind.attribute, value: word });
      } else if (isCall || /^[A-Z]/.test(word)) {
        tokens.push({ kind: tokenKind.functionName, value: word });
      } else {
        tokens.push({ kind: tokenKind.plain, value: word });
      }
    } else {
      tokens.push({ kind: tokenKind.plain, value: rest[0] });
      match = null;
    }

    index += match ? match[0].length : 1;
  }

  return mergePlain(tokens);
};

const tokenizeBash = (code: string): Token[] => {
  const tokens: Token[] = [];
  let index = 0;

  while (index < code.length) {
    const rest = code.slice(index);
    let match: RegExpExecArray | null;

    if ((match = /^#[^\n]*/.exec(rest))) {
      tokens.push({ kind: tokenKind.comment, value: match[0] });
    } else if ((match = /^\$(?=\s)/.exec(rest))) {
      tokens.push({ kind: tokenKind.comment, value: match[0] });
    } else if ((match = /^(['"])(?:\\.|(?!\1)[\s\S])*\1?/.exec(rest))) {
      tokens.push({ kind: tokenKind.string, value: match[0] });
    } else if ((match = /^(npm|pnpm|yarn|bun|npx)\b/.exec(rest))) {
      tokens.push({ kind: tokenKind.functionName, value: match[0] });
    } else {
      tokens.push({ kind: tokenKind.plain, value: rest[0] });
      match = null;
    }

    index += match ? match[0].length : 1;
  }

  return mergePlain(tokens);
};

/** Tokenize `code` for `language`; unknown/plain languages return a single span. */
const tokenize = (code: string, language: CodeLanguage = codeLanguage.text): Token[] => {
  if (language === codeLanguage.text) return [{ kind: tokenKind.plain, value: code }];
  if (language === codeLanguage.bash) return tokenizeBash(code);
  return tokenizeJsLike(code);
};

export { tokenKind, codeLanguage, tokenize };
export type { TokenKind, CodeLanguage };
