import type { DocText } from "@/content/docs/types";

const mobileBehavior: DocText = {
  "toc.scroll": "Modèle de défilement",
  "toc.diff": "Différences",
  "intro": "Sur les appareils tactiles, il n'y a pas de curseur, donc l'intention provient de la **vitesse de défilement** à la place.",
  "scrollHeading": "Le modèle de défilement",
  "scroll.origin": "L'origine « agent » est fixée près de la position de lecture : `innerWidth × 0.5`, `innerHeight × 0.6`.",
  "scroll.vertical": "Seul l'axe **vertical** est évalué (la distance horizontale est ignorée). Un utilisateur qui décélère près d'une cible signale une intention.",
  "scroll.weight": "Les probabilités ne sont pas normalisées en pesant les liens les uns par rapport aux autres. À la place, le score de probabilité « weight » brut est utilisé.",
  "diffHeading": "Différences par rapport au bureau",
  "diffBody": "Aucun changement n'est nécessaire. Les mêmes `IntentLink` et `onIntent` fonctionnent.",
};

export { mobileBehavior };
