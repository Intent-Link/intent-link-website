import type { DocText } from "@/content/docs/types";

const predictivePrefetch: DocText = {
  "toc.route": "路由预取",
  "toc.data": "数据与缓存",
  "intro": "旗舰用例。`IntentLink` 会禁用 next/link 自身的预取，因此由你在 `onIntent` 中决定何时预热路由。",
  "routeHeading": "路由预取",
  "routeBody": "由于 `router.prefetch` 很廉价，使用 `importance=\"high\"` / `cost=\"low\"` 来尽早且频繁地触发。",
  "dataHeading": "数据与缓存预热",
  "dataBody": "`onIntent` 只是一个回调——可以预热任何东西：一次数据获取、一张图片、一条缓存记录、一个查询客户端。",
};

export { predictivePrefetch };
