import type { DocText } from "@/content/docs/types";

const intentLink: DocText = {
  "toc.props": "Props",
  "toc.onintent": "onIntent",
  "toc.example": "Beispiel",
  "intro": "Ein vorhersagefähiger, direkter Ersatz für `next/link`. Akzeptiert alles, was `next/link` und ein natives `<a>` akzeptieren; alles, was unten nicht aufgeführt ist, wird direkt an den Anker durchgereicht. `ref` wird weitergeleitet.",
  "propsHeading": "Props",
  "col.prop": "Prop",
  "col.type": "Typ",
  "col.default": "Standard",
  "col.description": "Beschreibung",
  "prop.href": "Erforderlich. Wie bei next/link.",
  "prop.importance": "Wie bereitwillig vorhergesagte Absicht onIntent auslöst.",
  "prop.cost": "Strafe für eine Fehlauslösung.",
  "prop.onIntent": "Wird einmal aufgerufen, wenn der Nutzen die Null überschreitet.",
  "prop.rest": "Jede next/link- oder Anker-Prop (className, style, ref…).",
  "prefetchNote": "Hinweis: `IntentLink` setzt `prefetch={false}` am zugrunde liegenden `next/link` — die Vorladung wird als ein Konsument des Signals behandelt, nie erzwungen.",
  "onIntentHeading": "onIntent",
  "onIntentBody": "Löst einmal aus, sobald der Nutzen des Ziels erstmals über null steigt. Der Callback erhält:",
  "exampleHeading": "Beispiel",
};

export { intentLink };
