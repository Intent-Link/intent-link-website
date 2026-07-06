import type { DocText } from "@/content/docs/types";

const importanceAndCost: DocText = {
  "toc.importance": "importance",
  "toc.cost": "cost",
  "toc.picking": "Escolher valores",
  "intro": "A probabilidade é apenas evidência. Se o onIntent de fato dispara é decidido por dois controles por link que transformam evidência em decisão.",
  "col.value": "Valor",
  "col.weight": "Peso",
  "col.effect": "Efeito",
  "importanceHeading": "importance — quão prontamente agir",
  "importanceBody": "Quanto peso a intenção prevista sozinha carrega. Aumente-o para alvos nos quais você tem prazer em agir cedo (um CTA proeminente).",
  "importance.high": "Dispara cedo, com evidência mais fraca",
  "importance.medium": "Equilibrado **(padrão)**",
  "importance.low": "Espera até estar quase certo",
  "costHeading": "cost — o preço de um palpite errado",
  "costBody": "Subtraído da utilidade como penalidade. Aumente-o quando disparar `onIntent` desnecessariamente for caro ou disruptivo.",
  "cost.high": "Muito cauteloso — precisa de evidência forte",
  "cost.medium": "Equilibrado",
  "cost.low": "Agressivo — barato errar **(padrão)**",
  "pickingHeading": "Escolhendo valores",
  "picking.cheap": "**Ação barata** (um `router.prefetch`): alta importância, baixo custo — dispare cedo e com frequência.",
  "picking.expensive": "**Ação cara** (uma chamada de API tarifada, um websocket): menor importância, maior custo — espere a quase-certeza.",
  "pickingNote": "`onIntent` dispara uma vez; a trava interna é reiniciada quando a probabilidade do alvo cai abaixo de `0.05`, para que possa disparar novamente em uma nova aproximação.",
};

export { importanceAndCost };
