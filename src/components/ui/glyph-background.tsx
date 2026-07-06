import { cn } from "@/utils/class-names";
import { testIds } from "@/constants/test-ids";

/** Glyph sets per section variant, mirroring the prototype's floating equations. */
const glyphVariant = {
  hero: "hero",
  how: "how",
  race: "race",
  vision: "vision",
  cta: "cta",
} as const;

type GlyphVariant = (typeof glyphVariant)[keyof typeof glyphVariant];

interface Glyph {
  text: string;
  /** Positioned with top + (left | right) as CSS length strings. */
  top: string;
  left?: string;
  right?: string;
  size: number;
}

const glyphSets: Record<GlyphVariant, Glyph[]> = {
  hero: [
    { text: "P(t|x)", top: "11%", left: "5%", size: 15 },
    { text: "σ²", top: "66%", left: "2.5%", size: 13 },
    { text: "x̂ₖ = x̂ₖ₋₁ + Kₖ(zₖ − Hx̂ₖ₋₁)", top: "30%", left: "44%", size: 13 },
    { text: "Δt", top: "82%", left: "36%", size: 14 },
    { text: "√Pₖ", top: "14%", right: "6%", size: 13 },
    { text: "Σ", top: "74%", right: "4%", size: 14 },
  ],
  how: [
    { text: "Kₖ = PₖHᵀS⁻¹", top: "9%", left: "3%", size: 13 },
    { text: "σ²", top: "40%", left: "1.5%", size: 14 },
    { text: "P(t|x)", top: "82%", left: "4%", size: 13 },
    { text: "√Pₖ", top: "12%", right: "4%", size: 13 },
    { text: "Δt", top: "52%", right: "2%", size: 14 },
    { text: "Σ", top: "86%", right: "6%", size: 13 },
  ],
  race: [
    { text: "utility = P·imp − cost", top: "8%", left: "2.5%", size: 14 },
    { text: "Δt", top: "72%", left: "3%", size: 13 },
    { text: "P(t|x)", top: "20%", right: "3%", size: 13 },
    { text: "σ²", top: "82%", right: "5%", size: 14 },
  ],
  vision: [
    { text: "P(t|x)", top: "9%", left: "3%", size: 13 },
    { text: "Σ", top: "58%", left: "1.5%", size: 14 },
    { text: "x̂ₖ", top: "85%", left: "5%", size: 13 },
    { text: "e·d²/w²", top: "13%", right: "4%", size: 14 },
    { text: "√Pₖ", top: "76%", right: "3%", size: 13 },
  ],
  cta: [
    { text: "P(t|x)", top: "16%", left: "7%", size: 14 },
    { text: "x̂ₖ", top: "64%", left: "4%", size: 13 },
    { text: "Σ", top: "22%", right: "8%", size: 13 },
    { text: "σ²", top: "70%", right: "6%", size: 14 },
  ],
};

/** Per-variant layer opacity, mirroring the prototype's decorative glyph fields. */
const glyphOpacity: Record<GlyphVariant, number> = {
  hero: 0.22,
  how: 0.18,
  race: 0.16,
  vision: 0.16,
  cta: 0.16,
};

interface GlyphBackgroundProps {
  variant?: GlyphVariant;
  className?: string;
}

/**
 * Decorative floating math-glyph layer (Kalman/probability notation) behind
 * hero/how/race/vision sections — aria-hidden, low opacity, IBM Plex Mono.
 */
const GlyphBackground = ({ variant = glyphVariant.hero, className }: GlyphBackgroundProps) => {
  return (
    <div
      aria-hidden
      data-testid={testIds.glyphBackground.root}
      className={cn("pointer-events-none absolute inset-0 overflow-hidden", className)}
      style={{ opacity: glyphOpacity[variant] }}
    >
      {glyphSets[variant].map((glyph, index) => (
        <span
          key={index}
          className="absolute select-none font-mono text-ink-3"
          style={{
            top: glyph.top,
            left: glyph.left,
            right: glyph.right,
            fontSize: `${glyph.size}px`,
          }}
        >
          {glyph.text}
        </span>
      ))}
    </div>
  );
};

export { GlyphBackground, glyphVariant };
export type { GlyphVariant };
