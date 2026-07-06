import type { DocText } from "@/content/docs/types";

const troubleshooting: DocText = {
  "toc.nothing": "Nichts löst aus",
  "toc.ssr": "SSR-Fehler",
  "toc.touch": "Touch",
  "nothingHeading": "onIntent löst nie aus",
  "nothing.provider": "Ist `IntentProvider` oberhalb dieser Links platziert?",
  "nothing.mousemove": "Die Engine läuft erst nach der ersten `mousemove` — bewege den Cursor.",
  "nothing.size": "Sehr kleine oder außerhalb des Bildschirms liegende Ziele erzielen Werte nahe null; gib ihnen echte Trefferflächen.",
  "nothing.wiring": "Probiere `importance=\"high\"` / `cost=\"low\"`, um die Verdrahtung zu bestätigen, und drehe dann zurück.",
  "ssrHeading": "SSR- / \"use client\"-Fehler",
  "ssrBody": "Alle Exporte sind Client-Komponenten. Im App Router platzierst du `IntentProvider` innerhalb einer `\"use client\"`-Grenze; rufe es nicht direkt aus einer Server-Komponente auf.",
  "touchHeading": "Touch-Geräte tun nichts",
  "touchBody": "Auf Touch kommt die Absicht vom **Scrollen**, nicht vom Tippen — siehe [Mobiles Verhalten](mobile-behavior).",
};

export { troubleshooting };
