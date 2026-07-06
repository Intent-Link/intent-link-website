import { cn } from "@/utils/class-names";

interface BadgeProps {
  /** Left, muted half (e.g. "npm", "license"). */
  label: string;
  /** Right, colored half (e.g. "v1.0.8", "MIT"). */
  value: string;
  /** Background color of the value half. Defaults to the brand accent. */
  color?: string;
  /** Text color of the value half — set dark for light backgrounds (e.g. react cyan). */
  valueTextColor?: string;
  className?: string;
}

/** shields.io-style split badge: a dark label half + a colored value half. */
const Badge = ({ label, value, color = "var(--accent)", valueTextColor = "#ffffff", className }: BadgeProps) => {
  return (
    <span
      className={cn(
        "inline-flex overflow-hidden rounded-[5px] font-mono text-[11.5px] leading-none",
        className,
      )}
    >
      <span className="bg-[#3a4048] px-2 py-1 text-white">{label}</span>
      <span
        className="px-2 py-1"
        style={{ backgroundColor: color, color: valueTextColor }}
      >
        {value}
      </span>
    </span>
  );
};

export { Badge };
