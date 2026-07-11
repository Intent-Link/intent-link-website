import type { DocText } from "@/content/docs/types";

const intentLink: DocText = {
  "toc.props": "Props",
  "toc.onintent": "onIntent",
  "toc.example": "Ejemplo",
  "intro": "Un reemplazo directo con predicción para `next/link`. Acepta todo lo que aceptan `next/link` y un `<a>` nativo; cualquier cosa no listada abajo pasa directamente al anchor. `ref` se reenvía.",
  "propsHeading": "Props",
  "col.prop": "Prop",
  "col.type": "Tipo",
  "col.default": "Predeterminado",
  "col.description": "Descripción",
  "prop.href": "Obligatorio. Igual que next/link.",
  "prop.importance": "Con qué facilidad la intención predicha dispara onIntent.",
  "prop.cost": "Penalización por un disparo falso.",
  "prop.onIntent": "Se llama una vez cuando la utilidad cruza el cero.",
  "prop.rest": "Cualquier prop de next/link o del anchor (className, style, ref…).",
  "prefetchNote": "Nota: `IntentLink` establece `prefetch={false}` en el `next/link` subyacente. La precarga se trata como un consumidor más de la señal, nunca se fuerza.",
  "onIntentHeading": "onIntent",
  "onIntentBody": "Se dispara una vez, la primera vez que la utilidad del objetivo cruza por encima de cero. El callback recibe:",
  "exampleHeading": "Ejemplo",
};

export { intentLink };
