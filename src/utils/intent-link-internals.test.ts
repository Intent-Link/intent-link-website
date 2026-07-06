import {
  importanceWeight,
  costWeight,
  utility,
  fireThreshold,
  rearmProbability,
} from "./intent-link-internals";

describe("importanceWeight / costWeight", () => {
  it("matches the weights inside intent-link@1.0.8 (IMPORTANCE_WEIGHTS / COST_WEIGHTS)", () => {
    expect(importanceWeight("high")).toBe(1);
    expect(importanceWeight("medium")).toBe(0.5);
    expect(importanceWeight("low")).toBe(0.2);
    expect(costWeight("high")).toBe(0.8);
    expect(costWeight("medium")).toBe(0.4);
    expect(costWeight("low")).toBe(0.1);
  });
});

describe("utility", () => {
  it("computes probability·importanceWeight − costWeight", () => {
    // 0.9 · 1 − 0.1 = 0.8
    expect(utility(0.9, "high", "low")).toBeCloseTo(0.8);
  });
  it("goes negative when cost dominates", () => {
    expect(utility(0.1, "low", "high")).toBeCloseTo(-0.78);
  });
});

describe("thresholds", () => {
  it("matches the package's fire / trigger-lock release points", () => {
    expect(fireThreshold).toBe(0);
    expect(rearmProbability).toBe(0.05);
  });
});
