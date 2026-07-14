"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import type { IntentLevel } from "intent-link";

interface StreamEntry {
  key: number;
  time: string;
  path: string;
}

interface UsePredictionConsoleInfo {
  fired: number;
  log: StreamEntry[];
  prefetched: Record<string, boolean>;
  importance: IntentLevel;
  cost: IntentLevel;
  generation: number;
  setImportance: (level: IntentLevel) => void;
  setCost: (level: IntentLevel) => void;
  recordIntent: (id: string) => void;
  reset: () => void;
}

const logCap = 9;
const prefetchedMilliseconds = 1000;

/** Records the real onIntent callbacks emitted by the current public API. */
const usePredictionConsole = (): UsePredictionConsoleInfo => {
  const [importance, setImportance] = useState<IntentLevel>("medium");
  const [cost, setCost] = useState<IntentLevel>("low");
  const [fired, setFired] = useState(0);
  const [log, setLog] = useState<StreamEntry[]>([]);
  const [prefetched, setPrefetched] = useState<Record<string, boolean>>({});
  const [generation, setGeneration] = useState(0);
  const logId = useRef(0);
  const prefetchedTimers = useRef(new Map<string, ReturnType<typeof setTimeout>>());

  const recordIntent = useCallback((id: string) => {
    logId.current += 1;
    const entry: StreamEntry = {
      key: logId.current,
      time: new Date().toTimeString().slice(0, 8),
      path: `/${id}`,
    };

    setFired((count) => count + 1);
    setLog((previous) => [entry, ...previous].slice(0, logCap));
    setPrefetched((previous) => ({ ...previous, [id]: true }));
    clearTimeout(prefetchedTimers.current.get(id));
    prefetchedTimers.current.set(id, setTimeout(() => {
      setPrefetched((previous) => {
        if (!previous[id]) return previous;
        const next = { ...previous };
        delete next[id];
        return next;
      });
      prefetchedTimers.current.delete(id);
    }, prefetchedMilliseconds));
  }, []);

  useEffect(() => () => {
    for (const timer of prefetchedTimers.current.values()) clearTimeout(timer);
    prefetchedTimers.current.clear();
  }, []);

  const reset = () => {
    for (const timer of prefetchedTimers.current.values()) clearTimeout(timer);
    prefetchedTimers.current.clear();
    setFired(0);
    setLog([]);
    setPrefetched({});
    // Remounting the targets also clears the engine's per-target trigger lock.
    setGeneration((current) => current + 1);
  };

  return {
    fired,
    log,
    prefetched,
    importance,
    cost,
    generation,
    setImportance,
    setCost,
    recordIntent,
    reset,
  };
};

export { usePredictionConsole };
