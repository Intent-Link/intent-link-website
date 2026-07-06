import type { DocText } from "@/content/docs/types";

const intentProvider: DocText = {
  "toc.usage": "Utilisation",
  "toc.notes": "Notes",
  "intro": "Fournisseur de contexte qui exécute le moteur de prédiction. Montez-le **une seule fois**, près de la racine de votre application. Tout ce qui se trouve à l'intérieur peut utiliser `IntentLink` ou lire `IntentContext` directement. Il ne prend **aucune prop**.",
  "usageHeading": "Utilisation",
  "notesHeading": "Notes",
  "notes.client": "C'est un **composant client** (`\"use client\"`) — dans l'App Router, montez-le à l'intérieur d'une frontière client.",
  "notes.loop": "En interne, il exécute une seule boucle `requestAnimationFrame` et attache à la fois un écouteur `mousemove` et un écouteur `scroll`, en utilisant celui qui convient à l'appareil — le monter plus d'une fois est du gaspillage.",
  "notes.provides": "Il fournit `probabilities`, `registerLink` et `unregisterLink` aux descendants via `IntentContext`.",
};

export { intentProvider };
