import type { DocText } from "@/content/docs/types";

const installation: DocText = {
  "toc.requirements": "Requisitos",
  "toc.app-router": "Montaje",
  "intro": "intent-link se distribuye como ESM + CJS con tipos de TypeScript. Instálalo con el gestor de paquetes que prefieras.",
  "requirementsHeading": "Requisitos",
  "col.peer": "Dependencia peer",
  "col.version": "Versión",
  "appRouterHeading": "Montaje",
  "appRouterBody": "Cada export incluye su propia directiva `\"use client\"`, así que nunca añades una tú mismo. Monta `IntentProvider` una sola vez en tu `app/layout.jsx` — funciona directamente dentro del layout de servidor. Consulta la [guía de inicio rápido](quickstart) para ver el fragmento completo.",
};

export { installation };
