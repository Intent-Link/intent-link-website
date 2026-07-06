import type { HTMLAttributes } from "react";
import { cn } from "@/utils/class-names";

type CardProps = HTMLAttributes<HTMLDivElement>;

/** Generic surface card — radius 14px + subtle lift, matching the prototype. */
const Card = ({ className, ...props }: CardProps) => (
  <div
    className={cn(
      "rounded-[14px] border border-line bg-surface shadow-[0_1px_3px_rgba(0,0,0,0.05)]",
      className,
    )}
    {...props}
  />
);

export { Card };
