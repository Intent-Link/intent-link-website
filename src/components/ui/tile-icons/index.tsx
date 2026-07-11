import { tileCategory, type TileCategory } from "@/constants/tile-categories";
import type { TileIconProps } from "./tile-icon-props";
import { WomenIcon } from "./women-icon";
import { MenIcon } from "./men-icon";
import { KidsIcon } from "./kids-icon";
import { ShoesIcon } from "./shoes-icon";
import { BagsIcon } from "./bags-icon";
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
  [tileCategory.sale]: SaleIcon,
};

export { tileIcons };
export type { TileIconProps };
