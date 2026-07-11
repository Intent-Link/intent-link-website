/**
 * Storefront categories for the prediction-field demo tiles. Const map +
 * derived union — the single source of truth for the 12 tile ids, so the
 * demo's `tiles` array, `ProductTile`, the tile-icon registry, and the i18n
 * `tiles` dictionary all key off the same identifiers instead of re-typing
 * a parallel string union. Twelve compact tiles keep each target at the
 * link scale where the engine's equilibrium model is validated.
 */
const tileCategory = {
  women: "women",
  men: "men",
  kids: "kids",
  shoes: "shoes",
  bags: "bags",
  accessories: "accessories",
  sport: "sport",
  denim: "denim",
  outerwear: "outerwear",
  beauty: "beauty",
  home: "home",
  sale: "sale",
} as const;

type TileCategory = (typeof tileCategory)[keyof typeof tileCategory];

export { tileCategory };
export type { TileCategory };
