import type { TileIconProps } from "./tile-icon-props";

/** Outerwear category glyph — a zipped jacket. */
const OuterwearIcon = ({ className }: TileIconProps) => (
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
    <path d="M9 4h6l3 3-1.5 4-1.5-1v10.5h-6V10l-1.5 1L6 7z" />
    <path d="M12 5v15.5" />
  </svg>
);

export { OuterwearIcon };
