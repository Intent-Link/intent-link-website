import type { TileIconProps } from "./tile-icon-props";

/** Accessories category glyph — a wristwatch. */
const AccessoriesIcon = ({ className }: TileIconProps) => (
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
    <circle cx="12" cy="12" r="5" />
    <path d="M12 9.5V12l1.8 1.2" />
    <path d="M9.5 7.5 9 3.5h6l-.5 4M9.5 16.5 9 20.5h6l-.5-4" />
  </svg>
);

export { AccessoriesIcon };
