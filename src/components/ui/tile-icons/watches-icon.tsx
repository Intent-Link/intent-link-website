import type { TileIconProps } from "./tile-icon-props";

/** Watches category glyph — a wristwatch. */
const WatchesIcon = ({ className }: TileIconProps) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden>
    <path d="m9 6 1-4h4l1 4M9 18l1 4h4l1-4" />
    <circle cx="12" cy="12" r="6" />
    <path d="M12 8.5V12l2.5 1.5" />
  </svg>
);

export { WatchesIcon };
