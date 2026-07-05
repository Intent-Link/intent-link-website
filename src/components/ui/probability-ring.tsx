import { testIds } from "@/constants/test-ids";

interface ProbabilityRingProps {
  value: number;
  size?: number;
}

/** SVG probability ring (0..1) drawn around a demo product tile. */
const ProbabilityRing = ({ value, size = 28 }: ProbabilityRingProps) => {
  const radius = size / 2 - 3;
  const circumference = 2 * Math.PI * radius;
  const fraction = Math.max(0, Math.min(1, value));
  return (
    <svg
      width={size}
      height={size}
      viewBox={`0 0 ${size} ${size}`}
      aria-hidden
      data-testid={testIds.probabilityRing.root}
    >
      <circle
        cx={size / 2}
        cy={size / 2}
        r={radius}
        fill="none"
        stroke="var(--line)"
        strokeWidth={3}
      />
      <circle
        cx={size / 2}
        cy={size / 2}
        r={radius}
        fill="none"
        stroke="var(--accent)"
        strokeWidth={3}
        strokeDasharray={circumference}
        strokeDashoffset={circumference * (1 - fraction)}
        strokeLinecap="round"
        transform={`rotate(-90 ${size / 2} ${size / 2})`}
      />
    </svg>
  );
};

export { ProbabilityRing };
