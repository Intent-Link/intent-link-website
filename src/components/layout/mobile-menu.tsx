"use client";

import { useCallback, useState } from "react";
import Link from "next/link";
import { GithubIcon } from "@/components/ui/github-icon";
import { externalUrls, localePath } from "@/constants/routes";
import { docsEntryPath } from "@/constants/docs-nav";
import { useCommonText } from "@/hooks/use-common-text";
import { useDismissable } from "@/hooks/use-dismissable";
import { useLocale } from "@/i18n/locale-provider";

/** Hamburger toggle + collapsible mobile nav drawer. */
const MobileMenu = () => {
  const [open, setOpen] = useState(false);
  const locale = useLocale();
  const text = useCommonText();

  const close = useCallback(() => setOpen(false), []);

  useDismissable({ when: open, onDismiss: close });

  return (
    <div className="md:hidden">
      <button
        type="button"
        aria-label={text.aria.toggleMenu}
        aria-expanded={open}
        onClick={() => setOpen((previous) => !previous)}
        className="rounded-[7px] border border-line bg-surface p-[8px_11px] text-ink"
      >
        ☰
      </button>
      {open && (
        <div className="absolute inset-x-0 top-full flex flex-col gap-1 border-t border-line-soft bg-surface px-[22px] pt-3 pb-[18px]">
          <Link
            href={localePath(locale, docsEntryPath)}
            onClick={close}
            className="py-[9px] px-1 text-[15px] font-medium text-ink"
          >
            {text.nav.docs}
          </Link>
          <Link
            href={externalUrls.github}
            onClick={close}
            className="flex items-center gap-2 py-[9px] px-1 text-[15px] font-medium text-ink"
          >
            <GithubIcon size={15} />
            {text.nav.github}
          </Link>
          <Link
            href={localePath(locale, docsEntryPath)}
            onClick={close}
            className="mt-2 rounded-[7px] bg-accent p-[11px] text-center font-mono text-[15px] font-semibold text-accent-ink"
          >
            {text.actions.getStarted}
          </Link>
        </div>
      )}
    </div>
  );
};

export { MobileMenu };
