import type { ReactNode } from "react";
import { cn } from "@/utils/class-names";
import { testIds } from "@/constants/test-ids";
import type { SectionId } from "@/constants/section-ids";
import { GridBackground } from "@/components/ui/grid-background";
import { GlyphBackground, type GlyphVariant } from "@/components/ui/glyph-background";

const sectionDecor = {
  none: "none",
  grid: "grid",
  glyph: "glyph",
} as const;

type SectionDecor = (typeof sectionDecor)[keyof typeof sectionDecor];
type SectionTestId = (typeof testIds.section)[keyof typeof testIds.section];

interface SectionProps {
  id: SectionId;
  ariaLabel: string;
  testId: SectionTestId;
  /** One or more decorative backdrops layered behind the content. */
  decor?: SectionDecor | SectionDecor[];
  /** Which glyph set to scatter when `decor` includes "glyph". */
  glyphVariant?: GlyphVariant;
  className?: string;
  children?: ReactNode;
}

/**
 * Presentational shell for a landing-page section. Owns the structural chrome
 * (anchor id, aria-label, test id) and the optional decorative backdrop, so a
 * section declares intent (`decor="grid"`) instead of hand-positioning layers.
 * `isolate` scopes the absolute decor to this section; content paints above it.
 */
const Section = ({
  id,
  ariaLabel,
  testId,
  decor = sectionDecor.none,
  glyphVariant,
  className,
  children,
}: SectionProps) => {
  const decorLayers = Array.isArray(decor) ? decor : [decor];

  return (
    <section
      id={id}
      aria-label={ariaLabel}
      data-testid={testId}
      className={cn("relative isolate scroll-mt-16", className)}
    >
      {decorLayers.includes(sectionDecor.grid) && <GridBackground />}
      {decorLayers.includes(sectionDecor.glyph) && <GlyphBackground variant={glyphVariant} />}
      <div className="relative">{children}</div>
    </section>
  );
};

export { Section };
