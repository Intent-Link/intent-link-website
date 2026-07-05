"use client";

import { createContext, useCallback, useContext, useMemo, useState, type ReactNode } from "react";
import { defaultLocale, localeCookieName, type Locale } from "@/i18n/locales";

interface LocaleContextInfo {
  locale: Locale;
  setLocale: (locale: Locale) => void;
}

const LocaleContext = createContext<LocaleContextInfo | null>(null);

interface LocaleProviderProps {
  children: ReactNode;
  initialLocale?: Locale;
}

const oneYearInSeconds = 60 * 60 * 24 * 365;

/**
 * Holds the active locale on the client, seeded from the server-resolved value
 * so the first render matches. Switching persists to the locale cookie; callers
 * that need Server Components to re-read it should refresh the router afterwards.
 */
const LocaleProvider = ({ children, initialLocale = defaultLocale }: LocaleProviderProps) => {
  const [locale, setLocaleState] = useState<Locale>(initialLocale);

  const setLocale = useCallback((nextLocale: Locale) => {
    setLocaleState(nextLocale);
    document.cookie = `${localeCookieName}=${nextLocale}; path=/; max-age=${oneYearInSeconds}`;
  }, []);

  const value = useMemo<LocaleContextInfo>(() => ({ locale, setLocale }), [locale, setLocale]);

  return <LocaleContext.Provider value={value}>{children}</LocaleContext.Provider>;
};

const useLocale = (): LocaleContextInfo => {
  const context = useContext(LocaleContext);
  if (!context) {
    throw new Error("useLocale must be used within a LocaleProvider");
  }
  return context;
};

export { LocaleProvider, useLocale };
