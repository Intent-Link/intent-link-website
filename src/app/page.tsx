import { Hero } from "./_sections/hero";
import { PredictionFieldDemo } from "./_sections/prediction-field-demo";
import { KalmanLens } from "./_sections/kalman-lens";
import { LatencyRace } from "./_sections/latency-race";
import { CodeExample } from "./_sections/code-example";
import { WhyDifferent } from "./_sections/why-different";
import { BeyondPrefetch } from "./_sections/beyond-prefetch";
import { CtaBand } from "./_sections/cta-band";
import { getLocale } from "@/i18n/get-locale";
import { getSectionsText } from "@/i18n/messages/sections";

/** Landing page (/) — composes the marketing sections in order. */
const LandingPage = async () => {
  const text = getSectionsText(await getLocale());

  return (
    <>
      <Hero text={text.hero} />
      <PredictionFieldDemo text={text.predictionFieldDemo} />
      <KalmanLens text={text.kalmanLens} />
      <LatencyRace text={text.latencyRace} />
      <CodeExample text={text.codeExample} />
      <WhyDifferent text={text.whyDifferent} />
      <BeyondPrefetch text={text.beyondPrefetch} />
      <CtaBand text={text.ctaBand} />
    </>
  );
};

export default LandingPage;
