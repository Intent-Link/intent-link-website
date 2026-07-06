/**
 * Pure math for the "Kalman lens" canvas — a filtered-estimate model of pointer
 * motion, ported from the prototype's `lensMove`/`lensDraw`. Kept free of any
 * canvas or DOM reference so it is unit-testable; the hook owns rendering.
 *
 * This is a deliberately simplified visualization of what the package does. The
 * real engine runs a full 2D matrix Kalman filter (`KalmanFilter2D` inside
 * `intent-link`, not exported); its decision math is mirrored verbatim in
 * `intent-link-internals.ts`.
 */

interface Vec2 {
  x: number;
  y: number;
}

/** Kalman-style blend gain toward the noisy measurement. */
const kalmanGain = 0.26;
/** Velocity smoothing factor (v = v·(1−α) + instant·α). */
const velocitySmoothing = 0.28;
/** Peak-to-peak amplitude of the simulated sensor noise, in px. */
const sensorNoise = 13;
/** Ring-buffer caps for the raw-sample dots and the filtered trail. */
const rawSampleCap = 64;
const trailCap = 150;
/** No pointer movement for this long ⇒ hide the projection cone. */
const idleMilliseconds = 900;
/** Below this speed the motion is too uncertain to project a cone. */
const coneSpeedGate = 0.5;

/** One filter step per axis: move the estimate toward the measurement by `gain`. */
const filterStep = (previous: number, measurement: number, gain = kalmanGain): number =>
  previous + gain * (measurement - previous);

/** Exponentially smooth a velocity component toward its instantaneous value. */
const smoothVelocity = (previous: number, instant: number, alpha = velocitySmoothing): number =>
  previous * (1 - alpha) + instant * alpha;

/** Add simulated sensor noise to a measured coordinate. `noiseSample` is a caller-supplied random value in [0, 1) (e.g. `Math.random()`), kept as a parameter so this stays pure/deterministic and testable. */
const addSensorNoise = (value: number, noiseSample: number): number =>
  value + (noiseSample - 0.5) * sensorNoise;

interface Cone {
  apex: Vec2;
  left: Vec2;
  right: Vec2;
  center: Vec2;
}

/**
 * Forward projection cone from `origin` along `velocity`. Longer and narrower
 * when fast/confident, wider when slow/uncertain. Returns null below the speed
 * gate (nothing to project).
 */
const projectionCone = (origin: Vec2, velocity: Vec2): Cone | null => {
  const speed = Math.hypot(velocity.x, velocity.y);
  if (speed <= coneSpeedGate) return null;

  const direction = Math.atan2(velocity.y, velocity.x);
  const length = Math.min(280, 50 + speed * 11);
  const spread = Math.min(0.55, 0.12 + 1.4 / (speed + 2));

  return {
    apex: origin,
    left: {
      x: origin.x + Math.cos(direction - spread) * length,
      y: origin.y + Math.sin(direction - spread) * length,
    },
    right: {
      x: origin.x + Math.cos(direction + spread) * length,
      y: origin.y + Math.sin(direction + spread) * length,
    },
    center: {
      x: origin.x + Math.cos(direction) * length,
      y: origin.y + Math.sin(direction) * length,
    },
  };
};

export { rawSampleCap, trailCap, idleMilliseconds, coneSpeedGate, filterStep, smoothVelocity, addSensorNoise, projectionCone };
export type { Vec2 };
