import { cn } from "@/utils/class-names";

const variantClasses = {
  primary:
    "bg-accent text-accent-ink font-semibold hover:-translate-y-0.5 hover:shadow-[0_8px_20px_-6px_rgba(0,102,255,.55)] active:translate-y-0 active:shadow-none",
  outline: "border border-line bg-surface text-ink font-medium hover:border-ink/40 hover:bg-black/[0.02]",
} as const;

type ButtonVariant = keyof typeof variantClasses;

/**
 * Shared button styling, so anchors/links can look like buttons without nesting
 * a `<button>` inside an `<a>`.
 */
const buttonClassName = (variant: ButtonVariant = "primary", className?: string): string =>
  cn(
    "inline-flex items-center justify-center gap-1.5 rounded-[7px] px-6 py-3 font-mono text-[15px] transition-all duration-200",
    "focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent",
    "disabled:cursor-not-allowed disabled:opacity-50",
    variantClasses[variant],
    className,
  );

export { buttonClassName };
