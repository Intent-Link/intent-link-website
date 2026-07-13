import type { TileIconProps } from "./tile-icon-props";

/** Travel category glyph — a rolling suitcase. */
const TravelIcon = ({ className }: TileIconProps) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden>
    <path d="M9 6V3h6v3" />
    <rect x="5" y="6" width="14" height="14" rx="2" />
    <path d="M9 6v14M15 6v14M8 22h1M15 22h1" />
  </svg>
);

export { TravelIcon };
