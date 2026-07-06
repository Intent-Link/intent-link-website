import type { DocText } from "@/content/docs/types";

const howItWorks: DocText = {
  "toc.the-estimate": "L'estimation",
  "toc.scoring": "Évaluer une cible",
  "toc.probability": "Probabilité",
  "intro": "intent-link modélise le mouvement du pointeur comme un système physique. `IntentProvider` exécute une boucle `requestAnimationFrame` qui, à chaque image, estime votre mouvement et évalue chaque cible enregistrée — le résultat est une probabilité en direct par cible.",
  "estimateHeading": "L'estimation",
  "estimateBody": "Les échantillons bruts du pointeur sont bruités. Un **filtre de Kalman** (2D pour le curseur, 1D pour le défilement au toucher) les transforme en une **vitesse** lissée et, surtout, une **incertitude** (σ) — le degré de confiance à accorder à cette estimation à l'instant présent. Un mouvement rapide et droit produit rapidement une estimation sûre ; un mouvement lent et hésitant reste incertain.",
  "scoringHeading": "Évaluer une cible",
  "scoringBody": "Le `weight` de chaque cible combine trois termes exponentiels — deux cinétiques (issus du mouvement) et un potentiel (issu de la géométrie) :",
  "scoringNote": "Une cible grande (grand `w`), proche (petit `d`), et alignée avec un mouvement sûr obtient un score élevé. Une cible minuscule, lointaine ou hors trajectoire obtient un score proche de zéro.",
  "probabilityHeading": "Probabilité et l'option nulle",
  "probabilityBody": "Les poids sont normalisés en probabilités avec un dénominateur de type softmax qui inclut une constante `1` :",
  "nullOption": "Ce `1` en tête est une **option « ne va nulle part »** — les probabilités ne totalisent jamais 1 sur l'ensemble de vos liens, donc le moteur peut rester indécis et simplement ne pas se déclencher. L'état [PhysicsState](intent-context#physicsstate) en direct de chaque cible (probabilité, poids et les trois termes) est exposé via `IntentContext`.",
  "touch": "Sur les appareils tactiles, il n'y a pas de curseur, donc le moteur suit la [vitesse de défilement](mobile-behavior) à la place et évalue les cibles par proximité verticale.",
};

export { howItWorks };
