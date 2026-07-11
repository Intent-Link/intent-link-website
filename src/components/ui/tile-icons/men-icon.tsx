import type { TileIconProps } from "./tile-icon-props";

/** Men's category glyph — a necktie, the most visually distinct silhouette in the set. */
const MenIcon = ({ className }: TileIconProps) => (
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
    <path d="M9.5 3.5h5l-1 3h-3z" />
    <path d="M9.8 6.5 8 14l4 6.5 4-6.5-1.8-7.5" />
  </svg>
);

export { MenIcon };
