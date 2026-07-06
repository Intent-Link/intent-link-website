import type { DocText } from "@/content/docs/types";

const customComponents: DocText = {
  "toc.register": "registerLink",
  "toc.example": "Ejemplo",
  "intro": "Cuando quieras predicción sobre algo que no es un enlace, consume `IntentContext` y registra el elemento tú mismo.",
  "registerHeading": "registerLink / unregisterLink",
  "registerBody": "Dale a cada elemento un id estable (`useId`), regístralo al montar, elimínalo al desmontar y luego lee `probabilities[id]`.",
  "exampleHeading": "Ejemplo",
};

export { customComponents };
