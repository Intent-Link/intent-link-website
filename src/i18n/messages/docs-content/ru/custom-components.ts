import type { DocText } from "@/content/docs/types";

const customComponents: DocText = {
  "toc.register": "registerLink",
  "toc.example": "Пример",
  "intro": "Когда нужно предсказание для чего-то, что не является ссылкой, используйте `IntentContext` и зарегистрируйте элемент самостоятельно.",
  "registerHeading": "registerLink / unregisterLink",
  "registerBody": "Присвойте каждому элементу стабильный id (`useId`), зарегистрируйте его при монтировании, снимите регистрацию при размонтировании, затем читайте `probabilities[id]`.",
  "exampleHeading": "Пример",
};

export { customComponents };
