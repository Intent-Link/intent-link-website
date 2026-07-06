import { tokenize, codeLanguage, tokenKind } from "./syntax-highlight";

describe("tokenize", () => {
  it("returns a single plain token for text language", () => {
    const tokens = tokenize("just words", codeLanguage.text);
    expect(tokens).toHaveLength(1);
    expect(tokens[0]).toEqual({ kind: tokenKind.plain, value: "just words" });
  });

  it("highlights keywords and strings in JS/TS", () => {
    const tokens = tokenize('import x from "y"', codeLanguage.tsx);
    expect(tokens.some((t) => t.kind === tokenKind.keyword && t.value === "import")).toBe(true);
    expect(tokens.some((t) => t.kind === tokenKind.string && t.value === '"y"')).toBe(true);
  });

  it("marks comments", () => {
    const tokens = tokenize("// note", codeLanguage.ts);
    expect(tokens[0]).toEqual({ kind: tokenKind.comment, value: "// note" });
  });

  it("dims the shell prompt in bash", () => {
    const tokens = tokenize("$ npm install intent-link", codeLanguage.bash);
    expect(tokens[0]).toEqual({ kind: tokenKind.comment, value: "$" });
    expect(tokens.some((t) => t.kind === tokenKind.functionName && t.value === "npm")).toBe(true);
  });

  it("reassembles to the original source", () => {
    const source = 'const a = fn(1) // x';
    const roundTrip = tokenize(source, codeLanguage.tsx)
      .map((t) => t.value)
      .join("");
    expect(roundTrip).toBe(source);
  });
});
