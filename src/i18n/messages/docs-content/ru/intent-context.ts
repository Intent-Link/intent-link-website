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
  "field.probability": "Нормализованная вероятность относительно соседних ссылок.",
  "field.weight": "Ненормализованная сырая оценка вероятности того, что это цель пользователя.",
  "field.kineticAgent": "Кинетическая энергия от скорости пользователя.",
  "field.kineticTarget": "Кинетическая энергия от скорости цели, если она в движении.",
  "field.potential": "Потенциальная энергия от расстояния между пользователем и целью.",
  "contextTypeHeading": "IntentContextType",
  "seeAlso": "См. [Свои компоненты](custom-components) для полного примера.",
};

export { intentContext };
