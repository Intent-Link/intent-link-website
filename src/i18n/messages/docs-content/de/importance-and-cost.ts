import type { DocText } from "@/content/docs/types";

const importanceAndCost: DocText = {
  "toc.importance": "importance",
  "toc.cost": "cost",
  "toc.picking": "Werte wählen",
  "intro": "Die Wahrscheinlichkeit ist nur ein Indiz. Ob `onIntent` tatsächlich auslöst, entscheiden zwei Regler pro Link — `importance` und `cost` —, die aus dem Indiz eine Entscheidung machen. `onIntent` löst beim ersten Mal aus, sobald der Nutzen eines Ziels über null steigt.",
  "exampleLead": "Setze beide als Props auf einem beliebigen `IntentLink`:",
  "col.value": "Wert",
  "col.effect": "Wirkung",
  "importanceHeading": "importance — wie bereitwillig gehandelt wird",
  "importanceBody": "Wie viel Gewicht die vorhergesagte Absicht allein trägt. Erhöhe es für Ziele, bei denen du gern früh handelst (ein prominenter CTA).",
  "importance.high": "Löst früh aus, bei schwächerem Indiz",
  "importance.medium": "Ausgewogen **(Standard)**",
  "importance.low": "Wartet bis nahezu sicher",
  "costHeading": "cost — der Preis einer Fehleinschätzung",
  "costBody": "Die Strafe dafür, `onIntent` auszulösen, wenn sich herausstellt, dass du gar nicht dorthin unterwegs warst. Erhöhe es, wenn eine Fehleinschätzung teuer oder störend ist.",
  "cost.high": "Sehr vorsichtig — braucht starkes Indiz",
  "cost.medium": "Ausgewogen",
  "cost.low": "Aggressiv — günstig, falsch zu liegen **(Standard)**",
  "pickingHeading": "Werte wählen",
  "picking.cheap": "**Günstige Aktion** (ein `router.prefetch`): hohe importance, niedrige cost — früh und oft auslösen.",
  "picking.expensive": "**Teure Aktion** (ein abgerechneter API-Aufruf, ein Websocket): niedrigere importance, höhere cost — auf Beinahe-Gewissheit warten.",
  "pickingNote": "`onIntent` löst einmal pro Annäherung aus; es wird wieder scharfgeschaltet, nachdem die Wahrscheinlichkeit des Ziels zurückgefallen ist, sodass eine erneute Annäherung es erneut auslösen kann.",
};

export { importanceAndCost };
