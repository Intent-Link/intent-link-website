/**
 * ⚠ Mirrored from `intent-link@1.0.8` internals — NOT our own tuning.
 *
 * The package does not export its decision math (weights, utility formula,
 * fire/re-arm thresholds live inside `IntentLink` — see
 * `node_modules/intent-link/dist/index.mjs`, `IMPORTANCE_WEIGHTS` /
 * `COST_WEIGHTS` / the `Utility > 0` trigger / the `probability < 0.05`
 * re-arm). The demos and docs need those exact numbers, so this file is the
 * single place they are copied to. Do not tweak values here; re-verify against
 * the installed package whenever its version bumps.
 */

/** Importance / cost prop levels accepted by `<IntentLink>`. */
const intentLevel = {
  high: "high",
  medium: "medium",
  low: "low",
} as const;

type IntentLevel = (typeof intentLevel)[keyof typeof intentLevel];

/** `IMPORTANCE_WEIGHTS` in the package (B in `utility = P·B − C`). */
const importanceWeights: Record<IntentLevel, number> = { high: 1, medium: 0.5, low: 0.2 };
/** `COST_WEIGHTS` in the package (C in `utility = P·B − C`). */
const costWeights: Record<IntentLevel, number> = { high: 0.8, medium: 0.4, low: 0.1 };

/** `onIntent` fires once when utility crosses above this. */
const fireThreshold = 0;
/** The trigger lock releases (link can fire again) below this probability. */
const rearmProbability = 0.05;

const importanceWeight = (level: IntentLevel): number => importanceWeights[level];
const costWeight = (level: IntentLevel): number => costWeights[level];

/** The package's decision function: `utility = probability·importance − cost`. */
const utility = (probability: number, importance: IntentLevel, cost: IntentLevel): number =>
  probability * importanceWeight(importance) - costWeight(cost);

export { intentLevel, fireThreshold, rearmProbability, importanceWeight, costWeight, utility };
export type { IntentLevel };
