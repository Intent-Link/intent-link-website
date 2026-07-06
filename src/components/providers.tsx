"use client";

import { IntentProvider } from "intent-link";
import type { ReactNode } from "react";
import { LocaleProvider } from "@/i18n/locale-provider";
import type { Locale } from "@/i18n/locales";

interface ProvidersProps {
  children: ReactNode;
  locale?: Locale;
}

/**
 * Client boundary that mounts the shared app providers once, near the root:
 * the locale context (seeded from the `[locale]` route segment) and the real
 * `intent-link` prediction engine. Kept in its own file so the root layout can
 * stay a Server Component.
 */
const Providers = ({ children, locale }: ProvidersProps) => {
  return (
    <LocaleProvider locale={locale}>
      <IntentProvider>{children}</IntentProvider>
    </LocaleProvider>
  );
};

export { Providers };
