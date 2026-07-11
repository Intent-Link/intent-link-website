import type { DocText } from "@/content/docs/types";

const intentLink: DocText = {
  "toc.props": "Props",
  "toc.onintent": "onIntent",
  "toc.example": "Exemple",
  "intro": "Un remplacement direct, conscient de la prédiction, pour `next/link`. Accepte tout ce qu'acceptent `next/link` et un `<a>` natif ; tout ce qui n'est pas listé ci-dessous passe directement à l'ancre. `ref` est transmis.",
  "propsHeading": "Props",
  "col.prop": "Prop",
  "col.type": "Type",
  "col.default": "Par défaut",
  "col.description": "Description",
  "prop.href": "Requis. Identique à next/link.",
  "prop.importance": "Avec quelle promptitude l'intention prédite déclenche onIntent.",
  "prop.cost": "Pénalité pour un faux déclenchement.",
  "prop.onIntent": "Appelé une fois lorsque l'utilité franchit zéro.",
  "prop.rest": "Toute prop de next/link ou d'ancre (className, style, ref…).",
  "prefetchNote": "Note : `IntentLink` définit `prefetch={false}` sur le `next/link` sous-jacent. Le préchargement est traité comme un consommateur du signal parmi d'autres, jamais imposé.",
  "onIntentHeading": "onIntent",
  "onIntentBody": "Se déclenche une fois, la première fois que l'utilité de la cible passe au-dessus de zéro. Le rappel reçoit :",
  "exampleHeading": "Exemple",
};

export { intentLink };
