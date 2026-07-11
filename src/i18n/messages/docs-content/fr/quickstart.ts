import type { DocText } from "@/content/docs/types";

const quickstart: DocText = {
  "toc.1-install": "Installer",
  "toc.2-wrap": "Envelopper l'app",
  "toc.3-links": "Remplacer les liens",
  "intro": "Passez de l'installation à une prédiction fonctionnelle en quelques minutes. intent-link observe la façon dont le pointeur se déplace et déclenche `onIntent` dès qu'un lien devient la cible probable, avant le clic.",
  "installHeading": "1 · Installer",
  "peerDeps": "Dépendances de pair : `react ≥ 18`, `react-dom ≥ 18`, `next ≥ 13`.",
  "wrapHeading": "2 · Enveloppez votre application une fois",
  "wrapBody": "Montez `IntentProvider` dans votre `app/layout.jsx`. Il exécute le moteur de prédiction et calcule une probabilité en direct pour chaque cible enregistrée. Il porte sa propre directive `\"use client\"`, il s'insère donc directement dans la mise en page serveur sans wrapper supplémentaire.",
  "linksHeading": "3 · Remplacez vos liens",
  "linksBody": "Utilisez `IntentLink`, un remplacement direct de `next/link`, et faites quelque chose dans `onIntent`. Il se déclenche une fois, la première fois que l'utilité du lien franchit zéro.",
  "closing": "Voilà le préchargement prédictif. Ensuite : ajustez [importance et cost](importance-and-cost), ou lisez les probabilités brutes pour créer votre propre comportement.",
};

export { quickstart };
