"use client";

import { useEffect, useRef } from "react";
import { cn } from "@/utils/class-names";
import { useMediaQuery } from "@/hooks/use-media-query";

/** In-scene labels for the narrated metaphor. Defaults are English. */
interface GravityWellLabels {
  cursor: string;
  target: string;
  detected: string;
}

interface GravityWellProps {
  /** Well depth as a fraction of the plate scale. */
  depth?: number;
  /** Strength of the pull toward the well's centre. */
  gravity?: number;
  /** Draw the fading comet trail behind the marker. */
  trail?: boolean;
  labels?: GravityWellLabels;
  caption?: string;
  /** Expand the projected grid across its containing section instead of drawing a finite plate. */
  fullField?: boolean;
  className?: string;
}

const defaultLabels: GravityWellLabels = {
  cursor: "cursor",
  target: "target",
  detected: "Intent Detected",
};

const defaultCaption = "pixels have gravity";

/** Simplified drop-in defaults — the well "just works" with no configuration. */
const defaultDepth = 0.38;
const defaultGravity = 1.2;

/** Grid coordinates → screen: a flat isometric projection (0.866 / 0.5 axes). */
const isoX = 0.866;
const isoY = 0.5;
/** Well profile constant: σ² in grid units for `depth·σ²/(r²+σ²)`. */
const sigmaSquared = 0.09;
/** Manifold-aligned singularity colour: peak opacity and Gaussian sigma. */
const singularityGradientSaturation = 0.30;
const singularityGradientExtent = 0.40;
/** Deformed plate: `gridDivisions²` cells spanning ±`plateExtent` in each axis. */
const gridDivisions = 44;
const plateExtent = 1.08;
/** Cell spacing for the larger, section-wide diagonal field. */
const fullFieldGridStep = 0.16;
/** Spring-damper that chases the pointer; gravity is layered on top. */
const springStiffness = 13;
const springDamping = 6.5;
/** Marker trail: max points, and how far the well's floor a settled marker rests. */
const trailMaxPoints = 110;
/** Idle after this long without input → the marker resumes its slow spiral. */
const idleAfterMs = 4000;
/** How much of the idle field the resting spiral sweeps, and how long one loop takes. */
const idleSpiralRadius = 1.05;
const idleSpiralPeriodMs = 13000;
/**
 * Intent detection is keyed off the marker's grid radius, with hysteresis so
 * the label does not flicker on the boundary.
 */
const detectionEnter = 0.55;
const detectionRelease = 0.62;
/** Keep the caption locked to the visible target rather than to the viewport. */
const targetMarkerFloorRatio = 0.92;
const captionDistanceFromTargetPx = 225;
const mobileCaptionDistanceFromTargetPx = 105;
const tabletCaptionLeftOffsetPx = 440;
const tabletCaptionUpOffsetPx = 40;
/** Two quiet decorative orbits around the target; independent of cursor physics. */
const targetOrbits = [
  { fieldRadius: 0.85, periodMs: 7200, phase: 0.08 },
  { fieldRadius: 1.3, periodMs: 10400, phase: 0.58 },
] as const;
/**
 * Slack left around the projected plate when fitting it to the container.
 * Tight so the well fills its column rather than floating in whitespace; the
 * height factor also budgets for the downward depth of the well.
 */
const widthFitMargin = 1.02;
const heightFitMargin = 1.45;
const accent = "0,102,255";

type DetectionPhase = "watching" | "detected";

interface Vec {
  u: number;
  v: number;
}

interface SimulationState {
  position: Vec;
  velocity: Vec;
  pointer: { x: number; y: number } | null;
  lastInputTime: number;
  trail: { x: number; y: number }[];
  phase: DetectionPhase;
  scale: number;
  centerX: number;
  centerY: number;
  width: number;
  height: number;
  fieldExtent: number;
}

/** Well height at grid radius `r`, given depth `d` (in pixels) — a Lorentzian dip. */
const wellHeight = (r: number, depth: number): number => (depth * sigmaSquared) / (r * r + sigmaSquared);

/**
 * Gravity Well — an interactive isometric field that dips toward a single low
 * point, and narrates intent-link's metaphor as it runs. A marker (the cursor's
 * motion) springs toward the pointer but is drawn "downhill" into a target's
 * well; as it enters the target region the field reports that intent has been
 * detected. Left alone it spirals back in, replaying the whole story on a loop.
 * Canvas-only, self-contained, no configuration.
 */
const GravityWell = ({
  depth = defaultDepth,
  gravity = defaultGravity,
  trail = true,
  labels = defaultLabels,
  caption = defaultCaption,
  fullField = false,
  className,
}: GravityWellProps) => {
  const wrapRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const reducedMotion = useMediaQuery("(prefers-reduced-motion: reduce)");
  // Keep the latest labels in a ref so the canvas loop reads current copy
  // without re-subscribing the effect on every render.
  const labelsRef = useRef(labels);
  useEffect(() => {
    labelsRef.current = labels;
  }, [labels]);

  useEffect(() => {
    const wrap = wrapRef.current;
    const canvas = canvasRef.current;
    const context = canvas?.getContext("2d");
    if (!wrap || !canvas || !context) return;
    const surfaceCanvas = document.createElement("canvas");
    const surfaceContext = surfaceCanvas.getContext("2d");
    if (!surfaceContext) return;

    const state: SimulationState = {
      position: { u: -0.95, v: -0.95 },
      velocity: { u: 0, v: 0 },
      pointer: null,
      lastInputTime: 0,
      trail: [],
      phase: "watching",
      scale: 0,
      centerX: 0,
      centerY: 0,
      width: 0,
      height: 0,
      fieldExtent: plateExtent,
    };

    const layout = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      state.width = wrap.clientWidth;
      state.height = wrap.clientHeight;
      canvas.width = state.width * dpr;
      canvas.height = state.height * dpr;
      surfaceCanvas.width = state.width * dpr;
      surfaceCanvas.height = state.height * dpr;
      context.setTransform(dpr, 0, 0, dpr, 0, 0);
      surfaceContext.setTransform(dpr, 0, 0, dpr, 0, 0);
      if (fullField) {
        // Keep a consistent visual cell size and anchor the well in the right-hand
        // side of the hero. The field extent is derived from the furthest corner,
        // so diagonal lines always continue beyond the section bounds.
        const mobile = state.width <= 800;
        const tablet = state.width > 800 && state.width <= 1024;
        state.scale = mobile
          ? Math.max(90, Math.min(120, state.width * 0.18))
          : Math.max(140, Math.min(190, state.width * 0.09));
        state.centerX = state.width * (mobile ? 0.5 : 0.72);
        if (mobile) {
          if (state.width < 500) {
            // The narrowest layout keeps the previous breathing room and moves
            // the well slightly lower beneath the heavily wrapped content.
            state.centerY = 835 + (500 - state.width) * 0.15;
          } else {
            // Mid-sized mobile has enough horizontal room for a tighter stack.
            state.centerY = 720 + (800 - state.width) * 0.1;
          }
        } else if (tablet) {
          // Preserve the tablet well position even though the hero now ends
          // closer beneath it.
          state.centerY = 690;
        } else {
          state.centerY = state.height * 0.43;
        }
        const targetY = state.centerY + state.scale * depth * targetMarkerFloorRatio;
        const captionX = tablet
          ? state.centerX - tabletCaptionLeftOffsetPx
          : state.centerX;
        const captionY = tablet
          ? targetY - tabletCaptionUpOffsetPx
          : targetY + (mobile
            ? mobileCaptionDistanceFromTargetPx
            : captionDistanceFromTargetPx);
        wrap.style.setProperty(
          "--gravity-caption-x",
          `${captionX}px`,
        );
        wrap.style.setProperty(
          "--gravity-caption-y",
          `${captionY}px`,
        );
        const corners = [
          [0, 0],
          [state.width, 0],
          [state.width, state.height],
          [0, state.height],
        ];
        state.fieldExtent = Math.max(...corners.flatMap(([x, y]) => {
          const a = (x - state.centerX) / (isoX * state.scale);
          const b = (y - state.centerY) / (isoY * state.scale);
          return [Math.abs((b + a) / 2), Math.abs((b - a) / 2)];
        })) + 1;
      } else {
        // Fit the full projected footprint (±plateExtent per axis) with a margin.
        const fitByWidth = state.width / (4 * plateExtent * isoX * widthFitMargin);
        const fitByHeight = state.height / (4 * plateExtent * isoY * heightFitMargin);
        state.scale = Math.min(fitByWidth, fitByHeight);
        state.centerX = state.width / 2;
        state.centerY = state.height * 0.4;
        state.fieldExtent = plateExtent;
      }
    };

    const project = (u: number, v: number, z: number) => ({
      x: state.centerX + (u - v) * isoX * state.scale,
      y: state.centerY + (u + v) * isoY * state.scale + z,
    });

    /**
     * Build smooth potential contours once per layout. Closely spaced projected
     * rings preserve the well's physical shape. Every contour is preblended
     * directly against paper, making saturation linear and avoiding translucent
     * overlap buildup, flat cell patches, or a generic radial blur.
     */
    const buildSurface = () => {
      surfaceContext.clearRect(0, 0, state.width, state.height);
      const gradientRadius = Math.min(
        singularityGradientExtent * 4,
        fullField ? state.fieldExtent : plateExtent,
      );
      const depthPx = state.scale * depth;
      const ringCount = fullField ? 480 : 280;
      const ringSegments = fullField ? 128 : 96;

      for (let ring = ringCount; ring >= 1; ring--) {
        const radius = (gradientRadius * ring) / ringCount;
        // Gaussian distance is measured in field coordinates, then projected
        // onto the deformed surface by the contour geometry below.
        const gaussian = Math.exp(
          -(radius * radius)
          / (2 * singularityGradientExtent * singularityGradientExtent),
        );
        const intensity = singularityGradientSaturation * gaussian;
        const red = 255 * (1 - intensity);
        const green = 255 - 200 * intensity;

        const height = wellHeight(radius, depthPx);
        surfaceContext.fillStyle = `rgb(${red.toFixed(2)},${green.toFixed(2)},255)`;
        surfaceContext.beginPath();
        for (let segment = 0; segment <= ringSegments; segment++) {
          const angle = (segment / ringSegments) * Math.PI * 2;
          const point = project(radius * Math.cos(angle), radius * Math.sin(angle), height);
          if (segment === 0) surfaceContext.moveTo(point.x, point.y);
          else surfaceContext.lineTo(point.x, point.y);
        }
        surfaceContext.closePath();
        surfaceContext.fill();
      }
    };

    const unproject = (x: number, y: number): Vec => {
      const a = (x - state.centerX) / (isoX * state.scale);
      const b = (y - state.centerY) / (isoY * state.scale);
      const limit = fullField ? state.fieldExtent * 0.92 : 1.05;
      return {
        u: Math.max(-limit, Math.min(limit, (b + a) / 2)),
        v: Math.max(-limit, Math.min(limit, (b - a) / 2)),
      };
    };

    const onPointer = (event: PointerEvent) => {
      const rect = canvas.getBoundingClientRect();
      if (
        fullField
        && (event.clientX < rect.left
          || event.clientX > rect.right
          || event.clientY < rect.top
          || event.clientY > rect.bottom)
      ) return;
      state.pointer = { x: event.clientX - rect.left, y: event.clientY - rect.top };
      state.lastInputTime = performance.now();
    };

    /** Toggle the single detected state from marker radius, with hysteresis. */
    const updatePhase = (radius: number) => {
      if (state.phase === "detected") {
        if (radius > detectionRelease) state.phase = "watching";
      } else if (radius < detectionEnter) {
        state.phase = "detected";
      }
    };

    const step = (now: number) => {
      const dt = 1 / 60;
      const depthPx = state.scale * depth;

      // Target: the live pointer, or a slow inward spiral when idle.
      let target: Vec;
      const idle = !state.pointer || now - state.lastInputTime > idleAfterMs;
      if (idle) {
        const phase = (now / idleSpiralPeriodMs) % 1;
        const ease = phase < 0.85 ? phase / 0.85 : 1;
        const radius = idleSpiralRadius * (1 - ease * ease);
        const angle = -0.8 + ease * Math.PI * 2.4;
        target = { u: radius * Math.cos(angle), v: radius * Math.sin(angle) };
      } else {
        target = unproject(state.pointer!.x, state.pointer!.y);
      }

      // Gravity toward the centre — weakens as the target steers away, so the
      // marker can always escape the well by following the cursor outward.
      const r = Math.hypot(state.position.u, state.position.v);
      const targetRadius = Math.hypot(target.u, target.v);
      const escape = Math.exp(-Math.max(0, targetRadius - 0.25) * 4);
      const pull =
        Math.min((9 * gravity * sigmaSquared * r) / Math.pow(r * r + sigmaSquared, 2), 5.5) * escape;
      const pullU = r > 1e-4 ? (-state.position.u / r) * pull : 0;
      const pullV = r > 1e-4 ? (-state.position.v / r) * pull : 0;

      const accelU = (target.u - state.position.u) * springStiffness - state.velocity.u * springDamping + pullU;
      const accelV = (target.v - state.position.v) * springStiffness - state.velocity.v * springDamping + pullV;
      state.velocity.u += accelU * dt;
      state.velocity.v += accelV * dt;
      state.position.u += state.velocity.u * dt;
      state.position.v += state.velocity.v * dt;

      // Marker rides the well surface, above the small dent it presses into the grid.
      const markerRadius = Math.hypot(state.position.u, state.position.v);
      const markerZ = wellHeight(markerRadius, depthPx);
      const markerPoint = project(state.position.u, state.position.v, markerZ);

      updatePhase(markerRadius);

      if (trail) {
        state.trail.push({
          x: markerPoint.x + (Math.random() - 0.5) * 2.4,
          y: markerPoint.y + (Math.random() - 0.5) * 2.4,
        });
        if (state.trail.length > trailMaxPoints) state.trail.shift();
      } else if (state.trail.length) {
        state.trail.length = 0;
      }

      return markerPoint;
    };

    /** A small pill-backed monospace tag centred on (x, y). */
    const drawTag = (x: number, y: number, text: string, alpha: number, bold: boolean) => {
      context.font = `${bold ? 600 : 500} 11px "IBM Plex Mono", ui-monospace, monospace`;
      context.textAlign = "center";
      context.textBaseline = "middle";
      const width = context.measureText(text).width;
      context.fillStyle = `rgba(255,255,255,${0.72 * alpha})`;
      context.beginPath();
      context.roundRect(x - width / 2 - 7, y - 9.5, width + 14, 19, 6);
      context.fill();
      context.fillStyle = `rgba(${accent},${alpha})`;
      context.fillText(text, x, y + 0.5);
    };

    const render = (markerPoint: { x: number; y: number }) => {
      const depthPx = state.scale * depth;
      const label = labelsRef.current;
      const detected = state.phase === "detected";
      context.clearRect(0, 0, state.width, state.height);
      context.drawImage(surfaceCanvas, 0, 0, state.width, state.height);

      const lineIndex: number[] = [];
      if (fullField) {
        const lineCount = Math.ceil((state.fieldExtent * 2) / fullFieldGridStep);
        const start = -(lineCount * fullFieldGridStep) / 2;
        for (let i = 0; i <= lineCount; i++) lineIndex.push(start + i * fullFieldGridStep);
      } else {
        for (let i = 0; i <= gridDivisions; i++) {
          lineIndex.push(-plateExtent + (2 * plateExtent * i) / gridDivisions);
        }
      }

      context.lineWidth = 1;
      context.strokeStyle = fullField ? "rgba(0,102,255,0.13)" : "rgba(11,18,32,0.13)";
      for (let pass = 0; pass < 2; pass++) {
        for (let i = 0; i < lineIndex.length; i++) {
          const fixedCoordinate = lineIndex[i];
          const pointOnLine = (variableCoordinate: number) => {
            const u = pass === 0 ? variableCoordinate : fixedCoordinate;
            const v = pass === 0 ? fixedCoordinate : variableCoordinate;
            let z = wellHeight(Math.hypot(u, v), depthPx);
            const dentDistance = Math.hypot(u - state.position.u, v - state.position.v);
            const dentDepth = fullField ? 0.1 : 0.05;
            const dentSpread = fullField ? 0.045 : 0.018;
            z += state.scale * dentDepth * Math.exp(-(dentDistance * dentDistance) / dentSpread);
            return project(u, v, z);
          };

          context.beginPath();
          const firstPoint = pointOnLine(lineIndex[0]);
          context.moveTo(firstPoint.x, firstPoint.y);
          for (let j = 0; j < lineIndex.length - 1; j++) {
            const start = lineIndex[j];
            const end = lineIndex[j + 1];
            const midpoint = (start + end) / 2;
            const midpointU = pass === 0 ? midpoint : fixedCoordinate;
            const midpointV = pass === 0 ? fixedCoordinate : midpoint;
            const nearWell = Math.hypot(midpointU, midpointV) < 1.35;
            const nearCursor = Math.hypot(
              midpointU - state.position.u,
              midpointV - state.position.v,
            ) < 0.65;
            const subdivisions = nearWell || nearCursor ? 5 : 1;

            for (let subdivision = 1; subdivision <= subdivisions; subdivision++) {
              const coordinate = start + ((end - start) * subdivision) / subdivisions;
              const point = pointOnLine(coordinate);
              context.lineTo(point.x, point.y);
            }
          }
          context.stroke();
        }
      }

      if (!fullField) {
        // Plate edge for the standalone finite-field presentation.
        context.strokeStyle = "rgba(11,18,32,0.22)";
        context.beginPath();
        const corners = [
          [-plateExtent, -plateExtent],
          [plateExtent, -plateExtent],
          [plateExtent, plateExtent],
          [-plateExtent, plateExtent],
        ];
        corners.forEach((corner, i) => {
          const point = project(corner[0], corner[1], wellHeight(Math.hypot(corner[0], corner[1]), depthPx));
          if (i === 0) context.moveTo(point.x, point.y);
          else context.lineTo(point.x, point.y);
        });
        context.closePath();
        context.stroke();
      }

      // Two decorative target orbits. They share no state with the live cursor.
      const orbitTime = performance.now();
      for (const orbit of targetOrbits) {
        // A constant-radius circle in field coordinates projects to this
        // horizontal ellipse. Its vertical centre follows the well surface,
        // keeping each track aligned with the distortion and colour contours.
        const orbitCenter = project(
          0,
          0,
          wellHeight(orbit.fieldRadius, depthPx),
        );
        const radiusX = state.scale * orbit.fieldRadius * isoX * Math.SQRT2;
        const radiusY = state.scale * orbit.fieldRadius * isoY * Math.SQRT2;
        context.strokeStyle = `rgba(${accent},0.2)`;
        context.lineWidth = 1;
        context.beginPath();
        context.ellipse(
          orbitCenter.x,
          orbitCenter.y,
          radiusX,
          radiusY,
          0,
          0,
          Math.PI * 2,
        );
        context.stroke();

        const angle = ((orbitTime / orbit.periodMs) + orbit.phase) * Math.PI * 2;
        const dotX = orbitCenter.x + radiusX * Math.cos(angle);
        const dotY = orbitCenter.y + radiusY * Math.sin(angle);
        const orbitHalo = context.createRadialGradient(dotX, dotY, 0, dotX, dotY, 12);
        orbitHalo.addColorStop(0, `rgba(${accent},0.35)`);
        orbitHalo.addColorStop(1, `rgba(${accent},0)`);
        context.fillStyle = orbitHalo;
        context.beginPath();
        context.arc(dotX, dotY, 12, 0, Math.PI * 2);
        context.fill();
        context.fillStyle = "#0066FF";
        context.beginPath();
        context.arc(dotX, dotY, 3.8, 0, Math.PI * 2);
        context.fill();
        context.strokeStyle = "#ffffff";
        context.lineWidth = 1.35;
        context.stroke();
      }

      // Lift the beacon slightly onto the visible floor so the side-on
      // projection reads as an embedded singularity rather than a detached dot.
      const targetPoint = project(0, 0, depthPx * targetMarkerFloorRatio);
      context.fillStyle = "#000000";
      context.beginPath();
      context.arc(targetPoint.x, targetPoint.y, 3.5, 0, Math.PI * 2);
      context.fill();
      const targetText = detected ? label.detected : label.target;
      drawTag(targetPoint.x, targetPoint.y + 20, targetText, detected ? 0.95 : 0.62, detected);

      // Fading marker trail.
      for (let i = 1; i < state.trail.length; i++) {
        const fraction = i / state.trail.length;
        context.strokeStyle = `rgba(${accent},${(fraction * 0.75).toFixed(3)})`;
        context.lineWidth = 1 + fraction * 1.4;
        context.beginPath();
        context.moveTo(state.trail[i - 1].x, state.trail[i - 1].y);
        context.lineTo(state.trail[i].x, state.trail[i].y);
        context.stroke();
      }

      // Marker halo + dot.
      const halo = context.createRadialGradient(markerPoint.x, markerPoint.y, 0, markerPoint.x, markerPoint.y, 16);
      halo.addColorStop(0, `rgba(${accent},0.45)`);
      halo.addColorStop(1, `rgba(${accent},0)`);
      context.fillStyle = halo;
      context.beginPath();
      context.arc(markerPoint.x, markerPoint.y, 16, 0, Math.PI * 2);
      context.fill();

      context.fillStyle = "#0066FF";
      context.beginPath();
      context.arc(markerPoint.x, markerPoint.y, 4.5, 0, Math.PI * 2);
      context.fill();
      context.strokeStyle = "#ffffff";
      context.lineWidth = 1.5;
      context.beginPath();
      context.arc(markerPoint.x, markerPoint.y, 4.5, 0, Math.PI * 2);
      context.stroke();

      // The marker carries a quiet "cursor" tag — that dot is the user's motion.
      drawTag(markerPoint.x, markerPoint.y - 18, label.cursor, 0.72, false);
    };

    let raf = 0;
    const frame = () => {
      if (state.scale) {
        render(step(performance.now()));
      }
      raf = requestAnimationFrame(frame);
    };

    const renderStill = () => {
      if (!state.scale) return;
      // Settle the marker close enough that the detected state reads at a glance.
      state.position = { u: 0.12, v: 0.08 };
      state.phase = "detected";
      const markerZ = wellHeight(Math.hypot(state.position.u, state.position.v), state.scale * depth);
      render(project(state.position.u, state.position.v, markerZ));
    };

    const observer = new ResizeObserver(() => {
      layout();
      buildSurface();
      if (reducedMotion) renderStill();
    });
    observer.observe(wrap);
    layout();
    buildSurface();

    if (reducedMotion) {
      renderStill();
    } else {
      const pointerSurface: Window | HTMLCanvasElement = fullField ? window : canvas;
      pointerSurface.addEventListener("pointermove", onPointer as EventListener);
      pointerSurface.addEventListener("pointerdown", onPointer as EventListener);
      raf = requestAnimationFrame(frame);
    }

    return () => {
      observer.disconnect();
      cancelAnimationFrame(raf);
      const pointerSurface: Window | HTMLCanvasElement = fullField ? window : canvas;
      pointerSurface.removeEventListener("pointermove", onPointer as EventListener);
      pointerSurface.removeEventListener("pointerdown", onPointer as EventListener);
    };
  }, [depth, gravity, trail, reducedMotion, fullField]);

  if (fullField) {
    return (
      <div
        ref={wrapRef}
        className={cn("pointer-events-none absolute inset-0 h-full w-full overflow-hidden", className)}
      >
        <canvas ref={canvasRef} aria-hidden className="absolute inset-0 block h-full w-full" />
        <p className="absolute left-[var(--gravity-caption-x)] top-[var(--gravity-caption-y)] -translate-x-1/2 whitespace-nowrap px-4 text-center font-mono text-[12px] font-semibold leading-[1.5] text-ink-2">
          {caption}
        </p>
      </div>
    );
  }

  return (
    <div className={cn("flex w-full flex-col h-[400px] sm:h-[460px] lg:h-[500px]", className)}>
      <div ref={wrapRef} aria-hidden className="relative min-h-0 w-full flex-1 overflow-hidden">
        <canvas ref={canvasRef} className="absolute inset-0 block h-full w-full [touch-action:none]" />
      </div>
      <p className="mt-2 px-4 text-center font-mono text-[12px] leading-[1.5] text-ink-3">
        {caption}
      </p>
    </div>
  );
};

export { GravityWell };
