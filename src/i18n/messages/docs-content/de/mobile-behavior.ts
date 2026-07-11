import type { DocText } from "@/content/docs/types";

const mobileBehavior: DocText = {
  "toc.scroll": "Scroll-Modell",
  "toc.diff": "Unterschiede",
  "intro": "Auf Touch-Geräten gibt es keinen Cursor, daher kommt die Absicht stattdessen aus der **Scrollgeschwindigkeit**.",
  "scrollHeading": "Das Scroll-Modell",
  "scroll.origin": "Der Ursprung des „Agenten“ ist nahe der Leseposition fixiert — `innerWidth × 0.5`, `innerHeight × 0.6`.",
  "scroll.vertical": "Nur die **vertikale** Achse wird bewertet (der horizontale Abstand wird ignoriert) — ein Nutzer, der nahe einem Ziel abbremst, signalisiert Absicht.",
  "scroll.weight": "Wahrscheinlichkeiten werden nicht durch Abwägen der Links gegeneinander normalisiert. Stattdessen wird der rohe „weight“-Wahrscheinlichkeitswert verwendet.",
  "diffHeading": "Unterschiede zum Desktop",
  "diffBody": "Es sind keine Änderungen nötig. Dieselben `IntentLink` und `onIntent` funktionieren.",
};

export { mobileBehavior };
