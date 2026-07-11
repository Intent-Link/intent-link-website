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
    { text: "Eₖ = ½mv²", top: "11%", left: "5%", size: 15 },
    { text: "U = −GM/r", top: "66%", left: "2.5%", size: 13 },
    { text: "F = G·m₁m₂/r²", top: "30%", left: "44%", size: 13 },
    { text: "Δt", top: "82%", left: "36%", size: 14 },
    { text: "a = F/m", top: "14%", right: "6%", size: 13 },
    { text: "∇U", top: "74%", right: "4%", size: 14 },
  ],
  how: [
    { text: "F = G·m₁m₂/r²", top: "9%", left: "3%", size: 13 },
    { text: "U = −GM/r", top: "40%", left: "1.5%", size: 14 },
    { text: "Eₖ = ½mv²", top: "82%", left: "4%", size: 13 },
    { text: "a = F/m", top: "12%", right: "4%", size: 13 },
    { text: "Δt", top: "52%", right: "2%", size: 14 },
    { text: "∇U", top: "86%", right: "6%", size: 13 },
  ],
  race: [
    { text: "Eₖ = ½mv²", top: "8%", left: "2.5%", size: 14 },
    { text: "Δt", top: "72%", left: "3%", size: 13 },
    { text: "v = dx/dt", top: "20%", right: "3%", size: 13 },
    { text: "F = ma", top: "82%", right: "5%", size: 14 },
  ],
  vision: [
    { text: "Eₖ = ½mv²", top: "9%", left: "3%", size: 13 },
    { text: "∫ L dt", top: "58%", left: "1.5%", size: 14 },
    { text: "p = mv", top: "85%", left: "5%", size: 13 },
    { text: "U = −GM/r", top: "13%", right: "4%", size: 14 },
    { text: "a = F/m", top: "76%", right: "3%", size: 13 },
  ],
  cta: [
    { text: "Eₖ = ½mv²", top: "16%", left: "7%", size: 14 },
    { text: "p = mv", top: "64%", left: "4%", size: 13 },
    { text: "∫ L dt", top: "22%", right: "8%", size: 13 },
    { text: "U = −GM/r", top: "70%", right: "6%", size: 14 },
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
 * Decorative floating math-glyph layer (physics-of-motion notation — kinetic
 * and gravitational-potential energy) behind the sections — aria-hidden, low
 * opacity, IBM Plex Mono.
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
