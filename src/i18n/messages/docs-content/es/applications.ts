import type { DocText } from "@/content/docs/types";

const applications: DocText = {
  "toc.route": "Precargar una ruta",
  "toc.data": "Precargar datos",
  "toc.asset": "Precargar un recurso",
  "intro": "`onIntent` es solo un callback que se dispara en el momento en que un enlace se convierte en el destino probable. Esa única señal tiene muchos usos — aquí van tres comunes.",
  "routeHeading": "Precargar una ruta",
  "routeBody": "El caso de uso estrella. `IntentLink` deshabilita la precarga propia de `next/link`, así que tú decides cuándo calentar la ruta. Como `router.prefetch` es barato, usa `importance=\"high\"` / `cost=\"low\"` para disparar pronto y a menudo.",
  "dataHeading": "Precargar datos",
  "dataBody": "Las rutas no son lo único que puedes calentar. Inicia los datos que la siguiente página necesita — un query, una llamada a la API, una entrada de caché — para que estén listos antes del clic.",
  "assetHeading": "Precargar un recurso",
  "assetBody": "Los recursos multimedia pesados encajan muy bien. Empieza a cargar la imagen principal, el vídeo o la fuente del destino en cuanto se detecta la intención, para que estén decodificados y en caché cuando la página se renderice.",
};

export { applications };
