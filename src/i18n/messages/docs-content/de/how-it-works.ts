import type { DocText } from "@/content/docs/types";

const howItWorks: DocText = {
  "toc.the-estimate": "Deine Bewegung lesen",
  "toc.scoring": "Dein Ziel hat Anziehungskraft",
  "toc.probability": "Wahrscheinlichkeit",
  "intro": "intent-link modelliert die Zeigerbewegung als physikalisches System. `IntentProvider` betreibt eine Schleife, die in jedem Frame liest, wie du dich bewegst, und jedes registrierte Ziel bewertet. Das Ergebnis ist eine Live-Wahrscheinlichkeit pro Ziel.",
  "estimateHeading": "Deine Bewegung lesen",
  "estimateBody": "Rohe Zeigereingaben sind ruckelig, daher glättet intent-link sie zu einem ruhigen Bild deiner Bewegung — sowohl wie schnell du unterwegs bist als auch wie sicher es sich dieses Bildes gerade sein kann. Eine schnelle, zielstrebige Bewegung liest sich klar; eine langsame, schweifende bleibt mehrdeutig.",
  "scoringHeading": "Dein Ziel hat Anziehungskraft",
  "scoringBody": "Stell dir vor, jedes Ziel hätte seine eigene Anziehungskraft. Ein Ziel zieht umso stärker, je entschlossener deine Bewegung darauf zusteuert und je näher es dort liegt, wohin du unterwegs bist. In jedem Frame verwandelt intent-link diese Anziehung in ein einzelnes `weight` pro Ziel.",
  "scoringNote": "Ein Ziel, das mit einer sicheren Bewegung ausgerichtet ist, erzielt einen hohen Wert. Eines, das abseits liegt — oder auf das deine Bewegung nicht wirklich zusteuert — verblasst gegen null.",
  "probabilityHeading": "Wahrscheinlichkeit & die Null-Option",
  "probabilityBody": "Gewichte werden zu Wahrscheinlichkeiten, indem jedes Ziel gegen seine Nachbarn abgewogen wird, plus einer Konstante `1` im Nenner:",
  "nullOption": "Diese führende `1` ist eine **„nirgendwohin unterwegs“-Option**: Wahrscheinlichkeiten summieren sich über deine Links nie zu 1, sodass die Engine unsicher bleiben und einfach nicht auslösen kann. Der Live-[PhysicsState](intent-context#physicsstate) jedes Ziels wird über `IntentContext` bereitgestellt.",
  "touch": "Auf Touch-Geräten gibt es keinen Cursor, daher verfolgt die Engine stattdessen die [Scrollgeschwindigkeit](mobile-behavior) und bewertet Ziele nach vertikaler Nähe.",
};

export { howItWorks };
