"use client";

import { useCallback, useState } from "react";
import { usePathname } from "next/navigation";
import { Sidebar } from "./sidebar";
import { useCommonText } from "@/hooks/use-common-text";
import { useDismissable } from "@/hooks/use-dismissable";
import { cn } from "@/utils/class-names";

/**
 * Mobile-only docs navigation. Below 780px the three-column grid collapses and
 * the sidebar rail is hidden, so a hamburger toggles a slide-in drawer that
 * reuses the shared Sidebar contents. Backdrop click, Escape, and navigation
 * all close it. Invisible (and out of layout) at >=780px.
 */
const DocsMobileNav = () => {
  const [open, setOpen] = useState(false);
  const commonText = useCommonText();
  const pathname = usePathname();

  const close = useCallback(() => setOpen(false), []);

  // Close on navigation to a new doc — adjust state during render when the path changes.
  const [lastPathname, setLastPathname] = useState(pathname);
  if (lastPathname !== pathname) {
    setLastPathname(pathname);
    if (open) setOpen(false);
  }

  useDismissable({ when: open, onDismiss: close });

  return (
    <div className="px-6 pt-4 min-[780px]:hidden">
      <button
        type="button"
        aria-label={commonText.aria.docsNav}
        aria-expanded={open}
        onClick={() => setOpen((previous) => !previous)}
        className="inline-flex items-center rounded-[7px] border border-line bg-paper px-2.5 py-[7px] text-ink focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
      >
        ☰
      </button>
      <div
        aria-hidden="true"
        onClick={close}
        className={cn(
          "fixed inset-0 z-30 bg-black/20 transition-opacity duration-[250ms]",
          open ? "opacity-100" : "pointer-events-none opacity-0",
        )}
      />
      <aside
        inert={!open}
        className={cn(
          "fixed inset-y-0 left-0 z-40 w-[280px] overflow-y-auto border-r border-line-soft bg-sidebar px-4 pt-6 pb-[60px] shadow-[0_0_40px_rgba(0,0,0,0.2)] transition-transform duration-[250ms]",
          open ? "translate-x-0" : "-translate-x-full",
        )}
      >
        <Sidebar />
      </aside>
    </div>
  );
};

export { DocsMobileNav };
