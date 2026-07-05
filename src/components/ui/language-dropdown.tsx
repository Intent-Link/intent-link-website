"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { locales, localeNames, type Locale } from "@/i18n/locales";
import { useLocale } from "@/i18n/locale-provider";
import { useCommonText } from "@/hooks/use-common-text";
import { testIds } from "@/constants/test-ids";
import { cn } from "@/lib/utils";

interface LanguageDropdownProps {
  className?: string;
}

/** Language picker used identically in the nav and footer. */
const LanguageDropdown = ({ className }: LanguageDropdownProps) => {
  const [open, setOpen] = useState(false);
  const { locale, setLocale } = useLocale();
  const router = useRouter();
  const text = useCommonText();

  const selectLocale = (nextLocale: Locale) => {
    setLocale(nextLocale);
    setOpen(false);
    // Re-render Server Components so their copy reflects the new locale cookie.
    router.refresh();
  };

  return (
    <div
      data-testid={testIds.languageDropdown.root}
      className={cn("relative", className)}
    >
      <button
        type="button"
        data-testid={testIds.languageDropdown.trigger}
        aria-haspopup="listbox"
        aria-expanded={open}
        aria-label={text.language.ariaLabel}
        onClick={() => setOpen((previous) => !previous)}
        className="text-sm text-ink-2"
      >
        {localeNames[locale]}
      </button>
      {open && (
        <ul
          role="listbox"
          className="absolute right-0 mt-1 rounded-md border border-line bg-surface py-1"
        >
          {locales.map((option) => (
            <li key={option}>
              <button
                type="button"
                data-testid={testIds.languageDropdown.option}
                onClick={() => selectLocale(option)}
                className="block w-full px-3 py-1 text-left text-sm"
              >
                {localeNames[option]}
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export { LanguageDropdown };
