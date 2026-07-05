import Link from "next/link";
import { MobileMenu } from "./mobile-menu";
import { LanguageDropdown } from "@/components/ui/language-dropdown";
import { navLinks, site } from "@/constants/site";
import { appRoutes } from "@/constants/routes";
import { testIds } from "@/constants/test-ids";
import { getLocale } from "@/i18n/get-locale";
import { getCommonText } from "@/i18n/messages/common";

/**
 * Sticky, blur-backed nav shared by every page. Server component; the
 * interactive bits (mobile drawer, language picker) are client children.
 * TODO: port markup + sticky/blur styling from Landing.dc.html.
 */
const Navbar = async () => {
  const text = getCommonText(await getLocale());

  return (
    <header
      data-testid={testIds.navbar.root}
      className="sticky top-0 z-50 border-b border-line-soft bg-paper/80 backdrop-blur"
    >
      <nav
        aria-label={text.aria.primaryNav}
        className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4"
      >
        <Link href={appRoutes.home} className="font-mono text-sm font-semibold">
          {site.name}
        </Link>
        <div className="hidden items-center gap-6 md:flex">
          {navLinks.map((navLink) => (
            <Link
              key={navLink.id}
              data-testid={testIds.navbar.link}
              href={navLink.href}
              className="text-sm text-ink-2"
            >
              {text.nav[navLink.id]}
            </Link>
          ))}
          <LanguageDropdown />
        </div>
        <MobileMenu />
      </nav>
    </header>
  );
};

export { Navbar };
