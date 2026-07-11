import type { DocText } from "@/content/docs/types";

const quickstart: DocText = {
  "toc.1-install": "التثبيت",
  "toc.2-wrap": "غلّف تطبيقك",
  "toc.3-links": "بدّل روابطك",
  "intro": "انتقل من التثبيت إلى تنبؤ عامل في دقائق قليلة. يراقب intent-link كيف يتحرك المؤشر ويُطلق `onIntent` بمجرد أن يصبح رابط ما هو الهدف المرجّح، قبل النقرة.",
  "installHeading": "1 · التثبيت",
  "peerDeps": "التبعيات النظيرة: `react ≥ 18`، `react-dom ≥ 18`، `next ≥ 13`.",
  "wrapHeading": "2 · غلّف تطبيقك مرة واحدة",
  "wrapBody": "ركّب `IntentProvider` في `app/layout.jsx`. يُشغّل محرّك التنبؤ ويحسب احتمالاً حياً لكل هدف مُسجَّل. وهو يحمل توجيه `\"use client\"` الخاص به، فيندرج مباشرة في تخطيط الخادم دون غلاف إضافي.",
  "linksHeading": "3 · بدّل روابطك",
  "linksBody": "استخدم `IntentLink` — بديل مباشر لـ `next/link` — وافعل شيئاً في `onIntent`. يُطلق مرة واحدة، أول مرة تتجاوز فيها منفعة الرابط الصفر.",
  "closing": "هذا هو التحميل المسبق التنبؤي. التالي: اضبط [الأهمية والتكلفة](importance-and-cost)، أو اقرأ الاحتمالات الخام لبناء سلوكك الخاص.",
};

export { quickstart };
