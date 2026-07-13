import type { TileIconProps } from "./tile-icon-props";

/** Electronics category glyph — a smartphone. */
const ElectronicsIcon = ({ className }: TileIconProps) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden>
    <rect x="6.5" y="2.5" width="11" height="19" rx="2" />
    <path d="M10 5h4M11 18.5h2" />
  </svg>
);

export { ElectronicsIcon };
