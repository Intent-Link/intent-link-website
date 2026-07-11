import type { DocText } from "@/content/docs/types";

const intentProvider: DocText = {
  "toc.usage": "Uso",
  "toc.notes": "Notas",
  "intro": "Proveedor de contexto que ejecuta el motor de predicción. Móntalo **una vez** en tu `app/layout.jsx`. Todo lo que esté dentro puede usar `IntentLink` o leer `IntentContext` directamente. No recibe **ninguna prop**.",
  "usageHeading": "Uso",
  "notesHeading": "Notas",
  "notes.client": "Incluye su propia directiva `\"use client\"`, así que funciona directamente dentro de un layout de servidor — no necesitas envolverlo.",
  "notes.provides": "Provee `probabilities`, `registerLink` y `unregisterLink` a los descendientes a través de `IntentContext`.",
};

export { intentProvider };
