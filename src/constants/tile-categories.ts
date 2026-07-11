/**
 * Storefront categories for the prediction-field demo tiles. Const map +
 * derived union — the single source of truth for the 6 tile ids, so the
 * demo's `tiles` array, `ProductTile`, the tile-icon registry, and the i18n
 * `tiles` dictionary all key off the same identifiers instead of re-typing
 * a parallel string union.
 */
const tileCategory = {
  women: "women",
  men: "men",
  kids: "kids",
  shoes: "shoes",
  bags: "bags",
  sale: "sale",
} as const;

type TileCategory = (typeof tileCategory)[keyof typeof tileCategory];

export { tileCategory };
export type { TileCategory };
