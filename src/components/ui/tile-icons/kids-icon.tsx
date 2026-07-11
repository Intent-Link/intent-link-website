import type { TileIconProps } from "./tile-icon-props";

/** Kids' category glyph — a onesie/romper outline (with snap dots) for a distinctly childlike read. */
const KidsIcon = ({ className }: TileIconProps) => (
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
    <path d="M9 3.5H8L6 6l1.5 1.5L9 6.5V11l-1.2 1v6.5A2 2 0 0 0 9.8 20.5h4.4a2 2 0 0 0 2-2V12l-1.2-1V6.5l1.5 1L18 6l-2-2.5h-1" />
    <path d="M9 3.5c0 1.66 1.34 3 3 3s3-1.34 3-3" />
    <circle cx="12" cy="14" r="0.6" fill="currentColor" stroke="none" />
    <circle cx="12" cy="17" r="0.6" fill="currentColor" stroke="none" />
  </svg>
);

export { KidsIcon };
