import type { DocText } from "@/content/docs/types";

const quickstart: DocText = {
  "toc.1-install": "Installieren",
  "toc.2-wrap": "App umschließen",
  "toc.3-links": "Links tauschen",
  "intro": "Komm in wenigen Minuten von der Installation zu einer funktionierenden Vorhersage. intent-link beobachtet die Zeigerbewegung, schätzt mit einem Kalman-Filter, wohin sie steuert, und löst onIntent aus, sobald ein Link das wahrscheinliche Ziel ist — vor dem Klick.",
  "installHeading": "1 · Installieren",
  "peerDeps": "Peer-Abhängigkeiten: `react ≥ 18`, `react-dom ≥ 18`, `next ≥ 13`.",
  "wrapHeading": "2 · Umschließe deine App einmalig",
  "wrapBody": "Platziere `IntentProvider` nahe der Wurzel. Es betreibt die Vorhersage-Engine und berechnet eine Live-Wahrscheinlichkeit für jedes registrierte Ziel. Es ist eine Client-Komponente, muss im App Router also innerhalb einer `\"use client\"`-Grenze liegen.",
  "linksHeading": "3 · Tausche deine Links aus",
  "linksBody": "Verwende `IntentLink` — einen direkten Ersatz für `next/link` — und tue etwas in `onIntent`. Es löst einmal aus, sobald der Nutzen des Links erstmals die Null überschreitet.",
  "closing": "Das ist prädiktive Vorladung. Als Nächstes: justiere [importance & cost](importance-and-cost), oder lies die rohen Wahrscheinlichkeiten, um dein eigenes Verhalten zu bauen.",
};

export { quickstart };
