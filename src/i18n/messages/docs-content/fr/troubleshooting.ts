import type { DocText } from "@/content/docs/types";

const troubleshooting: DocText = {
  "toc.nothing": "Rien ne se déclenche",
  "toc.ssr": "Erreurs SSR",
  "toc.touch": "Toucher",
  "nothingHeading": "onIntent ne se déclenche jamais",
  "nothing.provider": "Est-ce que `IntentProvider` est monté au-dessus de ces liens ?",
  "nothing.mousemove": "Le moteur ne s'exécute qu'après le premier `mousemove` — déplacez le curseur.",
  "nothing.size": "Les cibles très petites ou hors écran obtiennent un score proche de zéro ; donnez de vraies zones de clic.",
  "nothing.wiring": "Essayez `importance=\"high\"` / `cost=\"low\"` pour confirmer le câblage, puis réduisez.",
  "ssrHeading": "Erreurs SSR / \"use client\"",
  "ssrBody": "Tous les exports sont des composants client. Dans l'App Router, montez `IntentProvider` à l'intérieur d'une frontière `\"use client\"` ; ne l'appelez pas directement depuis un composant serveur.",
  "touchHeading": "Les appareils tactiles ne font rien",
  "touchBody": "Au toucher, l'intention vient du **défilement**, pas du tapotement — voir [Comportement mobile](mobile-behavior).",
};

export { troubleshooting };
