import type { DocText } from "@/content/docs/types";

const troubleshooting: DocText = {
  "toc.nothing": "No se dispara nada",
  "toc.ssr": "Errores SSR",
  "toc.touch": "Táctil",
  "nothingHeading": "onIntent nunca se dispara",
  "nothing.provider": "¿Está `IntentProvider` montado por encima de estos enlaces?",
  "nothing.mousemove": "El motor solo se ejecuta tras el primer `mousemove` — mueve el cursor.",
  "nothing.size": "Los objetivos muy pequeños o fuera de pantalla puntúan cerca de cero; dales áreas de interacción reales.",
  "nothing.wiring": "Prueba `importance=\"high\"` / `cost=\"low\"` para confirmar el cableado, y luego modéralo.",
  "ssrHeading": "Errores de SSR / \"use client\"",
  "ssrBody": "Todos los exports son componentes de cliente. En el App Router, monta `IntentProvider` dentro de un límite `\"use client\"`; no lo llames directamente desde un componente de servidor.",
  "touchHeading": "Los dispositivos táctiles no hacen nada",
  "touchBody": "En táctil, la intención viene del **desplazamiento**, no del toque — consulta [Comportamiento en móvil](mobile-behavior).",
};

export { troubleshooting };
