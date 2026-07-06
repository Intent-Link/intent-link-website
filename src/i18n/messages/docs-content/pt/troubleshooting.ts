import type { DocText } from "@/content/docs/types";

const troubleshooting: DocText = {
  "toc.nothing": "Nada dispara",
  "toc.ssr": "Erros de SSR",
  "toc.touch": "Toque",
  "nothingHeading": "onIntent nunca dispara",
  "nothing.provider": "O `IntentProvider` está montado acima desses links?",
  "nothing.mousemove": "O motor só roda após o primeiro `mousemove` — mova o cursor.",
  "nothing.size": "Alvos muito pequenos ou fora da tela pontuam perto de zero; dê áreas de clique reais.",
  "nothing.wiring": "Tente `importance=\"high\"` / `cost=\"low\"` para confirmar a conexão, depois reduza.",
  "ssrHeading": "Erros de SSR / \"use client\"",
  "ssrBody": "Todos os exports são componentes cliente. No App Router, monte o `IntentProvider` dentro de uma fronteira `\"use client\"`; não o chame diretamente de um componente de servidor.",
  "touchHeading": "Dispositivos de toque não fazem nada",
  "touchBody": "No toque, a intenção vem da **rolagem**, não do toque — veja [Comportamento móvel](mobile-behavior).",
};

export { troubleshooting };
