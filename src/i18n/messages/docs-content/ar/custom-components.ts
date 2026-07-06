import type { DocText } from "@/content/docs/types";

const customComponents: DocText = {
  "toc.register": "registerLink",
  "toc.example": "مثال",
  "intro": "عندما تريد التنبؤ لعنصر ليس رابطاً، استهلك `IntentContext` وسجّل العنصر بنفسك.",
  "registerHeading": "registerLink / unregisterLink",
  "registerBody": "امنح كل عنصر معرّفاً ثابتاً (`useId`)، سجّله عند التركيب، وألغِ تسجيله عند الإزالة، ثم اقرأ `probabilities[id]`.",
  "exampleHeading": "مثال",
};

export { customComponents };
