import type { DocText } from "@/content/docs/types";

const customComponents: DocText = {
  "toc.register": "registerLink",
  "toc.example": "Exemple",
  "intro": "Lorsque vous voulez de la prédiction sur quelque chose qui n'est pas un lien, consommez `IntentContext` et enregistrez l'élément vous-même.",
  "registerHeading": "registerLink / unregisterLink",
  "registerBody": "Donnez à chaque élément un id stable (`useId`), enregistrez-le au montage, désenregistrez-le au démontage, puis lisez `probabilities[id]`.",
  "exampleHeading": "Exemple",
};

export { customComponents };
