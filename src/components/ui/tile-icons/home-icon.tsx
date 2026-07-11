import type { TileIconProps } from "./tile-icon-props";

/** Home category glyph — a house. */
const HomeIcon = ({ className }: TileIconProps) => (
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
    <path d="M4.5 10.5 12 4l7.5 6.5" />
    <path d="M6.5 9v10.5h11V9" />
    <path d="M10 19.5v-5h4v5" />
  </svg>
);

export { HomeIcon };
