import { LanguageDropdown } from "@/components/ui/language-dropdown";
import { PrefetchLink } from "@/components/ui/prefetch-link";
import { footerGroups, site } from "@/constants/site";
import { isLocaleFreePath, localePath } from "@/constants/routes";
import type { Locale } from "@/i18n/locales";
import { getCommonText } from "@/i18n/messages/common";

interface FooterProps {
  locale: Locale;
}

/** Footer grid (brand + language picker, Docs, Resources, For AI). */
const Footer = ({ locale }: FooterProps) => {
  const text = getCommonText(locale);

  return (
    <footer
      className="border-t border-line-soft bg-sidebar"
    >
      <div className="mx-auto grid max-w-[1240px] gap-8 px-8 py-[56px] pb-10 md:grid-cols-[1.5fr_1fr_1fr_1fr]">
        <div>
          <div className="mb-3 flex items-center gap-2">
            <span className="font-sans text-[15px] font-bold tracking-[-0.02em]">
              {site.name}
            </span>
            <span className="font-mono text-[11px] text-ink-3">v{site.version}</span>
          </div>
          <p className="mb-[18px] max-w-[34ch] text-[13px] leading-[1.5] text-ink-2">
            {text.footer.tagline}
          </p>
          <LanguageDropdown openUp boxed />
        </div>
        {footerGroups.map((group) => (
          <div key={group.id}>
            <div className="mb-[14px] font-mono text-[11px] uppercase tracking-[0.04em] text-ink-3">
              {text.footer.groupTitles[group.id]}
            </div>
            <div className="flex flex-col gap-[9px]">
              {group.links.map((link) => {
                // LLM feeds are route handlers, not pages — plain anchor, no client prefetch.
                const internal = link.href.startsWith("/") && !isLocaleFreePath(link.href);
                const LinkComponent = internal ? PrefetchLink : "a";
                return (
                  <LinkComponent
                    key={link.id}
                    href={internal ? localePath(locale, link.href) : link.href}
                    className="text-[13.5px] text-ink-2 transition-colors hover:text-ink"
                  >
                    {text.footer.links[link.id]}
                  </LinkComponent>
                );
              })}
            </div>
          </div>
        ))}
      </div>
      <div className="mx-auto flex max-w-[1240px] flex-wrap justify-between gap-3 border-t border-line-soft px-8 py-4 font-mono text-[11.5px] text-ink-3">
        <span>{text.footer.copyright(site.name)}</span>
        <span>{text.footer.builtLine}</span>
      </div>
    </footer>
  );
};

export { Footer };
