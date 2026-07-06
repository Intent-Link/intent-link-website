import type { DocText } from "@/content/docs/types";

const howItWorks: DocText = {
  "toc.the-estimate": "Die Schätzung",
  "toc.scoring": "Ziel bewerten",
  "toc.probability": "Wahrscheinlichkeit",
  "intro": "intent-link modelliert die Zeigerbewegung als physikalisches System. `IntentProvider` betreibt eine `requestAnimationFrame`-Schleife, die in jedem Frame deine Bewegung schätzt und jedes registrierte Ziel bewertet — das Ergebnis ist eine Live-Wahrscheinlichkeit pro Ziel.",
  "estimateHeading": "Die Schätzung",
  "estimateBody": "Rohe Zeiger-Abtastwerte sind verrauscht. Ein **Kalman-Filter** (2D für den Cursor, 1D für das Scrollen bei Touch) verwandelt sie in eine geglättete **Geschwindigkeit** und, entscheidend, eine **Unsicherheit** (σ) — wie sehr dieser Schätzung gerade zu trauen ist. Eine schnelle, gerade Bewegung liefert rasch eine sichere Schätzung; eine langsame, schweifende bleibt unsicher.",
  "scoringHeading": "Ein Ziel bewerten",
  "scoringBody": "Das `weight` jedes Ziels kombiniert drei exponentielle Terme — zwei kinetische (aus der Bewegung) und einen potenziellen (aus der Geometrie):",
  "scoringNote": "Ein Ziel, das groß ist (großes `w`), nah (kleines `d`) und mit einer sicheren Bewegung ausgerichtet ist, erzielt einen hohen Wert. Ein winziges, weit entferntes oder abseits der Bahn liegendes Ziel erzielt einen Wert nahe null.",
  "probabilityHeading": "Wahrscheinlichkeit & die Null-Option",
  "probabilityBody": "Gewichte werden mit einem Softmax-artigen Nenner, der eine Konstante `1` enthält, zu Wahrscheinlichkeiten normalisiert:",
  "nullOption": "Diese führende `1` ist eine **„geht nirgendwohin“-Option** — die Wahrscheinlichkeiten summieren sich über deine Links nie zu 1, sodass die Engine unsicher bleiben und einfach nicht auslösen kann. Der Live-[PhysicsState](intent-context#physicsstate) jedes Ziels (Wahrscheinlichkeit, Gewicht und die drei Terme) wird über `IntentContext` bereitgestellt.",
  "touch": "Auf Touch-Geräten gibt es keinen Cursor, daher verfolgt die Engine stattdessen die [Scrollgeschwindigkeit](mobile-behavior) und bewertet Ziele nach vertikaler Nähe.",
};

export { howItWorks };
