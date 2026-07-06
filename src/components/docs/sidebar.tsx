"use client";

import { usePathname } from "next/navigation";
import { PrefetchLink } from "@/components/ui/prefetch-link";
import { docsNav } from "@/constants/docs-nav";
import { appRoutes, localePath } from "@/constants/routes";
import { useCommonText } from "@/hooks/use-common-text";
import { useLocale } from "@/i18n/locale-provider";
import { getDocGroupTitle, getDocTitle } from "@/i18n/messages/docs";
import { cn } from "@/utils/class-names";

/** Grouped docs navigation with active-route highlighting. */
const Sidebar = () => {
  const pathname = usePathname();
  const locale = useLocale();
  const commonText = useCommonText();

  return (
    <nav
      aria-label={commonText.aria.docsNav}
      className="sticky top-[76px] space-y-5"
    >
      {docsNav.map((group) => (
        <div key={group.id}>
          <div className="mb-2 px-2.5 font-mono text-[10.5px] uppercase tracking-[0.05em] text-ink-3">
            {getDocGroupTitle(group.id, locale)}
          </div>
          <ul className="space-y-0.5">
            {group.slugs.map((slug) => {
              const href = localePath(locale, appRoutes.docsSlug(slug));
              const isActive = pathname === href;
              return (
                <li key={slug}>
                  <PrefetchLink
                    href={href}
                    aria-current={isActive ? "page" : undefined}
                    className={cn(
                      "block rounded-[7px] px-2.5 py-[7px] text-[13.5px] transition-colors",
                      isActive
                        ? "bg-accent/10 font-semibold text-accent"
                        : "font-medium text-ink-2 hover:text-ink",
                    )}
                  >
                    {getDocTitle(slug, locale)}
                  </PrefetchLink>
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
