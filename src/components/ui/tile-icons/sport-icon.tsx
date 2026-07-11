import type { TileIconProps } from "./tile-icon-props";

/** Sport category glyph — a dumbbell. */
const SportIcon = ({ className }: TileIconProps) => (
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
    <path d="M9 12h6" />
    <rect x="4.5" y="8.5" width="3" height="7" rx="1" />
    <rect x="16.5" y="8.5" width="3" height="7" rx="1" />
    <path d="M4.5 12H3M21 12h-1.5" />
  </svg>
);

export { SportIcon };
