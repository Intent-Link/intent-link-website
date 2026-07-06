import type { DocText } from "@/content/docs/types";

const predictivePrefetch: DocText = {
  "toc.route": "التحميل المسبق للمسار",
  "toc.data": "البيانات والذاكرة المؤقتة",
  "intro": "حالة الاستخدام الرائدة. `IntentLink` يُعطّل التحميل المسبق الخاص بـ next/link، فتقرّر أنت متى تُسخّن المسار في `onIntent`.",
  "routeHeading": "التحميل المسبق للمسار",
  "routeBody": "لأن `router.prefetch` رخيص، استخدم `importance=\"high\"` / `cost=\"low\"` للإطلاق مبكراً وكثيراً.",
  "dataHeading": "تسخين البيانات والذاكرة المؤقتة",
  "dataBody": "`onIntent` مجرد ردّ نداء — سخّن أي شيء: جلب بيانات، أو صورة، أو مدخل ذاكرة مؤقتة، أو عميل استعلام.",
};

export { predictivePrefetch };
