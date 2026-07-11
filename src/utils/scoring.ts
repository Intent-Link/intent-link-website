/**
 * The prediction-console demo layer. Probabilities come from the real engine;
 * this evaluates every tile with the package's own decision math (mirrored in
 * `intent-link-internals.ts`, since the package does not export it) so the
 * console shows exactly what `<IntentLink>` would do.
 */
import {
  fireThreshold,
  rearmProbability,
  utility,
  type IntentLevel,
} from "./intent-link-internals";

interface TileFire {
  id: string;
  utility: number;
  /** Probability at the moment of firing — what a casual visitor actually understands. */
  probability: number;
}

interface TileEvaluation {
  /** Next armed-state per target id. */
  armed: Record<string, boolean>;
  /** Utilities per target id (for the ring chips). */
  utilities: Record<string, number>;
  /** Targets that crossed the fire threshold this frame. */
  fired: TileFire[];
}

/**
 * Evaluate every target against the current probabilities and knobs, applying
 * the package's trigger lock: fire once when utility crosses above zero, and
 * re-arm only after the probability decays below `rearmProbability`.
 */
const evaluateTiles = (
  probabilities: Record<string, number>,
  previousArmed: Record<string, boolean>,
  importance: IntentLevel,
  cost: IntentLevel,
): TileEvaluation => {
  const armed: Record<string, boolean> = {};
  const utilities: Record<string, number> = {};
  const fired: TileFire[] = [];

  for (const id of Object.keys(probabilities)) {
    const probability = probabilities[id];
    const value = utility(probability, importance, cost);
    utilities[id] = value;
    const wasArmed = previousArmed[id] ?? false;

    if (value > fireThreshold && !wasArmed) {
      armed[id] = true;
      fired.push({ id, utility: value, probability });
    } else if (probability < rearmProbability && wasArmed) {
      armed[id] = false;
    } else {
      armed[id] = wasArmed;
    }
  }

  return { armed, utilities, fired };
};

/**
 * Round a probability to percent granularity. The demo displays whole percents
 * and two-decimal utilities, so finer engine jitter is visual noise — and
 * quantizing lets consumers keep a stable reference across idle frames.
 */
const quantizeProbability = (probability: number): number => Math.round(probability * 100) / 100;

/** Shallow equality over two records with the same value type. */
const areRecordsEqual = <Value,>(
  a: Record<string, Value>,
  b: Record<string, Value>,
): boolean => {
  const aKeys = Object.keys(a);
  const bKeys = Object.keys(b);
  if (aKeys.length !== bKeys.length) return false;
  return aKeys.every((key) => a[key] === b[key]);
};

export { evaluateTiles, quantizeProbability, areRecordsEqual };
