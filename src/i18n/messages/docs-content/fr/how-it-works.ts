import type { DocText } from "@/content/docs/types";

const howItWorks: DocText = {
  "toc.the-estimate": "Lire votre mouvement",
  "toc.scoring": "Votre cible a une gravité",
  "toc.probability": "Probabilité",
  "intro": "intent-link modélise le mouvement du pointeur comme un système physique. `IntentProvider` exécute une boucle qui, à chaque image, lit la façon dont vous vous déplacez et évalue chaque cible enregistrée. Le résultat est une probabilité en direct par cible.",
  "estimateHeading": "Lire votre mouvement",
  "estimateBody": "L'entrée brute du pointeur est instable, alors intent-link la lisse en une lecture stable de votre mouvement — à la fois votre vitesse et le degré de confiance qu'il peut lui accorder à cet instant. Un mouvement rapide et déterminé se lit clairement ; un mouvement lent et hésitant reste ambigu.",
  "scoringHeading": "Votre cible a une gravité",
  "scoringBody": "Imaginez que chaque cible possède sa propre gravité. Une cible attire d'autant plus fort que votre mouvement s'engage vers elle et qu'elle se trouve proche de l'endroit où vous vous dirigez. À chaque image, intent-link transforme cette attraction en un unique `weight` par cible.",
  "scoringNote": "Une cible alignée avec un mouvement sûr obtient un score élevé. Une cible sur le côté — ou vers laquelle votre mouvement ne s'engage pas vraiment — s'estompe vers zéro.",
  "probabilityHeading": "Probabilité et l'option nulle",
  "probabilityBody": "Les poids deviennent des probabilités en pesant chaque cible par rapport à ses voisines, plus une constante `1` au dénominateur :",
  "nullOption": "Ce `1` en tête est une **option « ne va nulle part »** : les probabilités ne totalisent jamais 1 sur l'ensemble de vos liens, donc le moteur peut rester indécis et simplement ne pas se déclencher. L'état [PhysicsState](intent-context#physicsstate) en direct de chaque cible est exposé via `IntentContext`.",
  "touch": "Sur les appareils tactiles, il n'y a pas de curseur, donc le moteur suit la [vitesse de défilement](mobile-behavior) à la place et évalue les cibles par proximité verticale.",
};

export { howItWorks };
