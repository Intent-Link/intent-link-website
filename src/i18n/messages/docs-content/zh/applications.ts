import type { DocText } from "@/content/docs/types";

const applications: DocText = {
  "toc.route": "预取路由",
  "toc.data": "预取数据",
  "toc.asset": "预加载资源",
  "intro": "`onIntent` 只是一个在链接成为可能目标那一刻触发的回调。这一个信号有许多用途——下面是三种常见的用法。",
  "routeHeading": "预取路由",
  "routeBody": "旗舰用例。`IntentLink` 会禁用 `next/link` 自身的预取，因此由你决定何时预热路由。由于 `router.prefetch` 很廉价，使用 `importance=\"high\"` / `cost=\"low\"` 来尽早且频繁地触发。",
  "dataHeading": "预取数据",
  "dataBody": "路由并不是你唯一能预热的东西。提前启动下一页所需的数据——一次查询、一次 API 调用、一条缓存记录——好让它在点击之前就已就绪。",
  "assetHeading": "预加载资源",
  "assetBody": "沉重的媒体资源非常适合。在检测到意图的那一刻就开始加载目标页的主图、视频或字体，好让它在页面渲染时已被解码并缓存。",
};

export { applications };
