import { evaluateTiles } from "./scoring";

describe("evaluateTiles", () => {
  it("arms and fires a tile when utility crosses zero", () => {
    const result = evaluateTiles({ a: 0.9 }, {}, "high", "low");
    expect(result.armed.a).toBe(true);
    expect(result.fired).toHaveLength(1);
    expect(result.fired[0].id).toBe("a");
  });

  it("does not re-fire a tile that is already armed", () => {
    const result = evaluateTiles({ a: 0.9 }, { a: true }, "high", "low");
    expect(result.armed.a).toBe(true);
    expect(result.fired).toHaveLength(0);
  });

  it("re-arms once the probability decays below the re-arm threshold", () => {
    const result = evaluateTiles({ a: 0.01 }, { a: true }, "high", "low");
    expect(result.armed.a).toBe(false);
    expect(result.fired).toHaveLength(0);
  });

  it("stays armed while the probability remains above the re-arm threshold", () => {
    // utility is negative here (0.2·0.2 − 0.8 < 0) but probability ≥ 0.05
    const result = evaluateTiles({ a: 0.2 }, { a: true }, "low", "high");
    expect(result.armed.a).toBe(true);
  });
});
