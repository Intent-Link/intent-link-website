import type { DocText } from "@/content/docs/types";

const intentProvider: DocText = {
  "toc.usage": "Uso",
  "toc.notes": "Notas",
  "intro": "O provider de contexto executa o motor de previsão. Monte-o **uma vez** no seu `app/layout.jsx`. Tudo dentro dele pode usar o `IntentLink` e ler o `IntentContext` diretamente. Ele não recebe **nenhuma prop**.",
  "usageHeading": "Uso",
  "notesHeading": "Notas",
  "notes.client": "Ele carrega a sua própria diretiva `\"use client\"`, então funciona diretamente dentro de um layout de servidor — você não precisa envolvê-lo.",
  "notes.provides": "Ele fornece `probabilities`, `registerLink` e `unregisterLink` aos descendentes via `IntentContext`.",
};

export { intentProvider };
