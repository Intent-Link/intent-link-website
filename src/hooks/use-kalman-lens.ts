"use client";

import { useEffect, useRef, type RefObject } from "react";

interface UseKalmanLensInfo {
  canvasRef: RefObject<HTMLCanvasElement | null>;
}

/**
 * Drives the "Kalman lens" canvas: DPR-aware setup, noisy pointer sampling,
 * filtered estimate (gain ~0.26), velocity smoothing, and a rAF draw loop
 * (raw dots · filtered trail · projection cone).
 * TODO: port math from Landing.dc.html (setupLens/lensMove/lensDraw).
 */
const useKalmanLens = (): UseKalmanLensInfo => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    // TODO: setup + rAF loop
    return () => {
      // TODO: cancel rAF, remove listeners
    };
  }, []);

  return { canvasRef };
};

export { useKalmanLens };
