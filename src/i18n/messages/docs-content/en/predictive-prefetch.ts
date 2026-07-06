import type { DocText } from "@/content/docs/types";

const predictivePrefetch: DocText = {
  "toc.route": "Route prefetch",
  "toc.data": "Data & cache",
  "intro": "The flagship use case. `IntentLink` disables next/link's own prefetch, so you decide when to warm the route in `onIntent`.",
  "routeHeading": "Route prefetch",
  "routeBody": "Because `router.prefetch` is cheap, use `importance=\"high\"` / `cost=\"low\"` to fire early and often.",
  "dataHeading": "Data & cache warming",
  "dataBody": "`onIntent` is just a callback, so you can warm anything: a data fetch, an image, a cache entry, a query client.",
};

export { predictivePrefetch };
