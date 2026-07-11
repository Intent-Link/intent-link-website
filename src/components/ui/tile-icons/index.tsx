import { tileCategory, type TileCategory } from "@/constants/tile-categories";
import type { TileIconProps } from "./tile-icon-props";
import { WomenIcon } from "./women-icon";
import { MenIcon } from "./men-icon";
import { KidsIcon } from "./kids-icon";
import { ShoesIcon } from "./shoes-icon";
import { BagsIcon } from "./bags-icon";
import { AccessoriesIcon } from "./accessories-icon";
import { SportIcon } from "./sport-icon";
import { DenimIcon } from "./denim-icon";
import { OuterwearIcon } from "./outerwear-icon";
import { BeautyIcon } from "./beauty-icon";
import { HomeIcon } from "./home-icon";
import { SaleIcon } from "./sale-icon";

/** Registry mapping each `TileCategory` to its icon component — keyed off the
 * same const map as everywhere else, so adding/renaming a category can't
 * silently drift out of sync with the icon set. */
const tileIcons: Record<TileCategory, (props: TileIconProps) => React.JSX.Element> = {
  [tileCategory.women]: WomenIcon,
  [tileCategory.men]: MenIcon,
  [tileCategory.kids]: KidsIcon,
  [tileCategory.shoes]: ShoesIcon,
  [tileCategory.bags]: BagsIcon,
  [tileCategory.accessories]: AccessoriesIcon,
  [tileCategory.sport]: SportIcon,
  [tileCategory.denim]: DenimIcon,
  [tileCategory.outerwear]: OuterwearIcon,
  [tileCategory.beauty]: BeautyIcon,
  [tileCategory.home]: HomeIcon,
  [tileCategory.sale]: SaleIcon,
};

export { tileIcons };
export type { TileIconProps };
