import type { DocText } from "@/content/docs/types";

const importanceAndCost: DocText = {
  "toc.importance": "importance",
  "toc.cost": "cost",
  "toc.picking": "Choisir les valeurs",
  "intro": "La probabilité n'est qu'une preuve. Le fait que `onIntent` se déclenche réellement est décidé par deux réglages propres à chaque lien — `importance` et `cost` — qui transforment la preuve en décision. `onIntent` se déclenche la première fois que l'utilité d'une cible passe au-dessus de zéro.",
  "exampleLead": "Définissez les deux comme props sur n'importe quel `IntentLink` :",
  "col.value": "Valeur",
  "col.effect": "Effet",
  "importanceHeading": "importance : avec quelle promptitude agir",
  "importanceBody": "Le poids que porte l'intention prédite à elle seule. Augmentez-le pour les cibles sur lesquelles vous êtes prêt à agir tôt (un CTA proéminent).",
  "importance.high": "Se déclenche tôt, sur une preuve plus faible",
  "importance.medium": "Équilibré **(par défaut)**",
  "importance.low": "Attend une quasi-certitude",
  "costHeading": "cost : le prix d'une mauvaise supposition",
  "costBody": "La pénalité pour avoir déclenché `onIntent` alors qu'en fin de compte vous n'alliez pas là. Augmentez-le lorsqu'une mauvaise supposition est coûteuse ou perturbatrice.",
  "cost.high": "Très prudent, exige une preuve solide",
  "cost.medium": "Équilibré",
  "cost.low": "Agressif, peu coûteux de se tromper **(par défaut)**",
  "pickingHeading": "Choisir les valeurs",
  "picking.cheap": "**Action peu coûteuse** (un `router.prefetch`) : importance élevée, coût faible. Déclenchez tôt et souvent.",
  "picking.expensive": "**Action coûteuse** (un appel d'API facturé, un websocket) : importance plus faible, coût plus élevé. Attendez la quasi-certitude.",
  "pickingNote": "`onIntent` se déclenche une fois par approche ; il se réarme après que la probabilité de la cible est retombée, de sorte qu'une nouvelle approche peut le déclencher à nouveau.",
};

export { importanceAndCost };
