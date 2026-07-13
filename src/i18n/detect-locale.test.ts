import { detectLocale, parseAcceptLanguage } from "./detect-locale";

describe("locale detection", () => {
  it("uses a saved supported locale before the browser preference", () => {
    expect(detectLocale("it", "tr-TR,tr;q=0.9")).toBe("it");
  });

  it("matches regional browser languages to their supported base locale", () => {
    expect(detectLocale(undefined, "zh-CN,zh;q=0.9,en;q=0.8")).toBe("zh");
    expect(detectLocale(undefined, "pt-BR,pt;q=0.9")).toBe("pt");
  });

  it("honours quality weights", () => {
    expect(detectLocale(undefined, "en;q=0.5,tr-TR;q=0.9,it;q=0.7")).toBe("tr");
  });

  it("falls back to English for unsupported or missing languages", () => {
    expect(detectLocale(undefined, "nl-NL,nl;q=0.9")).toBe("en");
    expect(detectLocale(undefined, null)).toBe("en");
  });

  it("discards wildcard and disabled entries", () => {
    expect(parseAcceptLanguage("*;q=1,ar;q=0,it;q=0.8").map(({ language }) => language)).toEqual(["it"]);
  });
});
