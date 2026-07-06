import type { DocText } from "@/content/docs/types";

const intentContext: DocText = {
  "toc.physicsstate": "PhysicsState",
  "toc.contexttype": "IntentContextType",
  "intro": "La surface bas niveau. Consommez-la pour lire le flux brut de probabilités et enregistrer vos propres éléments — pour la prédiction de cible sur un `<button>`, une carte ou tout élément qui n'est pas un lien.",
  "col.field": "Champ",
  "col.type": "Type",
  "col.meaning": "Signification",
  "physicsStateHeading": "PhysicsState",
  "physicsStateBody": "L'état en direct pour une cible, indexé par id dans `probabilities`.",
  "field.probability": "Vraisemblance normalisée qu'il s'agisse de la cible.",
  "field.weight": "Score non normalisé (produit des trois termes).",
  "field.kineticAgent": "Terme de vitesse de l'agent par rapport à l'incertitude.",
  "field.kineticTarget": "Terme de vitesse relative à la cible.",
  "field.potential": "Terme géométrique (distance et taille).",
  "contextTypeHeading": "IntentContextType",
  "seeAlso": "Voir [Composants personnalisés](custom-components) pour un exemple complet.",
};

export { intentContext };
