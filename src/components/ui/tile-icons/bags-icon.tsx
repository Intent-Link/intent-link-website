import type { TileIconProps } from "./tile-icon-props";

/** Bags category glyph — a neutral tote (trapezoid body + two arched handles). */
const BagsIcon = ({ className }: TileIconProps) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={1.5}
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
    aria-hidden
  >
    <path d="M5.5 9h13l-1 11.5a1.5 1.5 0 0 1-1.5 1.4H8a1.5 1.5 0 0 1-1.5-1.4z" />
    <path d="M8.5 9V6.5a3.5 3.5 0 0 1 7 0V9" />
  </svg>
);

export { BagsIcon };
