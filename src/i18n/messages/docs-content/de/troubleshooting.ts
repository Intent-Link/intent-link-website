import type { DocText } from "@/content/docs/types";

const troubleshooting: DocText = {
  "toc.nothing": "Nichts löst aus",
  "toc.ssr": "SSR-Fehler",
  "nothingHeading": "onIntent löst nie aus",
  "nothing.provider": "Ist `IntentProvider` oberhalb dieser Links platziert?",
  "nothing.mousemove": "Die Engine läuft erst nach der ersten `mousemove` — bewege den Cursor.",
  "nothing.size": "Ziele außerhalb des Bildschirms können nicht bewertet werden — stelle sicher, dass das Ziel tatsächlich gerendert und im sichtbaren Bereich ist.",
  "nothing.wiring": "Probiere `importance=\"high\"` / `cost=\"low\"`, um die Verdrahtung zu bestätigen, und drehe dann zurück.",
  "ssrHeading": "SSR- / \"use client\"-Fehler",
  "ssrBody": "Jeder Export bringt seine eigene `\"use client\"`-Direktive mit und funktioniert direkt in einem Server-Layout, sodass du `\"use client\"` nicht selbst hinzufügst.",
};

export { troubleshooting };
