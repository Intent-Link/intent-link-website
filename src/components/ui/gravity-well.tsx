"use client";

import { useEffect, useRef } from "react";
import { cn } from "@/utils/class-names";
import { useMediaQuery } from "@/hooks/use-media-query";

/** In-scene labels for the narrated metaphor. Defaults are English. */
interface GravityWellLabels {
  cursor: string;
  target: string;
  arming: string;
  armed: string;
}

/** Grounding caption beneath the canvas (real text — accessible). */
interface GravityWellCaption {
  lead: string;
  body: string;
}

interface GravityWellProps {
  /** Well depth as a fraction of the plate scale. */
  depth?: number;
  /** Strength of the pull toward the well's centre. */
  gravity?: number;
  /** Draw the fading comet trail behind the marker. */
  trail?: boolean;
  labels?: GravityWellLabels;
  caption?: GravityWellCaption;
  className?: string;
}

const defaultLabels: GravityWellLabels = {
  cursor: "cursor",
  target: "target",
  arming: "arming",
  armed: "armed → prefetch",
};

const defaultCaption: GravityWellCaption = {
  lead: "Your links have gravity.",
  body: "Motion falls toward a target, it arms, and the page is prefetched before the click.",
};

/** Simplified drop-in defaults — the well "just works" with no configuration. */
const defaultDepth = 0.38;
const defaultGravity = 1.2;

/** Grid coordinates → screen: a flat isometric projection (0.866 / 0.5 axes). */
const isoX = 0.866;
const isoY = 0.5;
/** Well profile constant: σ² in grid units for `depth·σ²/(r²+σ²)`. */
const sigmaSquared = 0.09;
/** Deformed plate: `gridDivisions²` cells spanning ±`plateExtent` in each axis. */
const gridDivisions = 44;
const plateExtent = 1.08;
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
 * Arming phases keyed off the marker's grid radius, with hysteresis so the
 * label doesn't flicker on the boundary. The dashed "capture basin" is drawn
 * at `armedRadius`; crossing it locks the target and fires a prefetch pulse.
 */
const armedRadius = 0.2;
const armedRelease = 0.34;
const armingEnter = 0.55;
const armingRelease = 0.62;
const pulseDurationMs = 720;
/**
 * Slack left around the projected plate when fitting it to the container.
 * Tight so the well fills its column rather than floating in whitespace; the
 * height factor also budgets for the downward depth of the well.
 */
const widthFitMargin = 1.02;
const heightFitMargin = 1.45;
const accent = "0,102,255";

type ArmPhase = "watching" | "arming" | "armed";

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
  phase: ArmPhase;
  pulseStart: number;
  scale: number;
  centerX: number;
  centerY: number;
  width: number;
  height: number;
}

/** Well height at grid radius `r`, given depth `d` (in pixels) — a Lorentzian dip. */
const wellHeight = (r: number, depth: number): number => (depth * sigmaSquared) / (r * r + sigmaSquared);

/**
 * Gravity Well — an interactive isometric field that dips toward a single low
 * point, and narrates intent-link's metaphor as it runs. A marker (the cursor's
 * motion) springs toward the pointer but is drawn "downhill" into a target's
 * well; as it crosses the capture basin the target steps watching → arming →
 * armed and fires a prefetch pulse. Left alone it spirals back in, replaying the
 * whole story on a loop. Canvas-only, self-contained, no configuration.
 */
const GravityWell = ({
  depth = defaultDepth,
  gravity = defaultGravity,
  trail = true,
  labels = defaultLabels,
  caption = defaultCaption,
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

    const state: SimulationState = {
      position: { u: -0.95, v: -0.95 },
      velocity: { u: 0, v: 0 },
      pointer: null,
      lastInputTime: 0,
      trail: [],
      phase: "watching",
      pulseStart: -1,
      scale: 0,
      centerX: 0,
      centerY: 0,
      width: 0,
      height: 0,
    };

    const layout = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      state.width = wrap.clientWidth;
      state.height = wrap.clientHeight;
      canvas.width = state.width * dpr;
      canvas.height = state.height * dpr;
      context.setTransform(dpr, 0, 0, dpr, 0, 0);
      // Fit the full projected footprint (±plateExtent per axis) with a margin.
      const fitByWidth = state.width / (4 * plateExtent * isoX * widthFitMargin);
      const fitByHeight = state.height / (4 * plateExtent * isoY * heightFitMargin);
      state.scale = Math.min(fitByWidth, fitByHeight);
      state.centerX = state.width / 2;
      state.centerY = state.height * 0.4;
    };

    const project = (u: number, v: number, z: number) => ({
      x: state.centerX + (u - v) * isoX * state.scale,
      y: state.centerY + (u + v) * isoY * state.scale + z,
    });

    const unproject = (x: number, y: number): Vec => {
      const a = (x - state.centerX) / (isoX * state.scale);
      const b = (y - state.centerY) / (isoY * state.scale);
      return {
        u: Math.max(-1.05, Math.min(1.05, (b + a) / 2)),
        v: Math.max(-1.05, Math.min(1.05, (b - a) / 2)),
      };
    };

    const onPointer = (event: PointerEvent) => {
      const rect = canvas.getBoundingClientRect();
      state.pointer = { x: event.clientX - rect.left, y: event.clientY - rect.top };
      state.lastInputTime = performance.now();
    };

    /** Advance the arming phase from the marker radius, with hysteresis. */
    const updatePhase = (radius: number, now: number) => {
      const previous = state.phase;
      if (state.phase === "armed") {
        if (radius > armedRelease) state.phase = "arming";
      } else if (state.phase === "arming") {
        if (radius < armedRadius) state.phase = "armed";
        else if (radius > armingRelease) state.phase = "watching";
      } else if (radius < armingEnter) {
        state.phase = "arming";
      }
      if (state.phase === "armed" && previous !== "armed") state.pulseStart = now;
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

      updatePhase(markerRadius, now);

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
      const armed = state.phase === "armed";
      const arming = state.phase === "arming";
      context.clearRect(0, 0, state.width, state.height);

      const lineIndex: number[] = [];
      for (let i = 0; i <= gridDivisions; i++) lineIndex.push(-plateExtent + (2 * plateExtent * i) / gridDivisions);

      context.lineWidth = 1;
      context.strokeStyle = "rgba(11,18,32,0.13)";
      for (let pass = 0; pass < 2; pass++) {
        for (let i = 0; i <= gridDivisions; i++) {
          context.beginPath();
          for (let j = 0; j <= gridDivisions; j++) {
            const u = pass === 0 ? lineIndex[j] : lineIndex[i];
            const v = pass === 0 ? lineIndex[i] : lineIndex[j];
            let z = wellHeight(Math.hypot(u, v), depthPx);
            const dentDistance = Math.hypot(u - state.position.u, v - state.position.v);
            z += state.scale * 0.05 * Math.exp(-(dentDistance * dentDistance) / 0.018);
            const point = project(u, v, z);
            if (j === 0) context.moveTo(point.x, point.y);
            else context.lineTo(point.x, point.y);
          }
          context.stroke();
        }
      }

      // Plate edge.
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

      // Glow pooled at the bottom of the well — brightens as the target locks.
      const glow = project(0, 0, depthPx * 0.8);
      const glowStrength = armed ? 0.82 : arming ? 0.66 : 0.55;
      const glowGradient = context.createRadialGradient(glow.x, glow.y, 0, glow.x, glow.y, state.scale * 0.85);
      glowGradient.addColorStop(0, `rgba(${accent},${glowStrength})`);
      glowGradient.addColorStop(0.45, `rgba(${accent},${glowStrength * 0.32})`);
      glowGradient.addColorStop(1, `rgba(${accent},0)`);
      context.globalCompositeOperation = "multiply";
      context.fillStyle = glowGradient;
      context.fillRect(glow.x - state.scale, glow.y - state.scale, state.scale * 2, state.scale * 2);
      context.globalCompositeOperation = "source-over";

      // Capture basin — the dashed ring the marker must cross to arm the target.
      const floor = project(0, 0, depthPx);
      context.setLineDash([3, 4]);
      context.lineWidth = 1;
      context.strokeStyle = `rgba(${accent},${arming || armed ? 0.5 : 0.3})`;
      context.beginPath();
      const basinZ = wellHeight(armedRadius, depthPx);
      for (let i = 0; i <= 56; i++) {
        const angle = (i / 56) * Math.PI * 2;
        const point = project(armedRadius * Math.cos(angle), armedRadius * Math.sin(angle), basinZ);
        if (i === 0) context.moveTo(point.x, point.y);
        else context.lineTo(point.x, point.y);
      }
      context.closePath();
      context.stroke();
      context.setLineDash([]);

      // Prefetch pulse — one expanding ring on the watching/arming → armed lock.
      if (state.pulseStart >= 0) {
        const progress = (performance.now() - state.pulseStart) / pulseDurationMs;
        if (progress <= 1) {
          context.strokeStyle = `rgba(${accent},${(1 - progress) * 0.55})`;
          context.lineWidth = 2 * (1 - progress) + 0.5;
          context.beginPath();
          context.arc(floor.x, floor.y, 9 + progress * 52, 0, Math.PI * 2);
          context.stroke();
        }
      }

      // Target beacon at the well floor + its live state label.
      context.fillStyle = `rgba(${accent},${armed ? 0.9 : 0.5})`;
      context.beginPath();
      context.arc(floor.x, floor.y, 3, 0, Math.PI * 2);
      context.fill();
      const targetText = armed ? label.armed : arming ? label.arming : label.target;
      drawTag(floor.x, floor.y + 20, targetText, armed ? 0.95 : arming ? 0.82 : 0.62, armed);

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
      // Settle the marker inside the basin so the "armed" story reads at a glance.
      state.position = { u: 0.12, v: 0.08 };
      state.phase = "armed";
      state.pulseStart = -1;
      const markerZ = wellHeight(Math.hypot(state.position.u, state.position.v), state.scale * depth);
      render(project(state.position.u, state.position.v, markerZ));
    };

    const observer = new ResizeObserver(() => {
      layout();
      if (reducedMotion) renderStill();
    });
    observer.observe(wrap);
    layout();

    if (reducedMotion) {
      renderStill();
    } else {
      canvas.addEventListener("pointermove", onPointer);
      canvas.addEventListener("pointerdown", onPointer);
      raf = requestAnimationFrame(frame);
    }

    return () => {
      observer.disconnect();
      cancelAnimationFrame(raf);
      canvas.removeEventListener("pointermove", onPointer);
      canvas.removeEventListener("pointerdown", onPointer);
    };
  }, [depth, gravity, trail, reducedMotion]);

  return (
    <div className={cn("flex w-full flex-col h-[400px] sm:h-[460px] lg:h-[500px]", className)}>
      <div ref={wrapRef} aria-hidden className="relative min-h-0 w-full flex-1 overflow-hidden">
        <canvas ref={canvasRef} className="absolute inset-0 block h-full w-full [touch-action:none]" />
      </div>
      <p className="mt-2 px-4 text-center font-mono text-[12px] leading-[1.5] text-ink-3">
        <span className="font-semibold text-ink-2">{caption.lead}</span> {caption.body}
      </p>
    </div>
  );
};

export { GravityWell };
