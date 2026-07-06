"use client";

import { createContext, useContext, type ReactNode } from "react";
import { defaultLocale, type Locale } from "@/i18n/locales";

const LocaleContext = createContext<Locale>(defaultLocale);

interface LocaleProviderProps {
  children: ReactNode;
  locale?: Locale;
}

/**
 * Read-only locale context for Client Components, seeded from the `[locale]`
 * route segment so the first client render matches the server. Switching
 * language is plain navigation (see LanguageDropdown) — no client state.
 */
const LocaleProvider = ({ children, locale = defaultLocale }: LocaleProviderProps) => {
  return <LocaleContext.Provider value={locale}>{children}</LocaleContext.Provider>;
};

/** The active locale, from the current URL's locale segment. */
const useLocale = (): Locale => useContext(LocaleContext);

export { LocaleProvider, useLocale };
