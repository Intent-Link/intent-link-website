import type { DocText } from "@/content/docs/types";

const installation: DocText = {
  "toc.requirements": "Prérequis",
  "toc.app-router": "App vs Pages Router",
  "intro": "intent-link est livré en ESM + CJS avec les types TypeScript. Installez-le avec le gestionnaire de paquets de votre choix.",
  "requirementsHeading": "Prérequis",
  "col.peer": "Dépendance de pair",
  "col.version": "Version",
  "appRouterHeading": "App Router vs Pages Router",
  "appRouterBody": "Chaque export est un composant client (ils portent `\"use client\"`). Dans l'**App Router**, montez `IntentProvider` dans une frontière client — soit une mise en page `\"use client\"`, soit un petit wrapper client que vous rendez depuis une mise en page serveur. Dans le **Pages Router**, enveloppez votre application dans `pages/_app.jsx`.",
};

export { installation };
