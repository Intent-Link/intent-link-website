import type { DocText } from "@/content/docs/types";

const troubleshooting: DocText = {
  "toc.nothing": "No se dispara nada",
  "toc.ssr": "Errores SSR",
  "nothingHeading": "onIntent nunca se dispara",
  "nothing.provider": "¿Está `IntentProvider` montado por encima de estos enlaces?",
  "nothing.mousemove": "El motor solo se ejecuta tras el primer `mousemove`, así que mueve el cursor.",
  "nothing.size": "Los objetivos fuera de pantalla no pueden puntuarse — asegúrate de que el objetivo se renderiza realmente y está en el viewport.",
  "nothing.wiring": "Prueba `importance=\"high\"` / `cost=\"low\"` para confirmar el cableado, y luego modéralo.",
  "ssrHeading": "Errores de SSR / \"use client\"",
  "ssrBody": "Cada export incluye su propia directiva `\"use client\"` y funciona directamente dentro de un layout de servidor, así que no añades `\"use client\"` tú mismo.",
};

export { troubleshooting };
