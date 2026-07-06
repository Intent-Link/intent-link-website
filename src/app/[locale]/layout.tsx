import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { Schibsted_Grotesk, IBM_Plex_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Providers } from "@/components/providers";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { locales, isLocale, defaultLocale, getTextDirection } from "@/i18n/locales";
import { getMetadataText } from "@/i18n/messages/metadata";
import "../globals.css";

const schibsted = Schibsted_Grotesk({
  variable: "--font-schibsted",
  subsets: ["latin"],
  display: "swap",
});

const plexMono = IBM_Plex_Mono({
  variable: "--font-plex-mono",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  display: "swap",
});

/**
 * Pre-render every locale. Unknown params stay allowed (dynamicParams default)
 * so bad paths reach the notFound() guards below and render the branded
 * [locale]/not-found.tsx — `dynamicParams = false` would reject them at the
 * routing layer and serve Next's bare default 404 instead.
 */
const generateStaticParams = () => locales.map((locale) => ({ locale }));

interface RootLayoutProps {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}

// Absolute base for relative metadata URLs (hreflang alternates). Without it,
// non-Vercel builds resolve alternates against Next's localhost fallback.
const siteOrigin =
  process.env.NEXT_PUBLIC_SITE_URL ??
  (process.env.VERCEL_PROJECT_PRODUCTION_URL
    ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
    : "http://localhost:3000");

const generateMetadata = async ({ params }: RootLayoutProps): Promise<Metadata> => {
  const { locale } = await params;
  const metadataText = getMetadataText(isLocale(locale) ? locale : defaultLocale);
  return {
    metadataBase: new URL(siteOrigin),
    title: metadataText.title,
    description: metadataText.description,
  };
};

const RootLayout = async ({ children, params }: RootLayoutProps) => {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();

  return (
    <html
      lang={locale}
      dir={getTextDirection(locale)}
      className={`${schibsted.variable} ${plexMono.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col">
        <Providers locale={locale}>
          <Navbar locale={locale} />
          <main className="flex-1">{children}</main>
          <Footer locale={locale} />
        </Providers>
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
};

export { generateStaticParams, generateMetadata };
export default RootLayout;
