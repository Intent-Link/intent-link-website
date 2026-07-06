import type { DocText } from "@/content/docs/types";

const mobileBehavior: DocText = {
  "toc.scroll": "Modelo de desplazamiento",
  "toc.diff": "Diferencias",
  "intro": "En dispositivos táctiles (`pointer: coarse`) no hay cursor, así que el motor recurre a la **velocidad de desplazamiento**, pasada por un filtro de Kalman 1D.",
  "scrollHeading": "El modelo de desplazamiento",
  "scroll.origin": "El origen del “agente” se fija cerca de la posición de lectura — `innerWidth × 0.5`, `innerHeight × 0.6`.",
  "scroll.vertical": "Solo se puntúa el eje **vertical** (se ignora la distancia horizontal) — un usuario que desacelera cerca de un objetivo señala intención.",
  "scroll.weight": "Las probabilidades **no** se normalizan con softmax en pantallas táctiles; el `weight` de cada objetivo se usa directamente.",
  "diffHeading": "Diferencias con el escritorio",
  "diffBody": "No hacen falta cambios de código — el mismo `IntentLink` y `onIntent` funcionan. Solo ajusta las expectativas: la intención por desplazamiento es más burda que la trayectoria del cursor, así que considera un `importance` algo más alto para los objetivos clave en móvil.",
};

export { mobileBehavior };
