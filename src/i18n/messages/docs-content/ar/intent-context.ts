import type { DocText } from "@/content/docs/types";

const intentContext: DocText = {
  "toc.physicsstate": "PhysicsState",
  "toc.contexttype": "IntentContextType",
  "intro": "السطح منخفض المستوى. استهلكه لقراءة تدفق الاحتمالات الخام وتسجيل عناصرك الخاصة للتنبؤ بالهدف على `<button>`، أو بطاقة، أو أي عنصر ليس رابطاً.",
  "col.field": "الحقل",
  "col.type": "النوع",
  "col.meaning": "المعنى",
  "physicsStateHeading": "PhysicsState",
  "physicsStateBody": "الحالة الحية لهدف واحد، مُفهرَسة بالمعرّف في `probabilities`.",
  "field.probability": "احتمال مُطبَّع مقابل الروابط المجاورة.",
  "field.weight": "درجة احتمال خام غير مُطبَّعة لكون هذا هو هدف المستخدم.",
  "field.kineticAgent": "طاقة حركية من سرعة المستخدم.",
  "field.kineticTarget": "طاقة حركية من سرعة الهدف، إن كان في حركة.",
  "field.potential": "طاقة كامنة من المسافة بين المستخدم والهدف.",
  "contextTypeHeading": "IntentContextType",
  "seeAlso": "انظر [المكوّنات المخصّصة](custom-components) لمثال كامل.",
};

export { intentContext };
