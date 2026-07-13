import type { DocsContentText } from "@/content/docs/types";
import type { PartialText } from "@/i18n/create-text-query";

const es: PartialText<DocsContentText> = {
  quickstart: {
    "toc.1-install": "Instalar", "toc.2-wrap": "Envolver la aplicación", "toc.3-links": "Usar IntentLink",
    intro: "Añade acciones basadas en la intención a una aplicación Next.js en tres pasos.",
    installHeading: "1 · Instalar", wrapHeading: "2 · Envuelve tu aplicación una vez",
    wrapBody: "Monta `IntentProvider` una vez en el layout raíz. Ejecuta el motor de intención compartido para todo lo que contiene.",
    linksHeading: "3 · Usa IntentLink", linksBody: "Usa `IntentLink` como un enlace normal de Next.js y coloca en `onIntent` el trabajo que quieras iniciar antes.",
    closing: "Eso es todo para la mayoría de las aplicaciones. La librería no hace precarga automáticamente: tú decides qué hace `onIntent`.",
  },
  "how-it-works": {
    "toc.observe": "Observar", "toc.decide": "Estimar", "toc.fire": "Ejecutar la acción", "toc.devices": "Escritorio y móvil", "toc.physics": "La idea física",
    intro: "intent-link observa cómo se mueve una persona por la página y estima a qué objetivo visible se acerca. Cuando la señal es suficientemente fuerte, llama a la función `onIntent` de ese objetivo.",
    observeHeading: "1 · Observar el movimiento", observeBody: "En escritorio, el motor lee el movimiento del puntero. En dispositivos táctiles, lee el desplazamiento. Solo se activa cuando el usuario interactúa y vuelve a descansar cuando el movimiento termina.",
    decideHeading: "2 · Estimar el objetivo", decideBody: "El motor compara el movimiento del usuario con los objetivos de intención visibles. Los objetivos fuera de la ventana visible no participan en los cálculos activos.",
    fireHeading: "3 · Ejecutar tu acción", fireBody: "Cuando un objetivo se vuelve suficientemente probable, su callback `onIntent` se ejecuta una vez. Puede ejecutarse de nuevo después de que el usuario se aleje y vuelva a acercarse.",
    devicesHeading: "Escritorio y móvil", "devices.desktop": "En escritorio, la predicción sigue el puntero en dos dimensiones.", "devices.mobile": "En móvil, la predicción sigue el desplazamiento vertical. El primer desplazamiento la activa.", "devices.visible": "Los objetivos ocultos o fuera de pantalla se ignoran, incluso si están ocultos mediante CSS adaptable.",
    physicsHeading: "La idea física", physicsEnergy: "Imagina cada objetivo como un pequeño pozo de gravedad. El movimiento crea **energía cinética** y la distancia al objetivo crea **energía potencial**. Un puntero o desplazamiento rápido todavía tiene movimiento; un movimiento lento cerca de un objetivo parece estar asentándose allí. El motor usa una regla inspirada en la termodinámica que considera más probables esos destinos de menor energía.",
    physicsKalman: "Los datos de movimiento del navegador contienen pequeños saltos y errores. Un **filtro de Kalman** suaviza ese ruido antes del cálculo físico. En términos sencillos, ayuda al motor a distinguir un movimiento deliberado de mediciones inestables. Todo esto permanece dentro de la librería; la aplicación solo recibe `onIntent`.",
    paperNote: "[Lee el artículo de investigación](https://intentlink.dev/paper). Este enlace es provisional hasta que esté disponible la publicación de ACM.",
  },
  "intent-provider": {
    "toc.usage": "Uso", "toc.notes": "Notas", intro: "Monta `IntentProvider` una vez cerca de la raíz de tu aplicación. Ejecuta el motor de intención compartido para `IntentLink` y `useIntentTarget`.",
    usageHeading: "Uso", notesHeading: "Notas", "notes.once": "Usa un solo proveedor para la aplicación. No anides proveedores.", "notes.props": "Solo necesita `children`; no hay nada más que configurar.", "notes.client": "Ya incluye su límite de cliente, por lo que puede importarse desde un layout de servidor de Next.js.",
  },
  "intent-link": {
    "toc.props": "Props", "toc.onintent": "onIntent", "toc.tuning": "Importancia y coste", "toc.example": "Ejemplo",
    intro: "Usa `IntentLink` donde normalmente usarías `Link` de Next.js. Añade `onIntent` para el trabajo que deba comenzar antes del clic.", propsHeading: "Props",
    "col.prop": "Prop", "col.type": "Tipo", "col.default": "Predeterminado", "col.description": "Descripción",
    "prop.href": "Obligatorio. Igual que en Link de Next.js.", "prop.importance": "Con qué facilidad puede comenzar la acción.", "prop.cost": "Qué tan cautelosa debe ser la predicción.", "prop.onIntent": "Se llama una vez cuando es probable que el usuario elija este enlace.", "prop.rest": "Cualquier prop de Link de Next.js o de un enlace HTML, incluidos className, style y ref.",
    prefetchNote: "`IntentLink` desactiva la precarga automática de Next.js. Para usar precarga predictiva, llama a `router.prefetch()` dentro de `onIntent`.", onIntentHeading: "onIntent", onIntentBody: "El callback no recibe argumentos ni devuelve nada. Se ejecuta una vez por aproximación y se rearma cuando el usuario se aleja.",
    tuningHeading: "Importancia y coste", tuningBody: "Estos ajustes son opcionales. La mayoría de las aplicaciones deberían conservar los valores predeterminados.", "tuning.importance": "`importance` controla con qué facilidad puede comenzar la acción. Predeterminado: `medium`.", "tuning.cost": "`cost` controla qué tan cautelosa debe ser la predicción. Predeterminado: `low`.", "tuning.defaults": "Cámbialos solo después de probar la acción real tanto en escritorio como en móvil.", exampleHeading: "Ejemplo",
  },
  "use-intent-target": {
    "toc.button": "Uso básico", "toc.options": "Opciones", "toc.third-party": "Componentes de terceros",
    intro: "`useIntentTarget` añade detección de intención a un botón, tarjeta u otro elemento HTML. Devuelve una ref; conéctala al elemento que quieras observar.", buttonHeading: "Uso básico", buttonBody: "Usa el hook dentro de un componente cliente y conecta la ref devuelta a un elemento HTML.", optionsHeading: "Opciones",
    "options.onIntent": "`onIntent`: la acción que se ejecuta cuando el elemento se convierte en el objetivo probable.", "options.importance": "`importance`: `high`, `medium` o `low` opcional. Predeterminado: `medium`.", "options.cost": "`cost`: `high`, `medium` o `low` opcional. Predeterminado: `low`.",
    thirdPartyHeading: "Componentes de terceros", thirdPartyBody: "Conecta la ref directamente cuando el componente reenvía su ref a un elemento HTML.", wrapperBody: "Si no reenvía una ref, envuélvelo en un elemento nativo y conecta la ref al contenedor.",
  },
  "custom-intent-components": {
    "toc.intent-button": "IntentButton", "toc.intent-button-usage": "Uso", "toc.intent-article": "IntentArticle", "toc.intent-article-usage": "Uso",
    intro: "Si tu aplicación tiene muchos objetivos del mismo tipo, envuelve `useIntentTarget` una vez y reutiliza el componente resultante.", buttonHeading: "IntentButton reutilizable", buttonBody: "Este componente acepta las props normales de un botón junto con `onIntent`, `importance` y `cost`.", articleHeading: "IntentArticle reutilizable", articleBody: "El mismo patrón funciona para tarjetas de producto y otros contenedores semánticos.", usageHeading: "Uso",
  },
  examples: {
    "toc.route": "Precargar una ruta", "toc.data": "Preparar datos", "toc.asset": "Precargar una imagen", "toc.action": "Preparar un componente",
    intro: "`onIntent` puede iniciar cualquier trabajo de preparación seguro y repetible. Mantén las acciones irreversibles, como compras, mensajes y envíos de formularios, detrás de un clic real.", routeHeading: "Precargar una ruta", routeBody: "El caso de uso habitual en Next.js.", dataHeading: "Preparar datos", dataBody: "Pide a tu librería de datos que guarde en caché la información que necesitará la siguiente pantalla.", assetHeading: "Precargar una imagen", assetBody: "Empieza a cargar un recurso grande antes de navegar.", actionHeading: "Preparar un componente", actionBody: "Usa `useIntentTarget` cuando el objetivo no sea un enlace.",
  },
  troubleshooting: {
    "toc.nothing": "No se ejecuta nada", "toc.prefetch": "Precarga inesperada", "toc.custom": "Refs de componentes personalizados", "toc.mobile": "Pruebas en móvil", "toc.development": "Modo de desarrollo",
    nothingHeading: "onIntent nunca se ejecuta", "nothing.provider": "¿Está `IntentProvider` montado por encima de estos enlaces?", "nothing.callback": "¿Tiene el objetivo un callback `onIntent`? Los objetivos sin callback no se registran.", "nothing.input": "Mueve el puntero en escritorio o desplázate en móvil. El motor duerme hasta la primera interacción.", "nothing.size": "Comprueba que el objetivo sea visible y tenga un ancho y alto reales.", "nothing.wiring": "Prueba temporalmente `importance=\"high\"` y `cost=\"low\"` para confirmar la integración y luego restaura los valores predeterminados.",
    prefetchHeading: "Una ruta se precarga sin onIntent", prefetchBody: "Busca otro `Link` de Next.js que apunte a la misma ruta, incluidos enlaces ocultos mediante estilos adaptables. Revisa también el código que llame directamente a `router.prefetch()`.", customHeading: "Un componente personalizado no funciona", customBody: "El componente debe reenviar la ref a un elemento HTML real. Si no lo hace, conecta la ref de intención a un contenedor nativo como un `div`.", mobileHeading: "Pruebas en móvil", mobileBody: "Usa un dispositivo táctil real o activa la emulación táctil en las herramientas del navegador y luego desplázate. Reducir el ancho de una ventana de escritorio no siempre activa el comportamiento móvil.", developmentHeading: "Desarrollo y producción", developmentBody: "Prueba también el comportamiento importante en una compilación de producción. Las comprobaciones de desarrollo de React y las herramientas del framework pueden hacer que los callbacks y las solicitudes de red parezcan diferentes.",
  },
  changelog: {
    "toc.v1013": "1.0.13", v1013Heading: "1.0.13 (actual)", "v1013.api": "Se añadió `useIntentTarget` para botones, tarjetas y componentes de terceros.", "v1013.visibility": "Solo los objetivos visibles participan en el trabajo activo de predicción.", "v1013.behavior": "`onIntent` es un callback void sencillo; el estado interno de predicción ya no forma parte de la API pública.", "v1013.performance": "Se mejoraron el registro, el renderizado y el rendimiento en páginas con muchos objetivos.", history: "Consulta el [historial completo de versiones](https://www.npmjs.com/package/intent-link?activeTab=versions) en npm.",
  },
};

export { es };
