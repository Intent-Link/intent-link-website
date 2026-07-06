import { cn } from "@/utils/class-names";

interface SkeletonProps {
  className?: string;
}

/** Shimmer skeleton placeholder. Anim: il-shimmer. */
const Skeleton = ({ className }: SkeletonProps) => (
  <div
    className={cn(
      "animate-[il-shimmer_1.5s_infinite] rounded bg-[linear-gradient(90deg,var(--line-soft)_25%,var(--line)_50%,var(--line-soft)_75%)] bg-[length:200%_100%]",
      className,
    )}
  />
);

export { Skeleton };
