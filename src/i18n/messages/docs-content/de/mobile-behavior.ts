import type { DocText } from "@/content/docs/types";

const mobileBehavior: DocText = {
  "toc.scroll": "Scroll-Modell",
  "toc.diff": "Unterschiede",
  "intro": "Auf Touch-Geräten (`pointer: coarse`) gibt es keinen Cursor, daher greift die Engine auf die **Scrollgeschwindigkeit** zurück, gespeist durch einen 1D-Kalman-Filter.",
  "scrollHeading": "Das Scroll-Modell",
  "scroll.origin": "Der Ursprung des „Agenten“ ist nahe der Leseposition fixiert — `innerWidth × 0.5`, `innerHeight × 0.6`.",
  "scroll.vertical": "Nur die **vertikale** Achse wird bewertet (der horizontale Abstand wird ignoriert) — ein Nutzer, der nahe einem Ziel abbremst, signalisiert Absicht.",
  "scroll.weight": "Wahrscheinlichkeiten werden auf Touch **nicht** per Softmax normalisiert; das `weight` jedes Ziels wird direkt verwendet.",
  "diffHeading": "Unterschiede zum Desktop",
  "diffBody": "Es sind keine Code-Änderungen nötig — dieselben `IntentLink` und `onIntent` funktionieren. Passe nur die Erwartungen an: die Scroll-Absicht ist gröber als die Cursor-Bahn, erwäge also eine etwas höhere `importance` für wichtige Ziele auf Mobilgeräten.",
};

export { mobileBehavior };
