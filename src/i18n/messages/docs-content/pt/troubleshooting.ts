import type { DocText } from "@/content/docs/types";

const troubleshooting: DocText = {
  "toc.nothing": "Nada dispara",
  "toc.ssr": "Erros de SSR",
  "nothingHeading": "onIntent nunca dispara",
  "nothing.provider": "O `IntentProvider` está montado acima dos links?",
  "nothing.mousemove": "O motor só roda após o primeiro `mousemove`, então mova o cursor.",
  "nothing.size": "Alvos fora da tela não podem ser pontuados — certifique-se de que o alvo está realmente renderizado e dentro da viewport.",
  "nothing.wiring": "Tente `importance=\"high\"` / `cost=\"low\"` para confirmar a conexão, depois reduza.",
  "ssrHeading": "Erros de SSR / \"use client\"",
  "ssrBody": "Cada export carrega a sua própria diretiva `\"use client\"` e funciona diretamente dentro de um layout de servidor, então você não adiciona `\"use client\"` por conta própria.",
};

export { troubleshooting };
