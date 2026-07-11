import type { DocText } from "@/content/docs/types";

const installation: DocText = {
  "toc.requirements": "Prérequis",
  "toc.app-router": "Montage",
  "intro": "intent-link est livré en ESM + CJS avec les types TypeScript. Installez-le avec le gestionnaire de paquets de votre choix.",
  "requirementsHeading": "Prérequis",
  "col.peer": "Dépendance de pair",
  "col.version": "Version",
  "appRouterHeading": "Montage",
  "appRouterBody": "Chaque export porte sa propre directive `\"use client\"`, vous n'en ajoutez donc jamais vous-même. Montez `IntentProvider` une seule fois dans votre `app/layout.jsx` — il fonctionne directement à l'intérieur de la mise en page serveur. Voir le [Quickstart](quickstart) pour l'extrait complet.",
};

export { installation };
