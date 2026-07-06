"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { appRoutes, localePath } from "@/constants/routes";
import { site } from "@/constants/site";
import { useLocale } from "@/i18n/locale-provider";

/**
 * Wordmark that gains a mono `/ docs` context suffix while on the docs routes,
 * matching the prototype's docs-scoped nav.
 */
const NavBrand = () => {
  const pathname = usePathname();
  const locale = useLocale();
  const inDocs = pathname?.startsWith(localePath(locale, appRoutes.docs)) ?? false;

  return (
    <Link
      href={localePath(locale, appRoutes.home)}
      className="flex items-baseline gap-2 font-sans text-[15.5px] font-bold tracking-[-0.02em]"
    >
      {site.name}
      {inDocs && <span className="font-mono text-[12px] font-normal text-ink-3">/ docs</span>}
    </Link>
  );
};

export { NavBrand };
