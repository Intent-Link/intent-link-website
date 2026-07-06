import type { DocText } from "@/content/docs/types";

const intentContext: DocText = {
  "toc.physicsstate": "PhysicsState",
  "toc.contexttype": "IntentContextType",
  "intro": "Низкоуровневая поверхность. Используйте её, чтобы читать сырой поток вероятностей и регистрировать собственные элементы — для предсказания цели на `<button>`, карточке или любом элементе, который не является ссылкой.",
  "col.field": "Поле",
  "col.type": "Тип",
  "col.meaning": "Значение",
  "physicsStateHeading": "PhysicsState",
  "physicsStateBody": "Живое состояние одной цели, ключом является id в `probabilities`.",
  "field.probability": "Нормализованная вероятность того, что это цель.",
  "field.weight": "Ненормализованная оценка (произведение трёх членов).",
  "field.kineticAgent": "Член скорости агента относительно неопределённости.",
  "field.kineticTarget": "Член скорости относительно цели.",
  "field.potential": "Геометрический член (расстояние и размер).",
  "contextTypeHeading": "IntentContextType",
  "seeAlso": "См. [Свои компоненты](custom-components) для полного примера.",
};

export { intentContext };
