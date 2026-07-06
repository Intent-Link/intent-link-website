
interface ProbabilityRingProps {
  value: number;
  size?: number;
}

/** SVG probability ring (0..1) with a white backing disc + center percentage. */
const ProbabilityRing = ({ value, size = 34 }: ProbabilityRingProps) => {
  const radius = size / 2 - 3;
  const circumference = 2 * Math.PI * radius;
  const fraction = Math.max(0, Math.min(1, value));
  const center = size / 2;
  return (
    <svg
      width={size}
      height={size}
      viewBox={`0 0 ${size} ${size}`}
      aria-hidden
    >
      <circle cx={center} cy={center} r={radius} fill="rgba(255,255,255,0.82)" />
      <circle
        cx={center}
        cy={center}
        r={radius}
        fill="none"
        stroke="rgba(0,0,0,0.12)"
        strokeWidth={3}
      />
      <circle
        cx={center}
        cy={center}
        r={radius}
        fill="none"
        stroke="var(--accent)"
        strokeWidth={3}
        strokeDasharray={circumference}
        strokeDashoffset={circumference * (1 - fraction)}
        strokeLinecap="round"
        transform={`rotate(-90 ${center} ${center})`}
      />
      <text
        x={center}
        y={center}
        textAnchor="middle"
        dominantBaseline="central"
        fill="var(--accent)"
        fontSize="9.5"
        fontWeight="600"
        fontFamily="var(--font-mono)"
      >
        {Math.round(fraction * 100)}
      </text>
    </svg>
  );
};

export { ProbabilityRing };
