/** Pure math helpers shared by the demos. */

const clamp = (value: number, min: number, max: number): number => {
  return Math.min(max, Math.max(min, value));
};

const lerp = (a: number, b: number, t: number): number => {
  return a + (b - a) * t;
};

/** Utility function used by intent scoring: P·importance − cost. */
const utility = (probability: number, importance: number, cost: number): number => {
  return probability * importance - cost;
};

export { clamp, lerp, utility };
