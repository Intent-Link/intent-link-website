import type { TileIconProps } from "./tile-icon-props";

/** Beauty category glyph — a perfume bottle. */
const BeautyIcon = ({ className }: TileIconProps) => (
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
    <rect x="10" y="3.5" width="4" height="3" rx="0.5" />
    <path d="M10.5 6.5v2.2c-1.8.8-3 2.6-3 4.6a4.5 4.5 0 0 0 9 0c0-2-1.2-3.8-3-4.6V6.5" />
  </svg>
);

export { BeautyIcon };
