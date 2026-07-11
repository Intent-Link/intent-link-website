import type { DocText } from "@/content/docs/types";

const intentProvider: DocText = {
  "toc.usage": "Verwendung",
  "toc.notes": "Hinweise",
  "intro": "Context-Provider, der die Vorhersage-Engine betreibt. Platziere ihn **einmal** in deiner `app/layout.jsx`. Alles darin kann `IntentLink` verwenden oder `IntentContext` direkt lesen. Er nimmt **keine Props** entgegen.",
  "usageHeading": "Verwendung",
  "notesHeading": "Hinweise",
  "notes.client": "Er bringt seine eigene `\"use client\"`-Direktive mit und funktioniert somit direkt in einem Server-Layout — du musst ihn nicht umschließen.",
  "notes.provides": "Er stellt `probabilities`, `registerLink` und `unregisterLink` den Nachfahren über `IntentContext` bereit.",
};

export { intentProvider };
