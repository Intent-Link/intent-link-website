import type { DocText } from "@/content/docs/types";

const importanceAndCost: DocText = {
  "toc.importance": "importance",
  "toc.cost": "cost",
  "toc.picking": "Werte wählen",
  "intro": "Die Wahrscheinlichkeit ist nur ein Indiz. Ob onIntent tatsächlich auslöst, entscheiden zwei Regler pro Link, die aus dem Indiz eine Entscheidung machen.",
  "col.value": "Wert",
  "col.weight": "Gewicht",
  "col.effect": "Wirkung",
  "importanceHeading": "importance — wie bereitwillig gehandelt wird",
  "importanceBody": "Wie viel Gewicht die vorhergesagte Absicht allein trägt. Erhöhe es für Ziele, bei denen du gern früh handelst (ein prominenter CTA).",
  "importance.high": "Löst früh aus, bei schwächerem Indiz",
  "importance.medium": "Ausgewogen **(Standard)**",
  "importance.low": "Wartet bis nahezu sicher",
  "costHeading": "cost — der Preis einer Fehleinschätzung",
  "costBody": "Wird als Strafe vom Nutzen abgezogen. Erhöhe es, wenn ein unnötiges Auslösen von `onIntent` teuer oder störend ist.",
  "cost.high": "Sehr vorsichtig — braucht starkes Indiz",
  "cost.medium": "Ausgewogen",
  "cost.low": "Aggressiv — günstig, falsch zu liegen **(Standard)**",
  "pickingHeading": "Werte wählen",
  "picking.cheap": "**Günstige Aktion** (ein `router.prefetch`): hohe importance, niedrige cost — früh und oft auslösen.",
  "picking.expensive": "**Teure Aktion** (ein abgerechneter API-Aufruf, ein Websocket): niedrigere importance, höhere cost — auf Beinahe-Gewissheit warten.",
  "pickingNote": "`onIntent` löst einmal aus; die interne Sperre setzt sich zurück, wenn die Wahrscheinlichkeit des Ziels unter `0.05` fällt, sodass es bei einer erneuten Annäherung wieder auslösen kann.",
};

export { importanceAndCost };
