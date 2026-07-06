import type { DocText } from "@/content/docs/types";

const intentContext: DocText = {
  "toc.physicsstate": "PhysicsState",
  "toc.contexttype": "IntentContextType",
  "intro": "Die Low-Level-Oberfläche. Konsumiere sie, um den rohen Wahrscheinlichkeitsstrom zu lesen und deine eigenen Elemente zu registrieren — für Zielvorhersage an einem `<button>`, einer Karte oder jedem Element, das kein Link ist.",
  "col.field": "Feld",
  "col.type": "Typ",
  "col.meaning": "Bedeutung",
  "physicsStateHeading": "PhysicsState",
  "physicsStateBody": "Der Live-Zustand für ein Ziel, per id in `probabilities` indiziert.",
  "field.probability": "Normalisierte Wahrscheinlichkeit, dass dies das Ziel ist.",
  "field.weight": "Unnormalisierter Wert (Produkt der drei Terme).",
  "field.kineticAgent": "Term der Agent-Geschwindigkeit relativ zur Unsicherheit.",
  "field.kineticTarget": "Term der zielbezogenen Geschwindigkeit.",
  "field.potential": "Geometrie-Term (Distanz & Größe).",
  "contextTypeHeading": "IntentContextType",
  "seeAlso": "Siehe [Eigene Komponenten](custom-components) für ein vollständiges Beispiel.",
};

export { intentContext };
