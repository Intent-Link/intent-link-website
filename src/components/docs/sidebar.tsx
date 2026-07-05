"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { docsNav } from "@/constants/docs-nav";
import { appRoutes } from "@/constants/routes";
import { testIds } from "@/constants/test-ids";
import { useDocsText } from "@/hooks/use-docs-text";
import { useCommonText } from "@/hooks/use-common-text";
import { cn } from "@/lib/utils";

/** Grouped docs navigation with active-route highlighting. */
const Sidebar = () => {
  const pathname = usePathname();
  const docsText = useDocsText();
  const commonText = useCommonText();

  return (
    <nav
      aria-label={commonText.aria.docsNav}
      data-testid={testIds.sidebar.root}
      className="space-y-6"
    >
      {docsNav.map((group) => (
        <div key={group.id}>
          <div className="mb-2 text-xs font-semibold uppercase tracking-wide text-ink-3">
            {docsText.groupTitle(group.id)}
          </div>
          <ul className="space-y-1">
            {group.slugs.map((slug) => {
              const href = appRoutes.docsSlug(slug);
              const isActive = pathname === href;
              return (
                <li key={slug}>
                  <Link
                    href={href}
                    data-testid={testIds.sidebar.link}
                    aria-current={isActive ? "page" : undefined}
                    className={cn(
                      "block rounded px-2 py-1 text-sm text-ink-2",
                      isActive && "bg-sidebar font-medium text-ink",
                    )}
                  >
                    {docsText.pageTitle(slug)}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      ))}
    </nav>
  );
};

export { Sidebar };
