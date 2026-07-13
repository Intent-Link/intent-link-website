import { NextResponse, type NextRequest } from "next/server";
import { detectLocale } from "@/i18n/detect-locale";
import { localeCookieName } from "@/i18n/locales";

/** Choose a language only at the bare domain; explicit locale URLs are stable. */
export const proxy = (request: NextRequest) => {
  const locale = detectLocale(
    request.cookies.get(localeCookieName)?.value,
    request.headers.get("accept-language"),
  );
  return NextResponse.redirect(new URL(`/${locale}`, request.url), 307);
};

export const config = { matcher: ["/"] };
