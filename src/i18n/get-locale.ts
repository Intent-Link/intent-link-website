import { cookies } from "next/headers";
import { defaultLocale, isLocale, localeCookieName, type Locale } from "@/i18n/locales";

/**
 * Server-side active-locale query. Reads the persisted locale cookie and falls
 * back to the default. Used by Server Components, `generateMetadata`, and route
 * handlers; the client mirror is the LocaleProvider seeded from this value.
 */
const getLocale = async (): Promise<Locale> => {
  const cookieStore = await cookies();
  const value = cookieStore.get(localeCookieName)?.value;
  return isLocale(value) ? value : defaultLocale;
};

export { getLocale };
