import type { DocText } from "@/content/docs/types";

const intentLink: DocText = {
  "toc.props": "Props",
  "toc.onintent": "onIntent",
  "toc.example": "Exemplo",
  "intro": "Um substituto direto, ciente de previsão, para o `next/link`. Aceita tudo o que o `next/link` e um `<a>` nativo aceitam; qualquer coisa não listada abaixo passa direto para a âncora. O `ref` é encaminhado.",
  "propsHeading": "Props",
  "col.prop": "Prop",
  "col.type": "Tipo",
  "col.default": "Padrão",
  "col.description": "Descrição",
  "prop.href": "Obrigatório. Igual ao next/link.",
  "prop.importance": "Quão prontamente a intenção prevista dispara onIntent.",
  "prop.cost": "Penalidade por um disparo falso.",
  "prop.onIntent": "Chamado uma vez quando a utilidade cruza zero.",
  "prop.rest": "Qualquer prop do next/link ou da âncora (className, style, ref…).",
  "prefetchNote": "Nota: o `IntentLink` define `prefetch={false}` no `next/link` subjacente. O pré-carregamento é tratado como um consumidor do sinal, nunca forçado.",
  "onIntentHeading": "onIntent",
  "onIntentBody": "Dispara uma vez, na primeira vez que a utilidade do alvo cruza acima de zero. O callback recebe:",
  "exampleHeading": "Exemplo",
};

export { intentLink };
