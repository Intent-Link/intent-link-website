import type { DocText } from "@/content/docs/types";

const intentProvider: DocText = {
  "toc.usage": "Uso",
  "toc.notes": "Notas",
  "intro": "O provider de contexto executa o motor de previsão. Monte-o **uma vez**, perto da raiz do seu app. Tudo dentro dele pode usar o `IntentLink` ou ler o `IntentContext` diretamente. Ele não recebe **nenhuma prop**.",
  "usageHeading": "Uso",
  "notesHeading": "Notas",
  "notes.client": "É um **componente cliente** (`\"use client\"`) — no App Router, monte-o dentro de uma fronteira cliente.",
  "notes.loop": "Internamente executa um único laço `requestAnimationFrame` e anexa um listener `mousemove` e um `scroll`, usando o que for adequado ao dispositivo — montá-lo mais de uma vez é desperdício.",
  "notes.provides": "Ele fornece `probabilities`, `registerLink` e `unregisterLink` aos descendentes via `IntentContext`.",
};

export { intentProvider };
