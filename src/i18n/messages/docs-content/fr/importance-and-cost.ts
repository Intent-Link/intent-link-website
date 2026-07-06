import type { DocText } from "@/content/docs/types";

const importanceAndCost: DocText = {
  "toc.importance": "importance",
  "toc.cost": "cost",
  "toc.picking": "Choisir les valeurs",
  "intro": "La probabilité n'est qu'une preuve. Le fait que onIntent se déclenche réellement est décidé par deux réglages propres à chaque lien qui transforment la preuve en décision.",
  "col.value": "Valeur",
  "col.weight": "Poids",
  "col.effect": "Effet",
  "importanceHeading": "importance — avec quelle promptitude agir",
  "importanceBody": "Le poids que porte l'intention prédite à elle seule. Augmentez-le pour les cibles sur lesquelles vous êtes prêt à agir tôt (un CTA proéminent).",
  "importance.high": "Se déclenche tôt, sur une preuve plus faible",
  "importance.medium": "Équilibré **(par défaut)**",
  "importance.low": "Attend une quasi-certitude",
  "costHeading": "cost — le prix d'une mauvaise supposition",
  "costBody": "Soustrait de l'utilité comme pénalité. Augmentez-le lorsque déclencher `onIntent` inutilement est coûteux ou perturbateur.",
  "cost.high": "Très prudent — exige une preuve solide",
  "cost.medium": "Équilibré",
  "cost.low": "Agressif — peu coûteux de se tromper **(par défaut)**",
  "pickingHeading": "Choisir les valeurs",
  "picking.cheap": "**Action peu coûteuse** (un `router.prefetch`) : importance élevée, coût faible — déclenchez tôt et souvent.",
  "picking.expensive": "**Action coûteuse** (un appel d'API facturé, un websocket) : importance plus faible, coût plus élevé — attendez la quasi-certitude.",
  "pickingNote": "`onIntent` se déclenche une fois ; le verrou interne se réinitialise lorsque la probabilité de la cible tombe sous `0.05`, de sorte qu'il peut se déclencher à nouveau lors d'une nouvelle approche.",
};

export { importanceAndCost };
