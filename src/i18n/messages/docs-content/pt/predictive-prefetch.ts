import type { DocText } from "@/content/docs/types";

const predictivePrefetch: DocText = {
  "toc.route": "Pré-carregamento de rota",
  "toc.data": "Dados e cache",
  "intro": "O caso de uso principal. O `IntentLink` desativa o próprio prefetch do next/link, então você decide quando aquecer a rota em `onIntent`.",
  "routeHeading": "Pré-carregamento de rota",
  "routeBody": "Como o `router.prefetch` é barato, use `importance=\"high\"` / `cost=\"low\"` para disparar cedo e com frequência.",
  "dataHeading": "Aquecimento de dados e cache",
  "dataBody": "`onIntent` é apenas um callback — aqueça qualquer coisa: uma busca de dados, uma imagem, uma entrada de cache, um query client.",
};

export { predictivePrefetch };
