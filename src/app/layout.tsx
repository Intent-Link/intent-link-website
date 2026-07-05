import type { Metadata } from "next";
import { Schibsted_Grotesk, IBM_Plex_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Providers } from "@/components/providers";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { getLocale } from "@/i18n/get-locale";
import { getMetadataText } from "@/i18n/messages/metadata";
import "./globals.css";

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

const generateMetadata = async (): Promise<Metadata> => {
  const metadataText = getMetadataText(await getLocale());
  return {
    title: metadataText.title,
    description: metadataText.description,
  };
};

interface RootLayoutProps {
  children: React.ReactNode;
}

const RootLayout = async ({ children }: RootLayoutProps) => {
  const locale = await getLocale();

  return (
    <html
      lang={locale}
      className={`${schibsted.variable} ${plexMono.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col">
        <Providers initialLocale={locale}>
          <Navbar />
          <main className="flex-1">{children}</main>
          <Footer />
        </Providers>
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
};

export { generateMetadata };
export default RootLayout;
