import type { TileIconProps } from "./tile-icon-props";

/** Furniture category glyph — an armchair. */
const FurnitureIcon = ({ className }: TileIconProps) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden>
    <path d="M7 12V7a3 3 0 0 1 3-3h4a3 3 0 0 1 3 3v5" />
    <path d="M5 10a2 2 0 0 0-2 2v5h18v-5a2 2 0 0 0-4 0v2H7v-2a2 2 0 0 0-2-2Z" />
    <path d="M6 17v3M18 17v3" />
  </svg>
);

export { FurnitureIcon };
