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
import { externalUrls } from "@/constants/routes";
import { site } from "@/constants/site";
import { siteOrigin, socialImage } from "@/constants/seo";
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

const generateMetadata = async ({ params }: RootLayoutProps): Promise<Metadata> => {
  const { locale } = await params;
  const metadataText = getMetadataText(isLocale(locale) ? locale : defaultLocale);
  return {
    metadataBase: new URL(siteOrigin),
    title: metadataText.title,
    description: metadataText.description,
    applicationName: site.name,
    authors: site.maintainers.map((name) => ({ name })),
    creator: site.maintainers[0],
    publisher: site.name,
    category: "technology",
    keywords: [
      "intent-link",
      "React prefetch",
      "Next.js prefetch",
      "predictive navigation",
      "user intent prediction",
    ],
    manifest: "/manifest.webmanifest",
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-image-preview": "large",
        "max-snippet": -1,
        "max-video-preview": -1,
      },
    },
    openGraph: {
      type: "website",
      siteName: site.name,
      title: metadataText.title,
      description: metadataText.description,
      images: [{ url: socialImage.path, width: socialImage.width, height: socialImage.height, alt: socialImage.alt }],
    },
    twitter: {
      card: "summary_large_image",
      title: metadataText.title,
      description: metadataText.description,
      images: [socialImage.path],
    },
    other: {
      "npm-package": externalUrls.npm,
      "code-repository": externalUrls.github,
    },
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
