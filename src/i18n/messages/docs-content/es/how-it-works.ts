import type { DocText } from "@/content/docs/types";

const howItWorks: DocText = {
  "toc.the-estimate": "Leer tu movimiento",
  "toc.scoring": "Tu objetivo tiene gravedad",
  "toc.probability": "Probabilidad",
  "intro": "intent-link modela el movimiento del puntero como un sistema físico. `IntentProvider` ejecuta un bucle que, en cada fotograma, lee cómo te mueves y puntúa cada objetivo registrado. El resultado es una probabilidad en vivo por objetivo.",
  "estimateHeading": "Leer tu movimiento",
  "estimateBody": "La entrada del puntero en bruto es inestable, así que intent-link la suaviza hasta obtener una lectura estable de tu movimiento — tanto lo rápido que vas como cuánta confianza puede tener en esa lectura en este momento. Un movimiento rápido y decidido se lee con claridad; uno lento y errático sigue siendo ambiguo.",
  "scoringHeading": "Tu objetivo tiene gravedad",
  "scoringBody": "Piensa que cada objetivo tiene su propia gravedad. Un objetivo tira con más fuerza cuanto más se compromete tu movimiento hacia él y cuanto más cerca está de donde te diriges. En cada fotograma, intent-link convierte ese tirón en un único `weight` por objetivo.",
  "scoringNote": "Un objetivo alineado con un movimiento seguro obtiene una puntuación alta. Uno que queda a un lado — o hacia el que tu movimiento no se compromete realmente — se desvanece hacia cero.",
  "probabilityHeading": "Probabilidad y la opción nula",
  "probabilityBody": "Los pesos se convierten en probabilidades sopesando cada objetivo frente a sus vecinos, más una constante `1` en el denominador:",
  "nullOption": "Ese `1` inicial es una **opción de \"no ir a ninguna parte\"**: las probabilidades nunca suman 1 entre tus enlaces, así que el motor puede permanecer inseguro y simplemente no dispararse. El [PhysicsState](intent-context#physicsstate) en vivo de cada objetivo se expone a través de `IntentContext`.",
  "touch": "En dispositivos táctiles no hay cursor, así que el motor rastrea la [velocidad de desplazamiento](mobile-behavior) en su lugar y puntúa los objetivos por proximidad vertical.",
};

export { howItWorks };
