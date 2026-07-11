import type { DocText } from "@/content/docs/types";

const installation: DocText = {
  "toc.requirements": "Requisitos",
  "toc.app-router": "Montagem",
  "intro": "O intent-link é distribuído como ESM + CJS com tipos TypeScript. Instale com o gerenciador de pacotes de sua preferência.",
  "requirementsHeading": "Requisitos",
  "col.peer": "Dependência de par",
  "col.version": "Versão",
  "appRouterHeading": "Montagem",
  "appRouterBody": "Cada export carrega a sua própria diretiva `\"use client\"`, então você nunca precisa adicionar uma. Monte o `IntentProvider` uma vez no seu `app/layout.jsx` — funciona diretamente dentro de um layout de servidor. Veja o [Quickstart](quickstart) para o trecho completo.",
};

export { installation };
