import type { Metadata } from "next";
import { Hero } from "../_sections/hero";
import { PredictionFieldDemo } from "../_sections/prediction-field-demo";
import { KalmanLens } from "../_sections/kalman-lens";
import { LatencyRace } from "../_sections/latency-race";
import { CodeExample } from "../_sections/code-example";
import { WhyDifferent } from "../_sections/why-different";
import { BeyondPrefetch } from "../_sections/beyond-prefetch";
import { CtaBand } from "../_sections/cta-band";
import { appRoutes, localeAlternates } from "@/constants/routes";
import { getSectionsText } from "@/i18n/messages/sections";
import type { Locale } from "@/i18n/locales";

interface LandingPageProps {
  params: Promise<{ locale: Locale }>;
}

const generateMetadata = (): Metadata => ({
  alternates: localeAlternates(appRoutes.home),
});

/** Landing page (/[locale]) — composes the marketing sections in order. */
const LandingPage = async ({ params }: LandingPageProps) => {
  const { locale } = await params;
  const text = getSectionsText(locale);

  return (
    <>
      <Hero text={text.hero} locale={locale} />
      <PredictionFieldDemo />
      <KalmanLens text={text.kalmanLens} />
      <LatencyRace />
      <CodeExample text={text.codeExample} locale={locale} />
      <WhyDifferent text={text.whyDifferent} />
      <BeyondPrefetch text={text.beyondPrefetch} />
      <CtaBand text={text.ctaBand} locale={locale} />
    </>
  );
};

export { generateMetadata };
export default LandingPage;
