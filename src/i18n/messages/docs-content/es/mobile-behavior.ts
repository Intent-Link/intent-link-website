import type { DocText } from "@/content/docs/types";

const mobileBehavior: DocText = {
  "toc.scroll": "Modelo de desplazamiento",
  "toc.diff": "Diferencias",
  "intro": "En dispositivos táctiles no hay cursor, así que la intención proviene de la **velocidad de desplazamiento** en su lugar.",
  "scrollHeading": "El modelo de desplazamiento",
  "scroll.origin": "El origen del “agente” se fija cerca de la posición de lectura: `innerWidth × 0.5`, `innerHeight × 0.6`.",
  "scroll.vertical": "Solo se puntúa el eje **vertical** (se ignora la distancia horizontal). Un usuario que desacelera cerca de un objetivo señala intención.",
  "scroll.weight": "Las probabilidades no se normalizan sopesando los enlaces entre sí. En su lugar, se usa la puntuación de probabilidad “weight” en bruto.",
  "diffHeading": "Diferencias con el escritorio",
  "diffBody": "No hacen falta cambios. El mismo `IntentLink` y `onIntent` funcionan.",
};

export { mobileBehavior };
