import type { DocText } from "@/content/docs/types";

const customComponents: DocText = {
  "toc.register": "registerLink",
  "toc.example": "Beispiel",
  "intro": "Wenn du Vorhersage für etwas willst, das kein Link ist, konsumiere `IntentContext` und registriere das Element selbst.",
  "registerHeading": "registerLink / unregisterLink",
  "registerBody": "Gib jedem Element eine stabile id (`useId`), registriere es beim Mounten, deregistriere es beim Unmounten und lies dann `probabilities[id]`.",
  "exampleHeading": "Beispiel",
};

export { customComponents };
