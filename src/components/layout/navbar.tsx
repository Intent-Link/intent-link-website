import Link from "next/link";
import { MobileMenu } from "./mobile-menu";
import { NavBrand } from "./nav-brand";
import { GithubIcon } from "@/components/ui/github-icon";
import { LanguageDropdown } from "@/components/ui/language-dropdown";
import { PrefetchLink } from "@/components/ui/prefetch-link";
import { navLinks } from "@/constants/site";
import { externalUrls, localePath } from "@/constants/routes";
import type { Locale } from "@/i18n/locales";
import { getCommonText } from "@/i18n/messages/common";

interface NavbarProps {
  locale: Locale;
}

/**
 * Sticky, blur-backed nav shared by every page. Server component; the
 * interactive bits (mobile drawer, language picker) are client children.
 * GitHub is special-cased to a bordered icon pill, so it is dropped from the
 * text nav loop.
 */
const Navbar = ({ locale }: NavbarProps) => {
  const text = getCommonText(locale);
  const textLinks = navLinks.filter((navLink) => navLink.id !== "github");

  return (
    <header
      className="sticky top-0 z-50 border-b border-line-soft bg-[rgba(255,255,255,.85)] backdrop-blur-[12px]"
    >
      <nav
        aria-label={text.aria.primaryNav}
        className="flex items-center justify-between px-7 py-2.5"
      >
        <NavBrand />
        <div className="hidden items-center gap-2 md:flex">
          {textLinks.map((navLink) => (
            <PrefetchLink
              key={navLink.id}
              href={localePath(locale, navLink.href)}
              className="rounded-[7px] px-3 py-[7px] text-[13.5px] font-medium text-ink-2 transition-colors hover:text-ink"
            >
              {text.nav[navLink.id]}
            </PrefetchLink>
          ))}
          <Link
            href={externalUrls.github}
            aria-label={text.nav.github}
            className="flex items-center gap-1.5 rounded-[7px] border border-line p-[7px_11px] text-ink-2 transition-colors hover:border-ink/30"
          >
            <GithubIcon />
          </Link>
          <LanguageDropdown />
        </div>
        <MobileMenu />
      </nav>
    </header>
  );
};

export { Navbar };
