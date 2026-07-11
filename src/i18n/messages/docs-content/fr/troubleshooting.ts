import type { DocText } from "@/content/docs/types";

const troubleshooting: DocText = {
  "toc.nothing": "Rien ne se déclenche",
  "toc.ssr": "Erreurs SSR",
  "nothingHeading": "onIntent ne se déclenche jamais",
  "nothing.provider": "Est-ce que `IntentProvider` est monté au-dessus de ces liens ?",
  "nothing.mousemove": "Le moteur ne s'exécute qu'après le premier `mousemove`, alors déplacez le curseur.",
  "nothing.size": "Les cibles hors écran ne peuvent pas être évaluées — assurez-vous que la cible est bien rendue et dans la zone visible.",
  "nothing.wiring": "Essayez `importance=\"high\"` / `cost=\"low\"` pour confirmer le câblage, puis réduisez.",
  "ssrHeading": "Erreurs SSR / \"use client\"",
  "ssrBody": "Chaque export porte sa propre directive `\"use client\"` et fonctionne directement à l'intérieur d'une mise en page serveur, vous n'ajoutez donc pas `\"use client\"` vous-même.",
};

export { troubleshooting };
