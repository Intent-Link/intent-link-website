"use client";

import { useEffect, useRef, type RefObject } from "react";
import {
  filterStep,
  smoothVelocity,
  addSensorNoise,
  projectionCone,
  rawSampleCap,
  trailCap,
  idleMilliseconds,
  type Vec2,
} from "@/utils/kalman";

interface UseKalmanLensInfo {
  canvasRef: RefObject<HTMLCanvasElement | null>;
}

interface LensState {
  raw: Vec2[];
  trail: Vec2[];
  fx: number | null;
  fy: number | null;
  vx: number;
  vy: number;
  lastT: number;
  lastMoveT: number;
  width: number;
  height: number;
}

const createLensState = (): LensState => ({
  raw: [],
  trail: [],
  fx: null,
  fy: null,
  vx: 0,
  vy: 0,
  lastT: 0,
  lastMoveT: 0,
  width: 0,
  height: 0,
});

/**
 * Drives the "Kalman lens" canvas: DPR-aware setup, noisy pointer sampling, a
 * filtered estimate + smoothed velocity (see `@/utils/kalman`), and a rAF draw
 * loop (raw dots · filtered trail · projection cone). All canvas/window access
 * is inside the effect; cleanup is symmetric so StrictMode remounts are clean.
 */
const useKalmanLens = (): UseKalmanLensInfo => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const context = canvas.getContext("2d");
    if (!context) return;

    const lens = createLensState();

    const setup = () => {
      const dpr = Math.min(2, window.devicePixelRatio || 1);
      const width = canvas.clientWidth || 600;
      const height = canvas.clientHeight || 440;
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      context.setTransform(dpr, 0, 0, dpr, 0, 0);
      lens.width = width;
      lens.height = height;
    };

    const onMove = (event: PointerEvent) => {
      const rect = canvas.getBoundingClientRect();
      const x = event.clientX - rect.left;
      const y = event.clientY - rect.top;
      if (x < 0 || y < 0 || x > rect.width || y > rect.height) return;

      const now = performance.now();
      const noisyX = addSensorNoise(x, Math.random());
      const noisyY = addSensorNoise(y, Math.random());
      lens.raw.push({ x: noisyX, y: noisyY });
      if (lens.raw.length > rawSampleCap) lens.raw.shift();

      if (lens.fx === null || lens.fy === null) {
        lens.fx = x;
        lens.fy = y;
      }
      // Clamp below by 1: coarse timers can hand two moves the same timestamp,
      // and a dt of 0 would push Infinity/NaN into the velocity smoothing.
      const dt = lens.lastT ? Math.min(50, Math.max(1, now - lens.lastT)) : 16;
      const oldX = lens.fx;
      const oldY = lens.fy;
      lens.fx = filterStep(lens.fx, noisyX);
      lens.fy = filterStep(lens.fy, noisyY);
      lens.vx = smoothVelocity(lens.vx, (lens.fx - oldX) / (dt / 16));
      lens.vy = smoothVelocity(lens.vy, (lens.fy - oldY) / (dt / 16));

      lens.trail.push({ x: lens.fx, y: lens.fy });
      if (lens.trail.length > trailCap) lens.trail.shift();
      lens.lastT = now;
      lens.lastMoveT = now;
    };

    const draw = () => {
      const now = performance.now();
      context.clearRect(0, 0, lens.width, lens.height);
      const idle = now - lens.lastMoveT > idleMilliseconds;

      context.fillStyle = "rgba(20,30,45,.20)";
      for (const point of lens.raw) {
        context.beginPath();
        context.arc(point.x, point.y, 2.3, 0, 6.29);
        context.fill();
      }

      if (lens.trail.length > 1) {
        context.strokeStyle = "#0066FF";
        context.lineWidth = 2.6;
        context.lineJoin = "round";
        context.lineCap = "round";
        context.beginPath();
        context.moveTo(lens.trail[0].x, lens.trail[0].y);
        for (let index = 1; index < lens.trail.length; index += 1) {
          context.lineTo(lens.trail[index].x, lens.trail[index].y);
        }
        context.stroke();
      }

      if (lens.fx !== null && lens.fy !== null) {
        const apex = { x: lens.fx, y: lens.fy };
        const cone = idle ? null : projectionCone(apex, { x: lens.vx, y: lens.vy });
        if (cone) {
          const gradient = context.createLinearGradient(
            cone.apex.x,
            cone.apex.y,
            cone.center.x,
            cone.center.y,
          );
          gradient.addColorStop(0, "rgba(0,102,255,.26)");
          gradient.addColorStop(1, "rgba(0,102,255,0)");
          context.fillStyle = gradient;
          context.beginPath();
          context.moveTo(cone.apex.x, cone.apex.y);
          context.lineTo(cone.left.x, cone.left.y);
          context.lineTo(cone.right.x, cone.right.y);
          context.closePath();
          context.fill();

          context.strokeStyle = "rgba(0,102,255,.55)";
          context.setLineDash([5, 5]);
          context.lineWidth = 1.5;
          context.beginPath();
          context.moveTo(cone.apex.x, cone.apex.y);
          context.lineTo(cone.center.x, cone.center.y);
          context.stroke();
          context.setLineDash([]);
        }

        context.fillStyle = "#0066FF";
        context.beginPath();
        context.arc(apex.x, apex.y, 4.5, 0, 6.29);
        context.fill();
        context.strokeStyle = "#fff";
        context.lineWidth = 2;
        context.stroke();
      }
    };

    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    setup();

    if (reducedMotion) {
      draw();
      return;
    }

    let rafId = 0;
    const loop = () => {
      draw();
      rafId = requestAnimationFrame(loop);
    };
    rafId = requestAnimationFrame(loop);

    canvas.addEventListener("pointermove", onMove, { passive: true });
    window.addEventListener("resize", setup);

    return () => {
      cancelAnimationFrame(rafId);
      canvas.removeEventListener("pointermove", onMove);
      window.removeEventListener("resize", setup);
    };
  }, []);

  return { canvasRef };
};

export { useKalmanLens };
