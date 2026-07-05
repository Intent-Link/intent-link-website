import type { ReactNode } from "react";
import { Sidebar } from "./sidebar";
import { Toc, type TocItem } from "./toc";
import { testIds } from "@/constants/test-ids";

interface DocsShellProps {
  children: ReactNode;
  toc?: TocItem[];
}

/**
 * Three-column docs shell (sidebar · content · TOC). Rendered *inside* each
 * /docs page rather than as a route layout, per the one-layout decision.
 */
const DocsShell = ({ children, toc = [] }: DocsShellProps) => {
  return (
    <div
      data-testid={testIds.docsShell.root}
      className="mx-auto grid max-w-6xl gap-8 px-6 py-10 lg:grid-cols-[220px_minmax(0,1fr)_200px]"
    >
      <aside className="hidden lg:block">
        <Sidebar />
      </aside>
      <div>{children}</div>
      <aside className="hidden lg:block">
        <Toc items={toc} />
      </aside>
    </div>
  );
};

export { DocsShell };
