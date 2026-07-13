import type { TileIconProps } from "./tile-icon-props";

/** Jewelry category glyph — a cut gemstone. */
const JewelryIcon = ({ className }: TileIconProps) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden>
    <path d="m4 9 4-5h8l4 5-8 11z" />
    <path d="M4 9h16M8 4l4 5 4-5M8 9l4 11 4-11" />
  </svg>
);

export { JewelryIcon };
