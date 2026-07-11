"use client";

/* eslint-disable react-hooks/refs -- the render-time ref cache is the churn
   defense documented on `usePredictionConsole`: the engine publishes a fresh
   probabilities object every animation frame, and holding the quantized copy
   in state instead would re-trip React's nested-update guard. */

import { useContext, useEffect, useMemo, useRef, useState } from "react";
import { IntentContext } from "intent-link";
import { evaluateTiles, quantizeProbability, areRecordsEqual } from "@/utils/scoring";
import { intentLevel, type IntentLevel } from "@/utils/intent-link-internals";

interface StreamEntry {
  key: number;
  time: string;
  path: string;
  /** Probability (0..100, whole percent) at the moment `onIntent` fired. */
  probability: number;
}

interface ToastState {
  path: string;
}

interface UsePredictionConsoleInfo {
  fired: number;
  log: StreamEntry[];
  toast: ToastState | null;
  armed: Record<string, boolean>;
  utilities: Record<string, number>;
  probabilities: Record<string, number>;
  importance: IntentLevel;
  cost: IntentLevel;
  setImportance: (level: IntentLevel) => void;
  setCost: (level: IntentLevel) => void;
  reset: () => void;
}

const logCap = 9;
const toastMilliseconds = 1900;

/**
 * The prediction-field console. Probabilities come from the real `intent-link`
 * engine (tiles register through `ProductTile`); this layers the importance/cost
 * knobs, the arm/fire hysteresis, the onIntent stream log, and the toast on top
 * — ported from the prototype's `loop`, but reading the real engine's output.
 *
 * The engine publishes a fresh `probabilities` object every animation frame,
 * even when nothing moved. `armed`/`utilities` are therefore derived (not
 * state), and the tile probabilities are quantized behind a stable reference:
 * idle frames produce zero downstream work, and the fire side effects (log,
 * toast, counter) are the only setState in the effect — otherwise React's
 * nested-update guard trips ("Maximum update depth exceeded").
 */
const usePredictionConsole = (tileIds: readonly string[]): UsePredictionConsoleInfo => {
  const { probabilities } = useContext(IntentContext);
  const [importance, setImportance] = useState<IntentLevel>(intentLevel.medium);
  const [cost, setCost] = useState<IntentLevel>(intentLevel.low);
  const [fired, setFired] = useState(0);
  const [log, setLog] = useState<StreamEntry[]>([]);
  const [toast, setToast] = useState<ToastState | null>(null);
  // Bumped by reset() so the evaluation memo re-runs even though it reads the
  // mutable prevArmed ref — otherwise tiles stay visually armed after a reset.
  const [resetTick, setResetTick] = useState(0);

  const prevArmed = useRef<Record<string, boolean>>({});
  const stableProbabilities = useRef<Record<string, number>>({});
  const logId = useRef(0);
  const toastTimer = useRef<ReturnType<typeof setTimeout>>(undefined);

  const tileProbabilities = useMemo(() => {
    const next: Record<string, number> = {};
    for (const id of tileIds) {
      next[id] = quantizeProbability(probabilities[id]?.probability ?? 0);
    }
    if (areRecordsEqual(stableProbabilities.current, next)) {
      return stableProbabilities.current;
    }
    stableProbabilities.current = next;
    return next;
  }, [probabilities, tileIds]);

  const evaluation = useMemo(
    () => evaluateTiles(tileProbabilities, prevArmed.current, importance, cost),
    // resetTick is not read — it only invalidates the memo after reset() clears prevArmed.
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [tileProbabilities, importance, cost, resetTick],
  );

  useEffect(() => {
    prevArmed.current = evaluation.armed;
    if (evaluation.fired.length === 0) return;

    const stamp = new Date().toTimeString().slice(0, 8);
    const newestFirst: StreamEntry[] = evaluation.fired
      .map((fire) => {
        logId.current += 1;
        return {
          key: logId.current,
          time: stamp,
          path: `/${fire.id}`,
          probability: Math.round(fire.probability * 100),
        };
      })
      .reverse();

    setFired((count) => count + newestFirst.length);
    setLog((previous) => [...newestFirst, ...previous].slice(0, logCap));
    setToast({ path: newestFirst[0].path });
    clearTimeout(toastTimer.current);
    toastTimer.current = setTimeout(() => setToast(null), toastMilliseconds);
  }, [evaluation]);

  useEffect(() => () => clearTimeout(toastTimer.current), []);

  const reset = () => {
    clearTimeout(toastTimer.current);
    prevArmed.current = {};
    setFired(0);
    setLog([]);
    setToast(null);
    setResetTick((tick) => tick + 1);
  };

  return {
    fired,
    log,
    toast,
    armed: evaluation.armed,
    utilities: evaluation.utilities,
    probabilities: tileProbabilities,
    importance,
    cost,
    setImportance,
    setCost,
    reset,
  };
};

export { usePredictionConsole };
