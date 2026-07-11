import type { DocText } from "@/content/docs/types";

const installation: DocText = {
  "toc.requirements": "Anforderungen",
  "toc.app-router": "Einbinden",
  "intro": "intent-link wird als ESM + CJS mit TypeScript-Typen ausgeliefert. Installiere es mit dem Paketmanager deiner Wahl.",
  "requirementsHeading": "Anforderungen",
  "col.peer": "Peer-Abhängigkeit",
  "col.version": "Version",
  "appRouterHeading": "Einbinden",
  "appRouterBody": "Jeder Export bringt seine eigene `\"use client\"`-Direktive mit, sodass du niemals selbst eine hinzufügst. Platziere `IntentProvider` einmal in deiner `app/layout.jsx` — es funktioniert direkt im Server-Layout. Das vollständige Snippet findest du im [Schnellstart](quickstart).",
};

export { installation };
