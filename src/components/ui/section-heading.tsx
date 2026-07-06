"use client";

import { cn } from "@/utils/class-names";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";

interface SectionHeadingProps {
  /** Mono, accent-blue, lowercase eyebrow (e.g. "01 / live demo"). */
  eyebrow?: string;
  heading: string;
  body?: string;
  className?: string;
  /** Override the body copy classes (e.g. per-section font size). */
  bodyClassName?: string;
  /** Set false when a parent already fades the whole section in, to avoid a double reveal. */
  reveal?: boolean;
}

/**
 * Standard section header — the prototype's type scale in one place: accent
 * mono eyebrow, 32px/800 heading, 15px/1.55 body. Keeps every section on scale.
 * Fades up on first viewport entry (immediately when already in view on mount);
 * the hook skips the delay under prefers-reduced-motion.
 */
const SectionHeading = ({
  eyebrow,
  heading,
  body,
  className,
  bodyClassName,
  reveal = true,
}: SectionHeadingProps) => {
  const { ref, revealed } = useScrollReveal<HTMLDivElement>();

  return (
    <div
      ref={ref}
      className={cn(
        "max-w-2xl",
        reveal && "transition-all duration-700 ease-out",
        reveal && (revealed ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"),
        className,
      )}
    >
      {eyebrow && (
        <p className="font-mono text-xs tracking-[0.02em] text-accent">{eyebrow}</p>
      )}
      <h2 className="mt-2 text-[32px] font-extrabold leading-[1.05] tracking-[-0.035em] text-ink">
        {heading}
      </h2>
      {body && (
        <p className={cn("mt-3 text-[15px] leading-[1.55] text-ink-2", bodyClassName)}>{body}</p>
      )}
    </div>
  );
};

export { SectionHeading };
