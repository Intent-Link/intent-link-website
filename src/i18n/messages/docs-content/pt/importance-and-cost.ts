import type { DocText } from "@/content/docs/types";

const importanceAndCost: DocText = {
  "toc.importance": "importance",
  "toc.cost": "cost",
  "toc.picking": "Escolher valores",
  "intro": "A probabilidade é apenas evidência. Se o `onIntent` de fato dispara é decidido por dois controles por link — `importance` e `cost` — que transformam evidência em decisão. O `onIntent` dispara na primeira vez que a utilidade do alvo cruza acima de zero.",
  "exampleLead": "Defina ambas as props em qualquer `IntentLink`:",
  "col.value": "Valor",
  "col.effect": "Efeito",
  "importanceHeading": "importance: quão prontamente agir",
  "importanceBody": "Quanto peso a intenção prevista sozinha carrega. Aumente-o para alvos nos quais você tem prazer em agir cedo (um CTA proeminente).",
  "importance.high": "Dispara cedo, com evidência mais fraca",
  "importance.medium": "Equilibrado **(padrão)**",
  "importance.low": "Espera até estar quase certo",
  "costHeading": "cost: o preço de um palpite errado",
  "costBody": "A penalidade por disparar o `onIntent` quando acontece de você não estar indo para lá. Aumente-o quando um palpite errado for caro ou disruptivo.",
  "cost.high": "Muito cauteloso, precisa de evidência forte",
  "cost.medium": "Equilibrado",
  "cost.low": "Agressivo, barato errar **(padrão)**",
  "pickingHeading": "Escolhendo valores",
  "picking.cheap": "**Ação barata** (um `router.prefetch`): alta importância, baixo custo. Dispare cedo e com frequência.",
  "picking.expensive": "**Ação cara** (uma chamada de API tarifada, um websocket): menor importância, maior custo. Espere a quase-certeza.",
  "pickingNote": "`onIntent` dispara uma vez por aproximação; ele é rearmado depois que a probabilidade do alvo cai novamente, para que uma nova aproximação possa dispará-lo de novo.",
};

export { importanceAndCost };
