"use client";

import { useState } from "react";

/** Phases each race panel cycles through. Const map + derived union. */
const racePhase = {
  idle: "idle",
  loading: "loading",
  done: "done",
} as const;

type RacePhase = (typeof racePhase)[keyof typeof racePhase];

interface UseLatencyRaceInfo {
  without: RacePhase;
  withIntent: RacePhase;
  timeSaved: number;
  run: () => void;
  reset: () => void;
}

/**
 * State machine for the latency-race section: two panels (without / with
 * intent-link) cycling idle → loading → done, plus a cumulative time-saved
 * counter. TODO: port timing logic (armWith/runRace/resetRace).
 */
const useLatencyRace = (): UseLatencyRaceInfo => {
  const [without, setWithout] = useState<RacePhase>(racePhase.idle);
  const [withIntent, setWithIntent] = useState<RacePhase>(racePhase.idle);
  const [timeSaved, setTimeSaved] = useState(0);

  const run = () => {
    // TODO: port runRace()
  };

  const reset = () => {
    setWithout(racePhase.idle);
    setWithIntent(racePhase.idle);
    setTimeSaved(0);
  };

  return { without, withIntent, timeSaved, run, reset };
};

export { racePhase, useLatencyRace };
export type { RacePhase };
