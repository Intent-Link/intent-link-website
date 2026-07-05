import { formatMs, formatPercent } from "./format";

describe("formatMs", () => {
  it("rounds and suffixes with ms", () => {
    expect(formatMs(12.4)).toBe("12ms");
    expect(formatMs(12.6)).toBe("13ms");
  });
});

describe("formatPercent", () => {
  it("renders a fraction as a rounded percent", () => {
    expect(formatPercent(0.5)).toBe("50%");
    expect(formatPercent(0.123)).toBe("12%");
  });
});
