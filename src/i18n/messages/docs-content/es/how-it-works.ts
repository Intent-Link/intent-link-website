import type { DocText } from "@/content/docs/types";

const howItWorks: DocText = {
  "toc.the-estimate": "La estimación",
  "toc.scoring": "Puntuar un objetivo",
  "toc.probability": "Probabilidad",
  "intro": "intent-link modela el movimiento del puntero como un sistema físico. `IntentProvider` ejecuta un bucle `requestAnimationFrame` que, en cada fotograma, estima tu movimiento y puntúa cada objetivo registrado — el resultado es una probabilidad en vivo por objetivo.",
  "estimateHeading": "La estimación",
  "estimateBody": "Las muestras del puntero en bruto son ruidosas. Un **filtro de Kalman** (2D para el cursor, 1D para el desplazamiento en pantallas táctiles) las convierte en una **velocidad** suavizada y, sobre todo, en una **incertidumbre** (σ) — cuánto confiar en esa estimación en este momento. Un movimiento rápido y recto produce una estimación segura rápidamente; uno lento y errático sigue siendo incierto.",
  "scoringHeading": "Puntuar un objetivo",
  "scoringBody": "El `weight` de cada objetivo combina tres términos exponenciales — dos cinéticos (del movimiento) y uno potencial (de la geometría):",
  "scoringNote": "Un objetivo que es grande (gran `w`), cercano (pequeño `d`) y alineado con un movimiento seguro obtiene una puntuación alta. Un objetivo diminuto, lejano o fuera de la trayectoria puntúa cerca de cero.",
  "probabilityHeading": "Probabilidad y la opción nula",
  "probabilityBody": "Los pesos se normalizan en probabilidades con un denominador estilo softmax que incluye una constante `1`:",
  "nullOption": "Ese `1` inicial es una **opción de \"no ir a ninguna parte\"** — las probabilidades nunca suman 1 entre tus enlaces, así que el motor puede seguir inseguro y simplemente no disparar. El [PhysicsState](intent-context#physicsstate) en vivo de cada objetivo (probabilidad, peso y los tres términos) se expone a través de `IntentContext`.",
  "touch": "En dispositivos táctiles no hay cursor, así que el motor rastrea la [velocidad de desplazamiento](mobile-behavior) en su lugar y puntúa los objetivos por proximidad vertical.",
};

export { howItWorks };
