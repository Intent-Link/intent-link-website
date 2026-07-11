import type { DocText } from "@/content/docs/types";

const troubleshooting: DocText = {
  "toc.nothing": "Ничего не срабатывает",
  "toc.ssr": "Ошибки SSR",
  "nothingHeading": "onIntent никогда не срабатывает",
  "nothing.provider": "Смонтирован ли `IntentProvider` над этими ссылками?",
  "nothing.mousemove": "Движок запускается только после первого `mousemove`, поэтому подвигайте курсор.",
  "nothing.size": "Цели за пределами экрана нельзя оценить — убедитесь, что цель действительно отрендерена и находится в области видимости.",
  "nothing.wiring": "Попробуйте `importance=\"high\"` / `cost=\"low\"`, чтобы проверить подключение, затем убавьте.",
  "ssrHeading": "Ошибки SSR / \"use client\"",
  "ssrBody": "Каждый экспорт поставляется с собственной директивой `\"use client\"` и работает прямо внутри серверного макета, поэтому вам не нужно добавлять `\"use client\"` самим.",
};

export { troubleshooting };
