import type { DocText } from "@/content/docs/types";

const intentProvider: DocText = {
  "toc.usage": "Utilisation",
  "toc.notes": "Notes",
  "intro": "Fournisseur de contexte qui exécute le moteur de prédiction. Montez-le **une seule fois** dans votre `app/layout.jsx`. Tout ce qui se trouve à l'intérieur peut utiliser `IntentLink` ou lire `IntentContext` directement. Il ne prend **aucune prop**.",
  "usageHeading": "Utilisation",
  "notesHeading": "Notes",
  "notes.client": "Il porte sa propre directive `\"use client\"`, il fonctionne donc directement à l'intérieur d'une mise en page serveur — vous n'avez pas besoin de l'envelopper.",
  "notes.provides": "Il fournit `probabilities`, `registerLink` et `unregisterLink` aux descendants via `IntentContext`.",
};

export { intentProvider };
