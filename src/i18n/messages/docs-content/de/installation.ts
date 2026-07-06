import type { DocText } from "@/content/docs/types";

const installation: DocText = {
  "toc.requirements": "Anforderungen",
  "toc.app-router": "App vs. Pages Router",
  "intro": "intent-link wird als ESM + CJS mit TypeScript-Typen ausgeliefert. Installiere es mit dem Paketmanager deiner Wahl.",
  "requirementsHeading": "Anforderungen",
  "col.peer": "Peer-Abhängigkeit",
  "col.version": "Version",
  "appRouterHeading": "App Router vs. Pages Router",
  "appRouterBody": "Jeder Export ist eine Client-Komponente (sie tragen `\"use client\"`). Im **App Router** platzierst du `IntentProvider` in einer Client-Grenze — entweder ein `\"use client\"`-Layout oder ein kleiner Client-Wrapper, den du aus einem Server-Layout renderst. Im **Pages Router** umschließt du deine App in `pages/_app.jsx`.",
};

export { installation };
