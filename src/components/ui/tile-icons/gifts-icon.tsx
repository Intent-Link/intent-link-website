import type { TileIconProps } from "./tile-icon-props";

/** Gifts category glyph — a wrapped present. */
const GiftsIcon = ({ className }: TileIconProps) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden>
    <rect x="3" y="9" width="18" height="12" rx="1" />
    <path d="M2.5 9h19V5.5h-19zM12 5.5V21" />
    <path d="M12 5.5C10.5 2.5 7 2 6.5 4c-.5 2 2.5 2 5.5 1.5ZM12 5.5c1.5-3 5-3.5 5.5-1.5.5 2-2.5 2-5.5 1.5Z" />
  </svg>
);

export { GiftsIcon };
