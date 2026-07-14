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
const springStiffness = 28;
const springDamping = 9.5;
/** Marker trail lifetime is time-based so it behaves consistently at every refresh rate. */
const trailLifetimeMs = 700;
/** Enough native-refresh samples for the trail even on very high-refresh displays. */
const trailCapacity = 512;
/** Idle motion keeps the scene alive while it remains visible. */
const idleSpiralRadius = 1.05;
const idleAfterMs = 4000;
const idleSpiralPeriodMs = 9000;
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

interface TrailBuffer {
  x: Float32Array;
  y: Float32Array;
  time: Float64Array;
  start: number;
  length: number;
}

interface Bounds {
  left: number;
  top: number;
  right: number;
  bottom: number;
}

interface OrbitGeometry {
  centerX: number;
  centerY: number;
  radiusX: number;
  radiusY: number;
}

interface SimulationState {
  position: Vec;
  velocity: Vec;
  pointer: { x: number; y: number } | null;
  lastInputTime: number;
  trail: TrailBuffer;
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
  const staticCanvasRef = useRef<HTMLCanvasElement>(null);
  const dynamicCanvasRef = useRef<HTMLCanvasElement>(null);
  const reducedMotion = useMediaQuery("(prefers-reduced-motion: reduce)");
  // Keep the latest labels in a ref so the canvas loop reads current copy
  // without re-subscribing the effect on every render.
  const labelsRef = useRef(labels);
  useEffect(() => {
    labelsRef.current = labels;
  }, [labels]);

  useEffect(() => {
    const wrap = wrapRef.current;
    const staticCanvas = staticCanvasRef.current;
    const dynamicCanvas = dynamicCanvasRef.current;
    const staticContext = staticCanvas?.getContext("2d");
    const context = dynamicCanvas?.getContext("2d");
    if (!wrap || !staticCanvas || !dynamicCanvas || !staticContext || !context) return;
    const state: SimulationState = {
      position: { u: -0.95, v: -0.95 },
      velocity: { u: 0, v: 0 },
      pointer: null,
      lastInputTime: 0,
      trail: {
        x: new Float32Array(trailCapacity),
        y: new Float32Array(trailCapacity),
        time: new Float64Array(trailCapacity),
        start: 0,
        length: 0,
      },
      phase: "watching",
      scale: 0,
      centerX: 0,
      centerY: 0,
      width: 0,
      height: 0,
      fieldExtent: plateExtent,
    };
    const coarsePointer = window.matchMedia("(pointer: coarse)").matches;
    let isVisible = false;
    let pageVisible = !document.hidden;
    let lastFrameTime = 0;
    let canvasRect = dynamicCanvas.getBoundingClientRect();
    let canvasRectDirty = false;
    let dynamicDpr = 1;
    let cursorSprite: HTMLCanvasElement | null = null;
    let orbitSprite: HTMLCanvasElement | null = null;
    let orbitGeometries: OrbitGeometry[] = [];
    let targetPoint = { x: 0, y: 0 };
    let previousCursorBounds: Bounds | null = null;
    let previousTargetBounds: Bounds | null = null;
    let previousOrbitBounds: Bounds[] = [];
    const textWidthCache = new Map<string, number>();

    const createMarkerSprite = (
      radius: number,
      dotRadius: number,
      haloAlpha: number,
      outlineWidth: number,
    ) => {
      const sprite = document.createElement("canvas");
      const size = radius * 2;
      sprite.width = Math.ceil(size * dynamicDpr);
      sprite.height = Math.ceil(size * dynamicDpr);
      const spriteContext = sprite.getContext("2d");
      if (!spriteContext) return sprite;
      spriteContext.setTransform(dynamicDpr, 0, 0, dynamicDpr, 0, 0);
      const halo = spriteContext.createRadialGradient(radius, radius, 0, radius, radius, radius);
      halo.addColorStop(0, `rgba(${accent},${haloAlpha})`);
      halo.addColorStop(1, `rgba(${accent},0)`);
      spriteContext.fillStyle = halo;
      spriteContext.beginPath();
      spriteContext.arc(radius, radius, radius, 0, Math.PI * 2);
      spriteContext.fill();
      spriteContext.fillStyle = "#0066FF";
      spriteContext.beginPath();
      spriteContext.arc(radius, radius, dotRadius, 0, Math.PI * 2);
      spriteContext.fill();
      spriteContext.strokeStyle = "#ffffff";
      spriteContext.lineWidth = outlineWidth;
      spriteContext.stroke();
      return sprite;
    };

    const layout = () => {
      const width = wrap.clientWidth;
      const height = wrap.clientHeight;
      if (width === state.width && height === state.height) return false;
      state.width = width;
      state.height = height;
      const mobile = state.width <= 800;
      const staticDpr = Math.min(window.devicePixelRatio || 1, 2);
      dynamicDpr = Math.min(window.devicePixelRatio || 1, 2);
      staticCanvas.width = Math.round(state.width * staticDpr);
      staticCanvas.height = Math.round(state.height * staticDpr);
      dynamicCanvas.width = Math.round(state.width * dynamicDpr);
      dynamicCanvas.height = Math.round(state.height * dynamicDpr);
      staticContext.setTransform(staticDpr, 0, 0, staticDpr, 0, 0);
      context.setTransform(dynamicDpr, 0, 0, dynamicDpr, 0, 0);
      cursorSprite = createMarkerSprite(16, 4.5, 0.45, 1.5);
      orbitSprite = createMarkerSprite(12, 3.8, 0.35, 1.35);
      canvasRectDirty = true;
      previousCursorBounds = null;
      previousTargetBounds = null;
      previousOrbitBounds = [];
      if (fullField) {
        // Keep a consistent visual cell size and anchor the well in the right-hand
        // side of the hero. The field extent is derived from the furthest corner,
        // so diagonal lines always continue beyond the section bounds.
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
      return true;
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
    const buildStaticField = () => {
      staticContext.clearRect(0, 0, state.width, state.height);
      const gradientRadius = Math.min(
        singularityGradientExtent * 4,
        fullField ? state.fieldExtent : plateExtent,
      );
      const depthPx = state.scale * depth;
      const mobile = state.width <= 800;
      const ringCount = fullField ? (mobile ? 360 : 480) : 280;
      const ringSegments = fullField ? (mobile ? 112 : 128) : 96;

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
        staticContext.fillStyle = `rgb(${red.toFixed(2)},${green.toFixed(2)},255)`;
        staticContext.beginPath();
        for (let segment = 0; segment <= ringSegments; segment++) {
          const angle = (segment / ringSegments) * Math.PI * 2;
          const point = project(radius * Math.cos(angle), radius * Math.sin(angle), height);
          if (segment === 0) staticContext.moveTo(point.x, point.y);
          else staticContext.lineTo(point.x, point.y);
        }
        staticContext.closePath();
        staticContext.fill();
      }

      // The target manifold never changes while the pointer moves. Drawing its
      // complete grid here removes thousands of path calculations per frame.
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

      staticContext.lineWidth = 1;
      staticContext.strokeStyle = fullField ? "rgba(0,102,255,0.13)" : "rgba(11,18,32,0.13)";
      for (let pass = 0; pass < 2; pass++) {
        for (const fixedCoordinate of lineIndex) {
          const pointOnLine = (variableCoordinate: number) => {
            const u = pass === 0 ? variableCoordinate : fixedCoordinate;
            const v = pass === 0 ? fixedCoordinate : variableCoordinate;
            return project(u, v, wellHeight(Math.hypot(u, v), depthPx));
          };

          staticContext.beginPath();
          const firstPoint = pointOnLine(lineIndex[0]);
          staticContext.moveTo(firstPoint.x, firstPoint.y);
          for (let j = 0; j < lineIndex.length - 1; j++) {
            const start = lineIndex[j];
            const end = lineIndex[j + 1];
            const midpoint = (start + end) / 2;
            const midpointU = pass === 0 ? midpoint : fixedCoordinate;
            const midpointV = pass === 0 ? fixedCoordinate : midpoint;
            const subdivisions = Math.hypot(midpointU, midpointV) < 1.35 ? 5 : 1;
            for (let subdivision = 1; subdivision <= subdivisions; subdivision++) {
              const coordinate = start + ((end - start) * subdivision) / subdivisions;
              const point = pointOnLine(coordinate);
              staticContext.lineTo(point.x, point.y);
            }
          }
          staticContext.stroke();
        }
      }

      if (!fullField) {
        staticContext.strokeStyle = "rgba(11,18,32,0.22)";
        staticContext.beginPath();
        const corners = [
          [-plateExtent, -plateExtent],
          [plateExtent, -plateExtent],
          [plateExtent, plateExtent],
          [-plateExtent, plateExtent],
        ];
        corners.forEach((corner, index) => {
          const point = project(
            corner[0],
            corner[1],
            wellHeight(Math.hypot(corner[0], corner[1]), depthPx),
          );
          if (index === 0) staticContext.moveTo(point.x, point.y);
          else staticContext.lineTo(point.x, point.y);
        });
        staticContext.closePath();
        staticContext.stroke();
      }

      // Orbit tracks and the target beacon are fixed until layout changes.
      // Keeping them on the static layer avoids redrawing identical geometry.
      orbitGeometries = targetOrbits.map((orbit) => {
        const center = project(0, 0, wellHeight(orbit.fieldRadius, depthPx));
        const geometry = {
          centerX: center.x,
          centerY: center.y,
          radiusX: state.scale * orbit.fieldRadius * isoX * Math.SQRT2,
          radiusY: state.scale * orbit.fieldRadius * isoY * Math.SQRT2,
        };
        staticContext.strokeStyle = `rgba(${accent},0.2)`;
        staticContext.lineWidth = 1;
        staticContext.beginPath();
        staticContext.ellipse(
          geometry.centerX,
          geometry.centerY,
          geometry.radiusX,
          geometry.radiusY,
          0,
          0,
          Math.PI * 2,
        );
        staticContext.stroke();
        return geometry;
      });

      targetPoint = project(0, 0, depthPx * targetMarkerFloorRatio);
      staticContext.fillStyle = "#000000";
      staticContext.beginPath();
      staticContext.arc(targetPoint.x, targetPoint.y, 3.5, 0, Math.PI * 2);
      staticContext.fill();
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
      if (canvasRectDirty) {
        canvasRect = dynamicCanvas.getBoundingClientRect();
        canvasRectDirty = false;
      }
      if (
        fullField
        && (event.clientX < canvasRect.left
          || event.clientX > canvasRect.right
          || event.clientY < canvasRect.top
          || event.clientY > canvasRect.bottom)
      ) return;
      state.pointer = {
        x: event.clientX - canvasRect.left,
        y: event.clientY - canvasRect.top,
      };
      state.lastInputTime = performance.now();
      wake();
    };

    /** Toggle the single detected state from marker radius, with hysteresis. */
    const updatePhase = (radius: number) => {
      if (state.phase === "detected") {
        if (radius > detectionRelease) state.phase = "watching";
      } else if (radius < detectionEnter) {
        state.phase = "detected";
      }
    };

    const appendTrailPoint = (x: number, y: number, time: number) => {
      const trailBuffer = state.trail;
      let index: number;
      if (trailBuffer.length === trailCapacity) {
        index = trailBuffer.start;
        trailBuffer.start = (trailBuffer.start + 1) % trailCapacity;
      } else {
        index = (trailBuffer.start + trailBuffer.length) % trailCapacity;
        trailBuffer.length += 1;
      }
      trailBuffer.x[index] = x;
      trailBuffer.y[index] = y;
      trailBuffer.time[index] = time;
    };

    const pruneTrail = (cutoff: number) => {
      const trailBuffer = state.trail;
      while (
        trailBuffer.length
        && trailBuffer.time[trailBuffer.start] < cutoff
      ) {
        trailBuffer.start = (trailBuffer.start + 1) % trailCapacity;
        trailBuffer.length -= 1;
      }
    };

    const trailIndex = (offset: number) => (
      (state.trail.start + offset) % trailCapacity
    );

    const step = (now: number, dt: number) => {
      const depthPx = state.scale * depth;

      // Follow the pointer while it is active, then return to the ambient orbit.
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
        appendTrailPoint(
          markerPoint.x + (Math.random() - 0.5) * 2.4,
          markerPoint.y + (Math.random() - 0.5) * 2.4,
          now,
        );
        pruneTrail(now - trailLifetimeMs);
      } else if (state.trail.length) {
        state.trail.start = 0;
        state.trail.length = 0;
      }

      return markerPoint;
    };

    /** A small pill-backed monospace tag centred on (x, y). */
    const drawTag = (x: number, y: number, text: string, alpha: number, bold: boolean) => {
      const font = `${bold ? 600 : 500} 11px "IBM Plex Mono", ui-monospace, monospace`;
      context.font = font;
      context.textAlign = "center";
      context.textBaseline = "middle";
      const cacheKey = `${font}\n${text}`;
      let width = textWidthCache.get(cacheKey);
      if (width === undefined) {
        width = context.measureText(text).width;
        textWidthCache.set(cacheKey, width);
      }
      context.fillStyle = `rgba(255,255,255,${0.72 * alpha})`;
      context.beginPath();
      context.roundRect(x - width / 2 - 7, y - 9.5, width + 14, 19, 6);
      context.fill();
      context.fillStyle = `rgba(${accent},${alpha})`;
      context.fillText(text, x, y + 0.5);
      return {
        left: x - width / 2 - 9,
        top: y - 11.5,
        right: x + width / 2 + 9,
        bottom: y + 11.5,
      };
    };

    const clearBounds = (bounds: Bounds | null) => {
      if (!bounds) return;
      context.clearRect(
        bounds.left,
        bounds.top,
        bounds.right - bounds.left,
        bounds.bottom - bounds.top,
      );
    };

    const render = (markerPoint: { x: number; y: number }, timestamp: number) => {
      const label = labelsRef.current;
      const detected = state.phase === "detected";
      clearBounds(previousCursorBounds);
      clearBounds(previousTargetBounds);
      for (const bounds of previousOrbitBounds) clearBounds(bounds);

      // Only the two dots move; their tracks live on the static canvas.
      const orbitBounds: Bounds[] = [];
      for (let index = 0; index < targetOrbits.length; index++) {
        const orbit = targetOrbits[index];
        const geometry = orbitGeometries[index];
        if (!geometry) continue;
        const angle = ((timestamp / orbit.periodMs) + orbit.phase) * Math.PI * 2;
        const dotX = geometry.centerX + geometry.radiusX * Math.cos(angle);
        const dotY = geometry.centerY + geometry.radiusY * Math.sin(angle);
        if (orbitSprite) context.drawImage(orbitSprite, dotX - 12, dotY - 12, 24, 24);
        orbitBounds.push({
          left: dotX - 14,
          top: dotY - 14,
          right: dotX + 14,
          bottom: dotY + 14,
        });
      }

      const targetText = detected ? label.detected : label.target;
      const targetBounds = drawTag(
        targetPoint.x,
        targetPoint.y + 20,
        targetText,
        detected ? 0.95 : 0.62,
        detected,
      );

      // Fading marker trail.
      for (let i = 1; i < state.trail.length; i++) {
        const previousIndex = trailIndex(i - 1);
        const currentIndex = trailIndex(i);
        const remainingLife = Math.max(
          0,
          1 - (timestamp - state.trail.time[currentIndex]) / trailLifetimeMs,
        );
        context.strokeStyle = `rgba(${accent},${(remainingLife * 0.75).toFixed(3)})`;
        context.lineWidth = 1 + remainingLife * 1.4;
        context.beginPath();
        context.moveTo(state.trail.x[previousIndex], state.trail.y[previousIndex]);
        context.lineTo(state.trail.x[currentIndex], state.trail.y[currentIndex]);
        context.stroke();
      }

      if (cursorSprite) {
        context.drawImage(cursorSprite, markerPoint.x - 16, markerPoint.y - 16, 32, 32);
      }

      // The marker carries a quiet "cursor" tag — that dot is the user's motion.
      const cursorTagBounds = drawTag(
        markerPoint.x,
        markerPoint.y - 18,
        label.cursor,
        0.72,
        false,
      );
      const cursorBounds: Bounds = {
        left: Math.min(markerPoint.x - 18, cursorTagBounds.left),
        top: Math.min(markerPoint.y - 18, cursorTagBounds.top),
        right: Math.max(markerPoint.x + 18, cursorTagBounds.right),
        bottom: Math.max(markerPoint.y + 18, cursorTagBounds.bottom),
      };
      for (let i = 0; i < state.trail.length; i++) {
        const index = trailIndex(i);
        cursorBounds.left = Math.min(cursorBounds.left, state.trail.x[index] - 4);
        cursorBounds.top = Math.min(cursorBounds.top, state.trail.y[index] - 4);
        cursorBounds.right = Math.max(cursorBounds.right, state.trail.x[index] + 4);
        cursorBounds.bottom = Math.max(cursorBounds.bottom, state.trail.y[index] + 4);
      }
      previousCursorBounds = cursorBounds;
      previousTargetBounds = targetBounds;
      previousOrbitBounds = orbitBounds;
    };

    let raf = 0;
    function wake() {
      if (reducedMotion || !isVisible || !pageVisible || raf) return;
      lastFrameTime = 0;
      raf = requestAnimationFrame(frame);
    }

    function frame(timestamp: number) {
      raf = 0;
      if (!state.scale || !isVisible || !pageVisible) return;
      const dt = lastFrameTime
        ? Math.min((timestamp - lastFrameTime) / 1000, 1 / 20)
        : 1 / 60;
      lastFrameTime = timestamp;
      render(step(timestamp, dt), timestamp);

      raf = requestAnimationFrame(frame);
    }

    const renderStill = () => {
      if (!state.scale) return;
      // Settle the marker close enough that the detected state reads at a glance.
      state.position = { u: 0.12, v: 0.08 };
      state.phase = "detected";
      const markerZ = wellHeight(Math.hypot(state.position.u, state.position.v), state.scale * depth);
      render(
        project(state.position.u, state.position.v, markerZ),
        performance.now(),
      );
    };

    const resizeObserver = new ResizeObserver(() => {
      canvasRectDirty = true;
      if (!layout()) return;
      buildStaticField();
      if (reducedMotion) renderStill();
      else {
        const markerZ = wellHeight(Math.hypot(state.position.u, state.position.v), state.scale * depth);
        render(
          project(state.position.u, state.position.v, markerZ),
          performance.now(),
        );
        wake();
      }
    });
    resizeObserver.observe(wrap);
    layout();
    buildStaticField();

    const visibilityObserver = new IntersectionObserver(([entry]) => {
      isVisible = entry.isIntersecting;
      if (isVisible) wake();
      else if (raf) {
        cancelAnimationFrame(raf);
        raf = 0;
      }
    });
    visibilityObserver.observe(wrap);

    const onVisibilityChange = () => {
      pageVisible = !document.hidden;
      if (pageVisible) wake();
      else if (raf) {
        cancelAnimationFrame(raf);
        raf = 0;
      }
    };
    document.addEventListener("visibilitychange", onVisibilityChange);

    const markCanvasRectDirty = () => {
      canvasRectDirty = true;
    };
    window.addEventListener("scroll", markCanvasRectDirty, { passive: true });
    window.addEventListener("resize", markCanvasRectDirty, { passive: true });

    if (reducedMotion) {
      renderStill();
    } else {
      const pointerSurface: Window | HTMLCanvasElement = fullField ? window : dynamicCanvas;
      if (!coarsePointer) pointerSurface.addEventListener("pointermove", onPointer as EventListener);
      pointerSurface.addEventListener("pointerdown", onPointer as EventListener);
    }

    return () => {
      resizeObserver.disconnect();
      visibilityObserver.disconnect();
      document.removeEventListener("visibilitychange", onVisibilityChange);
      window.removeEventListener("scroll", markCanvasRectDirty);
      window.removeEventListener("resize", markCanvasRectDirty);
      cancelAnimationFrame(raf);
      const pointerSurface: Window | HTMLCanvasElement = fullField ? window : dynamicCanvas;
      if (!coarsePointer) pointerSurface.removeEventListener("pointermove", onPointer as EventListener);
      pointerSurface.removeEventListener("pointerdown", onPointer as EventListener);
    };
  }, [depth, gravity, trail, reducedMotion, fullField]);

  if (fullField) {
    return (
      <div
        ref={wrapRef}
        className={cn("pointer-events-none absolute inset-0 h-full w-full overflow-hidden [contain:layout_paint]", className)}
      >
        <canvas ref={staticCanvasRef} aria-hidden className="absolute inset-0 block h-full w-full" />
        <canvas ref={dynamicCanvasRef} aria-hidden className="absolute inset-0 block h-full w-full" />
        <p className="absolute left-[var(--gravity-caption-x)] top-[var(--gravity-caption-y)] -translate-x-1/2 whitespace-nowrap px-4 text-center font-mono text-[12px] font-semibold leading-[1.5] text-ink-2">
          {caption}
        </p>
      </div>
    );
  }

  return (
    <div className={cn("flex w-full flex-col h-[400px] sm:h-[460px] lg:h-[500px]", className)}>
      <div ref={wrapRef} aria-hidden className="relative min-h-0 w-full flex-1 overflow-hidden [contain:layout_paint]">
        <canvas ref={staticCanvasRef} className="absolute inset-0 block h-full w-full" />
        <canvas ref={dynamicCanvasRef} className="absolute inset-0 block h-full w-full [touch-action:none]" />
      </div>
      <p className="mt-2 px-4 text-center font-mono text-[12px] leading-[1.5] text-ink-3">
        {caption}
      </p>
    </div>
  );
};

export { GravityWell };
