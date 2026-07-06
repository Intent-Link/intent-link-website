"use client";

import { useEffect, useRef, useState } from "react";

/** Phases each race panel cycles through. Const map + derived union. */
const racePhase = {
  idle: "idle",
  loading: "loading",
  done: "done",
} as const;

type RacePhase = (typeof racePhase)[keyof typeof racePhase];

/** Arm status of the "with intent-link" panel. Const map + derived union. */
const armStatus = {
  idle: "idle",
  prefetching: "prefetching",
  ready: "ready",
} as const;

type ArmStatus = (typeof armStatus)[keyof typeof armStatus];

interface UseLatencyRaceInfo {
  without: RacePhase;
  withIntent: RacePhase;
  withStatus: ArmStatus;
  /** Measured load time (ms) for each panel in the current/last race. */
  withoutMs: number;
  withMs: number;
  timeSaved: number;
  running: boolean;
  /** Call on pointer-approach of the "with" panel to prefetch it. */
  arm: () => void;
  run: () => void;
  reset: () => void;
}

/**
 * State machine for the latency-race section: two panels (without / with
 * intent-link) cycling idle → loading → done, plus a cumulative time-saved
 * counter. The "with" panel arms on approach so the race feels instant.
 * Ported from the prototype's `armWith`/`runRace`/`resetRace`.
 */
const useLatencyRace = (): UseLatencyRaceInfo => {
  const [without, setWithout] = useState<RacePhase>(racePhase.idle);
  const [withIntent, setWithIntent] = useState<RacePhase>(racePhase.idle);
  const [withStatus, setWithStatus] = useState<ArmStatus>(armStatus.idle);
  const [withoutMs, setWithoutMs] = useState(0);
  const [withMs, setWithMs] = useState(0);
  const [timeSaved, setTimeSaved] = useState(0);
  const [running, setRunning] = useState(false);

  const armTimer = useRef<ReturnType<typeof setTimeout>>(undefined);
  const withTimer = useRef<ReturnType<typeof setTimeout>>(undefined);
  const withoutTimer = useRef<ReturnType<typeof setTimeout>>(undefined);

  const arm = () => {
    setWithStatus((status) => {
      if (status !== armStatus.idle) return status;
      clearTimeout(armTimer.current);
      armTimer.current = setTimeout(() => setWithStatus(armStatus.ready), 200);
      return armStatus.prefetching;
    });
  };

  const reset = () => {
    clearTimeout(withTimer.current);
    clearTimeout(withoutTimer.current);
    setWithout(racePhase.idle);
    setWithIntent(racePhase.idle);
    setRunning(false);
    // keep withStatus — once prefetched, the page stays ready across replays.
  };

  const run = () => {
    if (running) return;

    const armed = withStatus === armStatus.ready || withStatus === armStatus.prefetching;
    const withoutTime = Math.round(300 + Math.random() * 500);
    const withTime = armed ? Math.round(8 + Math.random() * 32) : withoutTime;

    setWithoutMs(withoutTime);
    setWithMs(withTime);
    setRunning(true);
    setWithout(racePhase.loading);
    setWithIntent(racePhase.loading);

    clearTimeout(withTimer.current);
    clearTimeout(withoutTimer.current);
    withTimer.current = setTimeout(() => setWithIntent(racePhase.done), withTime);
    withoutTimer.current = setTimeout(() => {
      setWithout(racePhase.done);
      setRunning(false);
      setTimeSaved((saved) => saved + Math.max(0, withoutTime - withTime));
    }, withoutTime);
  };

  useEffect(() => {
    return () => {
      clearTimeout(armTimer.current);
      clearTimeout(withTimer.current);
      clearTimeout(withoutTimer.current);
    };
  }, []);

  return { without, withIntent, withStatus, withoutMs, withMs, timeSaved, running, arm, run, reset };
};

export { racePhase, armStatus, useLatencyRace };
export type { RacePhase };
