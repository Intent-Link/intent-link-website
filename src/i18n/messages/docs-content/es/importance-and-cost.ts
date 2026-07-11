import type { DocText } from "@/content/docs/types";

const importanceAndCost: DocText = {
  "toc.importance": "importance",
  "toc.cost": "cost",
  "toc.picking": "Elegir valores",
  "intro": "La probabilidad es solo evidencia. Si `onIntent` se dispara realmente lo deciden dos ajustes por enlace — `importance` y `cost` — que convierten la evidencia en una decisión. `onIntent` se dispara la primera vez que la utilidad de un objetivo cruza por encima de cero.",
  "exampleLead": "Establece ambos como props en cualquier `IntentLink`:",
  "col.value": "Valor",
  "col.effect": "Efecto",
  "importanceHeading": "importance: con qué facilidad actuar",
  "importanceBody": "Cuánto peso tiene por sí sola la intención predicha. Súbelo para objetivos sobre los que te alegra actuar pronto (un CTA prominente).",
  "importance.high": "Se dispara pronto, con evidencia más débil",
  "importance.medium": "Equilibrado **(predeterminado)**",
  "importance.low": "Espera hasta estar casi seguro",
  "costHeading": "cost: el precio de una suposición errónea",
  "costBody": "La penalización por disparar `onIntent` cuando resulta que no te dirigías allí. Súbelo cuando una suposición errónea sea costosa o disruptiva.",
  "cost.high": "Muy cauteloso, necesita evidencia fuerte",
  "cost.medium": "Equilibrado",
  "cost.low": "Agresivo, barato equivocarse **(predeterminado)**",
  "pickingHeading": "Elegir valores",
  "picking.cheap": "**Acción barata** (un `router.prefetch`): importance alto, cost bajo. Dispara pronto y a menudo.",
  "picking.expensive": "**Acción costosa** (una llamada a la API medida, un websocket): importance más bajo, cost más alto. Espera la casi certeza.",
  "pickingNote": "`onIntent` se dispara una vez por aproximación; se rearma después de que la probabilidad del objetivo vuelve a bajar, así que una nueva aproximación puede dispararlo de nuevo.",
};

export { importanceAndCost };
