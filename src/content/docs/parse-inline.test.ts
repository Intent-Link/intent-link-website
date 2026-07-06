import { parseInline } from "./parse-inline";

describe("parseInline", () => {
  it("parses plain text to a single text node", () => {
    expect(parseInline("hello world")).toEqual([{ kind: "text", value: "hello world" }]);
  });

  it("parses code spans", () => {
    expect(parseInline("run `npm install` now")).toEqual([
      { kind: "text", value: "run " },
      { kind: "code", value: "npm install" },
      { kind: "text", value: " now" },
    ]);
  });

  it("parses strong with nested code", () => {
    expect(parseInline("**always `true`**")).toEqual([
      {
        kind: "strong",
        children: [
          { kind: "text", value: "always " },
          { kind: "code", value: "true" },
        ],
      },
    ]);
  });

  it("parses internal links with anchors and code labels", () => {
    expect(parseInline("see [`IntentLink`](intent-link#props)")).toEqual([
      { kind: "text", value: "see " },
      {
        kind: "link",
        slug: "intent-link",
        anchor: "props",
        children: [{ kind: "code", value: "IntentLink" }],
      },
    ]);
  });

  it("parses external links by scheme", () => {
    expect(parseInline("[repo](https://example.com)")).toEqual([
      { kind: "extLink", href: "https://example.com", children: [{ kind: "text", value: "repo" }] },
    ]);
  });

  it("throws on an unknown internal link target", () => {
    expect(() => parseInline("[bad](no-such-doc)")).toThrow(/unknown link target/);
  });
});
