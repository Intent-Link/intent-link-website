import type { DocText } from "@/content/docs/types";

const installation: DocText = {
  "toc.requirements": "Requisitos",
  "toc.app-router": "App vs Pages Router",
  "intro": "intent-link se distribuye como ESM + CJS con tipos de TypeScript. Instálalo con el gestor de paquetes que prefieras.",
  "requirementsHeading": "Requisitos",
  "col.peer": "Dependencia peer",
  "col.version": "Versión",
  "appRouterHeading": "App Router vs Pages Router",
  "appRouterBody": "Cada export es un componente de cliente (llevan `\"use client\"`). En el **App Router**, monta `IntentProvider` en un límite de cliente — ya sea un layout `\"use client\"` o un pequeño envoltorio de cliente que rendericen desde un layout de servidor. En el **Pages Router**, envuelve tu app en `pages/_app.jsx`.",
};

export { installation };
