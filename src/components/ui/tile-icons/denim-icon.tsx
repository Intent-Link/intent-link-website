import type { TileIconProps } from "./tile-icon-props";

/** Denim category glyph — a pair of jeans. */
const DenimIcon = ({ className }: TileIconProps) => (
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
    <path d="M8 3.5h8l1.5 17h-4L12 11l-1.5 9.5h-4z" />
    <path d="M8 7h8" />
  </svg>
);

export { DenimIcon };
