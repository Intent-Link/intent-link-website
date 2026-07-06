import type { DocText } from "@/content/docs/types";

const predictivePrefetch: DocText = {
  "toc.route": "Precarga de rutas",
  "toc.data": "Datos y caché",
  "intro": "El caso de uso estrella. `IntentLink` deshabilita la precarga propia de next/link, así que tú decides cuándo calentar la ruta en `onIntent`.",
  "routeHeading": "Precarga de rutas",
  "routeBody": "Como `router.prefetch` es barato, usa `importance=\"high\"` / `cost=\"low\"` para disparar pronto y a menudo.",
  "dataHeading": "Calentamiento de datos y caché",
  "dataBody": "`onIntent` es solo un callback — calienta cualquier cosa: una petición de datos, una imagen, una entrada de caché, un query client.",
};

export { predictivePrefetch };
