import type { DocText } from "@/content/docs/types";

const installation: DocText = {
  "toc.requirements": "Requisitos",
  "toc.app-router": "App Router vs Pages Router",
  "intro": "O intent-link é distribuído como ESM + CJS com tipos TypeScript. Instale com o gerenciador de pacotes de sua preferência.",
  "requirementsHeading": "Requisitos",
  "col.peer": "Dependência de par",
  "col.version": "Versão",
  "appRouterHeading": "App Router vs Pages Router",
  "appRouterBody": "Cada export é um componente cliente (eles carregam `\"use client\"`). No **App Router**, monte o `IntentProvider` em uma fronteira cliente — seja um `\"use client\"` layout ou um pequeno wrapper cliente que você renderiza a partir de um layout de servidor. No **Pages Router**, envolva seu app em `pages/_app.jsx`.",
};

export { installation };
