import Link from "next/link";
import { LanguageDropdown } from "@/components/ui/language-dropdown";
import { footerGroups, site } from "@/constants/site";
import { testIds } from "@/constants/test-ids";
import { getLocale } from "@/i18n/get-locale";
import { getCommonText } from "@/i18n/messages/common";

/** Footer grid (brand + language picker, Docs, Resources, For AI). TODO: port. */
const Footer = async () => {
  const text = getCommonText(await getLocale());

  return (
    <footer data-testid={testIds.footer.root} className="border-t border-line-soft">
      <div className="mx-auto grid max-w-6xl gap-8 px-6 py-12 md:grid-cols-4">
        <div>
          <div className="font-mono text-sm font-semibold">{site.name}</div>
          <LanguageDropdown />
        </div>
        {footerGroups.map((group) => (
          <div key={group.id} data-testid={testIds.footer.group}>
            <div className="mb-3 text-xs uppercase tracking-wide text-ink-3">
              {text.footer.groupTitles[group.id]}
            </div>
            <ul className="space-y-2">
              {group.links.map((link) => (
                <li key={link.id}>
                  <Link
                    data-testid={testIds.footer.link}
                    href={link.href}
                    className="text-sm text-ink-2"
                  >
                    {text.footer.links[link.id]}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className="border-t border-line-soft px-6 py-4 text-xs text-ink-3">
        {text.footer.copyright(site.name)}
      </div>
    </footer>
  );
};

export { Footer };
