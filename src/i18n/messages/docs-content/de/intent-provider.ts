import type { DocText } from "@/content/docs/types";

const intentProvider: DocText = {
  "toc.usage": "Verwendung",
  "toc.notes": "Hinweise",
  "intro": "Context-Provider, der die Vorhersage-Engine betreibt. Platziere ihn **einmal**, nahe der Wurzel deiner App. Alles darin kann `IntentLink` verwenden oder `IntentContext` direkt lesen. Er nimmt **keine Props** entgegen.",
  "usageHeading": "Verwendung",
  "notesHeading": "Hinweise",
  "notes.client": "Es ist eine **Client-Komponente** (`\"use client\"`) — im App Router platzierst du sie innerhalb einer Client-Grenze.",
  "notes.loop": "Intern betreibt sie eine einzige `requestAnimationFrame`-Schleife und hängt sowohl einen `mousemove`- als auch einen `scroll`-Listener an, je nachdem, was zum Gerät passt — mehr als einmal zu platzieren ist verschwenderisch.",
  "notes.provides": "Sie stellt `probabilities`, `registerLink` und `unregisterLink` den Nachfahren über `IntentContext` bereit.",
};

export { intentProvider };
