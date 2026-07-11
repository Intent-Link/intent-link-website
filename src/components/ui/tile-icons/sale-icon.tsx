import type { TileIconProps } from "./tile-icon-props";

/** Sale category glyph — a price tag with a percent mark, so it reads as a
 * discount rather than a generic label. */
const SaleIcon = ({ className }: TileIconProps) => (
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
    <path d="M12.7 3.5h5.3a1.5 1.5 0 0 1 1.5 1.5v5.3a1.5 1.5 0 0 1-.44 1.06l-8.3 8.3a1.5 1.5 0 0 1-2.12 0l-5.3-5.3a1.5 1.5 0 0 1 0-2.12l8.3-8.3a1.5 1.5 0 0 1 1.06-.44z" />
    <circle cx="16.2" cy="7.8" r="1" fill="currentColor" stroke="none" />
    <path d="M9.5 14.5l4-4" />
  </svg>
);

export { SaleIcon };
