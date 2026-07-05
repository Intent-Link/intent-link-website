import type { HTMLAttributes } from "react";
import { cn } from "@/lib/utils";
import { testIds } from "@/constants/test-ids";

type CardProps = HTMLAttributes<HTMLDivElement>;

/** Generic surface card. TODO: style. */
const Card = ({ className, ...props }: CardProps) => (
  <div
    data-testid={testIds.card.root}
    className={cn("rounded-lg border border-line bg-surface", className)}
    {...props}
  />
);

export { Card };
