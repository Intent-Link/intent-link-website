import { clamp, lerp, utility } from "./math";

describe("clamp", () => {
  it("clamps below the minimum", () => {
    expect(clamp(-5, 0, 10)).toBe(0);
  });
  it("clamps above the maximum", () => {
    expect(clamp(15, 0, 10)).toBe(10);
  });
  it("passes values within range through", () => {
    expect(clamp(4, 0, 10)).toBe(4);
  });
});

describe("lerp", () => {
  it("returns endpoints at t=0 and t=1", () => {
    expect(lerp(0, 10, 0)).toBe(0);
    expect(lerp(0, 10, 1)).toBe(10);
  });
  it("interpolates the midpoint", () => {
    expect(lerp(0, 10, 0.5)).toBe(5);
  });
});

describe("utility", () => {
  it("computes probability·importance − cost", () => {
    expect(utility(0.5, 2, 0.25)).toBe(0.75);
  });
  it("can go negative when cost dominates", () => {
    expect(utility(0.1, 1, 0.5)).toBeCloseTo(-0.4);
  });
});
