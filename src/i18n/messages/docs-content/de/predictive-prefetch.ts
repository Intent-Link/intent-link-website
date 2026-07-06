import type { DocText } from "@/content/docs/types";

const predictivePrefetch: DocText = {
  "toc.route": "Routen-Vorladung",
  "toc.data": "Daten & Cache",
  "intro": "Der wichtigste Anwendungsfall. `IntentLink` deaktiviert die eigene Vorladung von next/link, sodass du in `onIntent` entscheidest, wann die Route vorgewärmt wird.",
  "routeHeading": "Routen-Vorladung",
  "routeBody": "Da `router.prefetch` günstig ist, verwende `importance=\"high\"` / `cost=\"low\"`, um früh und oft auszulösen.",
  "dataHeading": "Daten- & Cache-Vorwärmung",
  "dataBody": "`onIntent` ist nur ein Callback — wärme alles vor: einen Datenabruf, ein Bild, einen Cache-Eintrag, einen Query-Client.",
};

export { predictivePrefetch };
