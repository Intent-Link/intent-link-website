"use client";

import { useCommonText } from "@/hooks/use-common-text";
import { useScrollSpy } from "@/hooks/use-scroll-spy";
import { cn } from "@/utils/class-names";
import type { TocItem } from "@/content/docs/toc";

interface TocProps {
  items: TocItem[];
}

/** Right-hand table of contents with IntersectionObserver scroll-spy. */
const Toc = ({ items }: TocProps) => {
  const commonText = useCommonText();
  const activeId = useScrollSpy(items.map((item) => item.id));

  if (items.length === 0) return null;

  return (
    <nav aria-label={commonText.aria.pageNav} className="sticky top-[76px]">
      <p className="mb-2.5 font-mono text-[10.5px] uppercase tracking-[0.05em] text-ink-3">
        {commonText.aria.pageNav}
      </p>
      <ul>
        {items.map((item) => (
          <li key={item.id}>
            <a
              href={`#${item.id}`}
              className={cn(
                "block py-1 text-[12.5px] leading-[1.35] transition-colors hover:text-ink",
                item.id === activeId ? "font-medium text-accent" : "text-ink-2",
              )}
            >
              {item.text}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export { Toc };
