import type { DocText } from "@/content/docs/types";

const predictivePrefetch: DocText = {
  "toc.route": "Предзагрузка маршрута",
  "toc.data": "Данные и кэш",
  "intro": "Ключевой сценарий использования. `IntentLink` отключает собственную предзагрузку next/link, поэтому вы сами решаете, когда прогреть маршрут в `onIntent`.",
  "routeHeading": "Предзагрузка маршрута",
  "routeBody": "Поскольку `router.prefetch` дёшев, используйте `importance=\"high\"` / `cost=\"low\"`, чтобы срабатывать рано и часто.",
  "dataHeading": "Прогрев данных и кэша",
  "dataBody": "`onIntent` — это просто колбэк: прогревайте что угодно — загрузку данных, изображение, запись в кэше, клиент запросов.",
};

export { predictivePrefetch };
