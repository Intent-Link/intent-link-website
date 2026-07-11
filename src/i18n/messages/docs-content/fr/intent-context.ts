import type { DocText } from "@/content/docs/types";

const intentContext: DocText = {
  "toc.physicsstate": "PhysicsState",
  "toc.contexttype": "IntentContextType",
  "intro": "La surface bas niveau. Consommez-la pour lire le flux brut de probabilités et enregistrer vos propres éléments pour la prédiction de cible sur un `<button>`, une carte ou tout élément qui n'est pas un lien.",
  "col.field": "Champ",
  "col.type": "Type",
  "col.meaning": "Signification",
  "physicsStateHeading": "PhysicsState",
  "physicsStateBody": "L'état en direct pour une cible, indexé par id dans `probabilities`.",
  "field.probability": "Probabilité normalisée par rapport aux liens voisins.",
  "field.weight": "Score de probabilité brut non normalisé qu'il s'agisse de la cible de l'utilisateur.",
  "field.kineticAgent": "Énergie cinétique issue de la vitesse de l'utilisateur.",
  "field.kineticTarget": "Énergie cinétique issue de la vitesse de la cible, si elle est en mouvement.",
  "field.potential": "Énergie potentielle issue de la distance entre l'utilisateur et la cible.",
  "contextTypeHeading": "IntentContextType",
  "seeAlso": "Voir [Composants personnalisés](custom-components) pour un exemple complet.",
};

export { intentContext };
