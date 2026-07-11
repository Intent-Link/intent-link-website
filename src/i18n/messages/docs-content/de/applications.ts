import type { DocText } from "@/content/docs/types";

const applications: DocText = {
  "toc.route": "Route vorladen",
  "toc.data": "Daten vorladen",
  "toc.asset": "Asset vorladen",
  "intro": "`onIntent` ist einfach ein Callback, der in dem Moment auslöst, in dem ein Link zum wahrscheinlichen Ziel wird. Dieses eine Signal hat viele Verwendungszwecke — hier sind drei gängige.",
  "routeHeading": "Route vorladen",
  "routeBody": "Der wichtigste Anwendungsfall. `IntentLink` deaktiviert die eigene Vorladung von `next/link`, sodass du entscheidest, wann die Route vorgewärmt wird. Da `router.prefetch` günstig ist, verwende `importance=\"high\"` / `cost=\"low\"`, um früh und oft auszulösen.",
  "dataHeading": "Daten vorladen",
  "dataBody": "Routen sind nicht das Einzige, was du vorwärmen kannst. Stoße die Daten an, die die nächste Seite benötigt — eine Query, einen API-Aufruf, einen Cache-Eintrag — damit sie vor dem Klick bereitstehen.",
  "assetHeading": "Asset vorladen",
  "assetBody": "Schwere Medien passen hervorragend. Beginne mit dem Laden des Hero-Bilds, Videos oder der Schrift des Ziels, sobald Absicht erkannt wird, damit sie beim Rendern der Seite bereits dekodiert und im Cache sind.",
};

export { applications };
