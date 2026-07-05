import { cn } from "@/lib/utils";
import { testIds } from "@/constants/test-ids";

interface GlyphBackgroundProps {
  className?: string;
}

/** Decorative math-glyph layer repeated behind hero/how/race/beyond/cta. */
const GlyphBackground = ({ className }: GlyphBackgroundProps) => {
  return (
    <div
      aria-hidden
      data-testid={testIds.glyphBackground.root}
      className={cn("pointer-events-none absolute inset-0 overflow-hidden", className)}
    >
      {/* TODO: scatter math glyphs (∑, ∫, σ, κ, …) as in Landing.dc.html */}
    </div>
  );
};

export { GlyphBackground };
