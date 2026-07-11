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
  "field.probability": "Normalisierte Wahrscheinlichkeit gegenüber benachbarten Links.",
  "field.weight": "Unnormalisierter roher Wahrscheinlichkeitswert, dass dies das Ziel des Nutzers ist.",
  "field.kineticAgent": "Kinetische Energie aus der Geschwindigkeit des Nutzers.",
  "field.kineticTarget": "Kinetische Energie aus der Geschwindigkeit des Ziels, falls es in Bewegung ist.",
  "field.potential": "Potenzielle Energie aus der Distanz zwischen Nutzer und Ziel.",
  "contextTypeHeading": "IntentContextType",
  "seeAlso": "Siehe [Eigene Komponenten](custom-components) für ein vollständiges Beispiel.",
};

export { intentContext };
