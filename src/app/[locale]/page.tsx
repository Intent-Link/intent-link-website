import type { Metadata } from "next";
import { Hero } from "../_sections/hero";
import { BeyondPrefetch } from "../_sections/beyond-prefetch";
import { PredictionFieldDemo } from "../_sections/prediction-field-demo";
import { LatencyRace } from "../_sections/latency-race";
import { WhyDifferent } from "../_sections/why-different";
import { CtaBand } from "../_sections/cta-band";
import { appRoutes, localeAlternates, localePath } from "@/constants/routes";
import { getSectionsText } from "@/i18n/messages/sections";
import { getMetadataText } from "@/i18n/messages/metadata";
import type { Locale } from "@/i18n/locales";
import { site } from "@/constants/site";
import { absoluteUrl, socialImage } from "@/constants/seo";
import { StructuredData } from "@/components/seo/structured-data";

interface LandingPageProps {
  params: Promise<{ locale: Locale }>;
}

const generateMetadata = async ({ params }: LandingPageProps): Promise<Metadata> => {
  const { locale } = await params;
  const metadataText = getMetadataText(locale);
  const url = localePath(locale, appRoutes.home);
  return {
    alternates: localeAlternates(locale, appRoutes.home),
    openGraph: {
      title: metadataText.title,
      description: metadataText.description,
      url,
      locale,
      images: [{ url: socialImage.path, width: socialImage.width, height: socialImage.height, alt: socialImage.alt }],
    },
    twitter: {
      card: "summary_large_image",
      title: metadataText.title,
      description: metadataText.description,
      images: [socialImage.path],
    },
  };
};

/** Landing page (/[locale]) — composes the marketing sections in order. */
const LandingPage = async ({ params }: LandingPageProps) => {
  const { locale } = await params;
  const text = getSectionsText(locale);

  return (
    <>
      <StructuredData
        data={[
          {
            "@context": "https://schema.org",
            "@type": "WebSite",
            name: site.name,
            url: absoluteUrl(urlFor(locale)),
            inLanguage: locale,
          },
          {
            "@context": "https://schema.org",
            "@type": "SoftwareSourceCode",
            name: site.name,
            description: getMetadataText(locale).description,
            codeRepository: "https://github.com/Intent-Link/intent-link-npm",
            programmingLanguage: "TypeScript",
            runtimePlatform: ["React", "Next.js"],
            license: "https://opensource.org/license/mit",
            version: site.version,
          },
        ]}
      />
      <Hero text={text.hero} locale={locale} />
      <BeyondPrefetch text={text.beyondPrefetch} />
      <PredictionFieldDemo />
      <LatencyRace />
      <WhyDifferent text={text.whyDifferent} />
      <CtaBand text={text.ctaBand} locale={locale} />
    </>
  );
};

const urlFor = (locale: Locale) => localePath(locale, appRoutes.home);

export { generateMetadata };
export default LandingPage;
