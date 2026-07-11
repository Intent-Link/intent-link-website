import type { DocText } from "@/content/docs/types";

const applications: DocText = {
  "toc.route": "Prefetch a route",
  "toc.data": "Prefetch data",
  "toc.asset": "Preload an asset",
  "intro": "`onIntent` is just a callback that fires the moment a link becomes the likely destination. That one signal has many uses — here are three common ones.",
  "routeHeading": "Prefetch a route",
  "routeBody": "The flagship use case. `IntentLink` disables `next/link`'s own prefetch, so you decide when to warm the route. Because `router.prefetch` is cheap, use `importance=\"high\"` / `cost=\"low\"` to fire early and often.",
  "dataHeading": "Prefetch data",
  "dataBody": "Routes aren't the only thing you can warm. Kick off the data the next page needs — a query, an API call, a cache entry — so it's ready before the click.",
  "assetHeading": "Preload an asset",
  "assetBody": "Heavy media is a great fit. Start loading the destination's hero image, video, or font the moment intent is detected, so it's decoded and cached by the time the page renders.",
};

export { applications };
