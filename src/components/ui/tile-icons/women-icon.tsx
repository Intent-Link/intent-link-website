import type { TileIconProps } from "./tile-icon-props";

/** Women's category glyph — a simple A-line dress silhouette. */
const WomenIcon = ({ className }: TileIconProps) => (
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
    <path d="M9.5 3.5h5l1 2.5-1.8 1.4.8 1.6-1 1v9.5a1.5 1.5 0 0 1-1.5 1.5h-1a1.5 1.5 0 0 1-1.5-1.5V10l-1-1 .8-1.6L7.5 6z" />
    <path d="M9.5 3.5c0 1.4 1.1 2.5 2.5 2.5s2.5-1.1 2.5-2.5" />
  </svg>
);

export { WomenIcon };
