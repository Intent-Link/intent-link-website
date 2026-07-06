import type { DocText } from "@/content/docs/types";

const intentProvider: DocText = {
  "toc.usage": "Uso",
  "toc.notes": "Notas",
  "intro": "Proveedor de contexto que ejecuta el motor de predicción. Móntalo **una vez**, cerca de la raíz de tu app. Todo lo que esté dentro puede usar `IntentLink` o leer `IntentContext` directamente. No recibe **ninguna prop**.",
  "usageHeading": "Uso",
  "notesHeading": "Notas",
  "notes.client": "Es un **componente de cliente** (`\"use client\"`) — en el App Router, móntalo dentro de un límite de cliente.",
  "notes.loop": "Internamente ejecuta un único bucle `requestAnimationFrame` y adjunta tanto un listener de `mousemove` como uno de `scroll`, usando el que convenga al dispositivo — montarlo más de una vez es un desperdicio.",
  "notes.provides": "Provee `probabilities`, `registerLink` y `unregisterLink` a los descendientes a través de `IntentContext`.",
};

export { intentProvider };
