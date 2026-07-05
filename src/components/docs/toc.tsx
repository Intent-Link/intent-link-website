"use client";

import { testIds } from "@/constants/test-ids";
import { useCommonText } from "@/hooks/use-common-text";

interface TocItem {
  id: string;
  text: string;
  level: number;
}

interface TocProps {
  items: TocItem[];
}

/** Right-hand table of contents with scroll-spy. TODO: wire IntersectionObserver. */
const Toc = ({ items }: TocProps) => {
  const commonText = useCommonText();

  return (
    <nav aria-label={commonText.aria.pageNav} data-testid={testIds.toc.root} className="text-sm">
      <ul className="space-y-1">
        {items.map((item) => (
          <li key={item.id} style={{ paddingLeft: (item.level - 1) * 12 }}>
            <a href={`#${item.id}`} data-testid={testIds.toc.link} className="text-ink-3">
              {item.text}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export { Toc };
export type { TocItem };
