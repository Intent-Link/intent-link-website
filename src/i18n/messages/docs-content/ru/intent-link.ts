import type { DocText } from "@/content/docs/types";

const intentLink: DocText = {
  "toc.props": "Свойства",
  "toc.onintent": "onIntent",
  "toc.example": "Пример",
  "intro": "Замена `next/link` «из коробки» с поддержкой предсказания. Принимает всё, что принимают `next/link` и нативный `<a>`; всё, что не перечислено ниже, передаётся напрямую в якорь. `ref` пробрасывается.",
  "propsHeading": "Свойства",
  "col.prop": "Свойство",
  "col.type": "Тип",
  "col.default": "По умолчанию",
  "col.description": "Описание",
  "prop.href": "Обязательно. То же, что у next/link.",
  "prop.importance": "Насколько охотно предсказанное намерение вызывает onIntent.",
  "prop.cost": "Штраф за ложное срабатывание.",
  "prop.onIntent": "Вызывается один раз, когда полезность пересекает ноль.",
  "prop.rest": "Любое свойство next/link или якоря (className, style, ref…).",
  "prefetchNote": "Примечание: `IntentLink` устанавливает `prefetch={false}` на нижележащем `next/link` — предзагрузка рассматривается как один из потребителей сигнала, а не навязывается принудительно.",
  "onIntentHeading": "onIntent",
  "onIntentBody": "Срабатывает один раз, в первый момент, когда `(probability × importanceWeight) − costWeight > 0`. Блокировка сбрасывается, когда вероятность падает ниже `0.05`, поэтому оно может сработать снова. Колбэк получает:",
  "exampleHeading": "Пример",
};

export { intentLink };
