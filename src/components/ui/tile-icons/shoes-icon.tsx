import type { TileIconProps } from "./tile-icon-props";

/** Shoes category glyph — a sneaker in side profile. */
const ShoesIcon = ({ className }: TileIconProps) => (
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
    <path d="M3.5 15.5 6 9.8c.3-.7 1-1.1 1.8-1.1h1.9c.5 0 1 .2 1.3.6l1.6 1.8c.5.5 1.1.9 1.8 1l3.6.6c.9.15 1.5.9 1.5 1.8v1c0 .55-.45 1-1 1H4.5a1 1 0 0 1-1-1z" />
    <path d="M9 8.7v2.3" />
    <path d="M6.5 15.5v-2" />
  </svg>
);

export { ShoesIcon };
