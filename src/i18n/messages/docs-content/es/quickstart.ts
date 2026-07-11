import type { DocText } from "@/content/docs/types";

const quickstart: DocText = {
  "toc.1-install": "Instalar",
  "toc.2-wrap": "Envuelve tu app",
  "toc.3-links": "Sustituye tus enlaces",
  "intro": "Pasa de la instalación a una predicción funcional en pocos minutos. intent-link observa cómo se mueve el puntero y dispara `onIntent` en cuanto un enlace es el objetivo probable, antes del clic.",
  "installHeading": "1 · Instalar",
  "peerDeps": "Dependencias peer: `react ≥ 18`, `react-dom ≥ 18`, `next ≥ 13`.",
  "wrapHeading": "2 · Envuelve tu app una sola vez",
  "wrapBody": "Monta `IntentProvider` en tu `app/layout.jsx`. Ejecuta el motor de predicción y calcula una probabilidad en vivo para cada objetivo registrado. Incluye su propia directiva `\"use client\"`, así que encaja directamente en el layout de servidor sin ningún envoltorio adicional.",
  "linksHeading": "3 · Sustituye tus enlaces",
  "linksBody": "Usa `IntentLink`, un reemplazo directo de `next/link`, y haz algo en `onIntent`. Se dispara una vez, la primera vez que la utilidad del enlace cruza el cero.",
  "closing": "Eso es la precarga predictiva. A continuación: ajusta [importance y cost](importance-and-cost), o lee las probabilidades en bruto para construir tu propio comportamiento.",
};

export { quickstart };
