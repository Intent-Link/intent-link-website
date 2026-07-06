import type { ReactNode } from "react";
import { Sidebar } from "./sidebar";
import { DocsMobileNav } from "./docs-mobile-nav";
import { Toc } from "./toc";
import type { TocItem } from "@/content/docs/toc";

interface DocsShellProps {
  children: ReactNode;
  toc?: TocItem[];
}

/**
 * Three-column docs shell (sidebar · content · TOC). Columns butt together
 * (gap-0): a tinted sidebar rail, the content column, and the TOC. Rendered
 * *inside* each /docs page rather than as a route layout, per the one-layout
 * decision. TOC drops below 1080px; sidebar drops to a single column below 780px.
 */
const DocsShell = ({ children, toc = [] }: DocsShellProps) => {
  return (
    <div className="min-h-screen bg-paper">
      <DocsMobileNav />
      <div className="mx-auto grid max-w-[1400px] grid-cols-1 gap-0 min-[780px]:grid-cols-[236px_minmax(0,1fr)] min-[1080px]:grid-cols-[236px_minmax(0,1fr)_190px]">
        <aside className="hidden border-r border-line-soft bg-sidebar px-4 pt-6 pb-[60px] min-[780px]:block">
          <Sidebar />
        </aside>
        <div className="min-w-0 px-10 pt-[38px] pb-[100px]">{children}</div>
        <aside className="hidden px-5 pt-[38px] pb-[60px] min-[1080px]:block">
          <Toc items={toc} />
        </aside>
      </div>
    </div>
  );
};

export { DocsShell };
