import type { DocText } from "@/content/docs/types";

const customComponents: DocText = {
  "toc.register": "registerLink",
  "toc.example": "Exemplo",
  "intro": "Quando você quer previsão em algo que não é um link, consuma o `IntentContext` e registre o elemento você mesmo.",
  "registerHeading": "registerLink / unregisterLink",
  "registerBody": "Dê a cada elemento um id estável (`useId`), registre-o na montagem, desregistre-o na desmontagem, depois leia `probabilities[id]`.",
  "exampleHeading": "Exemplo",
};

export { customComponents };
