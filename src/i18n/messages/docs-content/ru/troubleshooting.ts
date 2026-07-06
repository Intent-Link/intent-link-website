import type { DocText } from "@/content/docs/types";

const troubleshooting: DocText = {
  "toc.nothing": "Не срабатывает",
  "toc.ssr": "Ошибки SSR",
  "toc.touch": "Сенсор",
  "nothingHeading": "onIntent никогда не срабатывает",
  "nothing.provider": "Смонтирован ли `IntentProvider` над этими ссылками?",
  "nothing.mousemove": "Движок запускается только после первого `mousemove` — подвигайте курсор.",
  "nothing.size": "Очень маленькие или находящиеся вне экрана цели получают оценку около нуля; дайте им реальные области попадания.",
  "nothing.wiring": "Попробуйте `importance=\"high\"` / `cost=\"low\"`, чтобы проверить подключение, затем убавьте.",
  "ssrHeading": "Ошибки SSR / \"use client\"",
  "ssrBody": "Все экспорты — клиентские компоненты. В App Router монтируйте `IntentProvider` внутри границы `\"use client\"`; не вызывайте его напрямую из серверного компонента.",
  "touchHeading": "На сенсорных устройствах ничего не происходит",
  "touchBody": "На сенсоре намерение исходит из **прокрутки**, а не из касания — см. [Поведение на мобильных](mobile-behavior).",
};

export { troubleshooting };
