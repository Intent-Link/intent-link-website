import { filterStep, smoothVelocity, projectionCone, coneSpeedGate } from "./kalman";

describe("filterStep", () => {
  it("moves the estimate toward the measurement by the gain", () => {
    // 0 + 0.26 * (10 - 0) = 2.6
    expect(filterStep(0, 10, 0.26)).toBeCloseTo(2.6);
  });
  it("stays put when the measurement equals the estimate", () => {
    expect(filterStep(5, 5)).toBe(5);
  });
});

describe("smoothVelocity", () => {
  it("blends previous and instantaneous velocity by alpha", () => {
    // 10*(1-0.28) + 0*0.28 = 7.2
    expect(smoothVelocity(10, 0, 0.28)).toBeCloseTo(7.2);
  });
});

describe("projectionCone", () => {
  it("returns null below the speed gate", () => {
    expect(projectionCone({ x: 0, y: 0 }, { x: 0.1, y: 0 })).toBeNull();
  });

  it("projects along the velocity direction above the gate", () => {
    const cone = projectionCone({ x: 0, y: 0 }, { x: 10, y: 0 });
    expect(cone).not.toBeNull();
    // heading right (+x): the cone center endpoint is to the right of the apex.
    expect(cone!.center.x).toBeGreaterThan(cone!.apex.x);
    expect(cone!.center.y).toBeCloseTo(0, 5);
  });

  it("gate is the documented threshold", () => {
    expect(coneSpeedGate).toBe(0.5);
  });
});
