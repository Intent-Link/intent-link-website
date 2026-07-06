import type { DocText } from "@/content/docs/types";

const importanceAndCost: DocText = {
  "toc.importance": "importance",
  "toc.cost": "cost",
  "toc.picking": "Elegir valores",
  "intro": "La probabilidad es solo evidencia. Si onIntent se dispara realmente lo deciden dos ajustes por enlace que convierten la evidencia en una decisión.",
  "col.value": "Valor",
  "col.weight": "Peso",
  "col.effect": "Efecto",
  "importanceHeading": "importance — con qué facilidad actuar",
  "importanceBody": "Cuánto peso tiene por sí sola la intención predicha. Súbelo para objetivos sobre los que te alegra actuar pronto (un CTA prominente).",
  "importance.high": "Se dispara pronto, con evidencia más débil",
  "importance.medium": "Equilibrado **(predeterminado)**",
  "importance.low": "Espera hasta estar casi seguro",
  "costHeading": "cost — el precio de una suposición errónea",
  "costBody": "Se resta de la utilidad como penalización. Súbelo cuando disparar `onIntent` innecesariamente sea costoso o disruptivo.",
  "cost.high": "Muy cauteloso — necesita evidencia fuerte",
  "cost.medium": "Equilibrado",
  "cost.low": "Agresivo — barato equivocarse **(predeterminado)**",
  "pickingHeading": "Elegir valores",
  "picking.cheap": "**Acción barata** (un `router.prefetch`): importance alto, cost bajo — dispara pronto y a menudo.",
  "picking.expensive": "**Acción costosa** (una llamada a API medida, un websocket): importance más bajo, cost más alto — espera a la casi certeza.",
  "pickingNote": "`onIntent` se dispara una vez; el bloqueo interno se reinicia cuando la probabilidad del objetivo cae por debajo de `0.05`, así que puede dispararse de nuevo en una nueva aproximación.",
};

export { importanceAndCost };
