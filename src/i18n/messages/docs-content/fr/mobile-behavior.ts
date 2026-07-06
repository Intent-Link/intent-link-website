import type { DocText } from "@/content/docs/types";

const mobileBehavior: DocText = {
  "toc.scroll": "Modèle de défilement",
  "toc.diff": "Différences",
  "intro": "Sur les appareils tactiles (`pointer: coarse`), il n'y a pas de curseur, donc le moteur se rabat sur la **vitesse de défilement**, passée par un filtre de Kalman 1D.",
  "scrollHeading": "Le modèle de défilement",
  "scroll.origin": "L'origine « agent » est fixée près de la position de lecture — `innerWidth × 0.5`, `innerHeight × 0.6`.",
  "scroll.vertical": "Seul l'axe **vertical** est évalué (la distance horizontale est ignorée) — un utilisateur qui décélère près d'une cible signale une intention.",
  "scroll.weight": "Les probabilités ne sont **pas** normalisées par softmax au toucher ; le `weight` de chaque cible est utilisé directement.",
  "diffHeading": "Différences par rapport au bureau",
  "diffBody": "Aucun changement de code n'est nécessaire — les mêmes `IntentLink` et `onIntent` fonctionnent. Ajustez simplement vos attentes : l'intention par défilement est plus grossière que la trajectoire du curseur, envisagez donc une `importance` légèrement plus élevée pour les cibles clés sur mobile.",
};

export { mobileBehavior };
