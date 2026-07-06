import { createTextQuery } from "@/i18n/create-text-query";
import { pickNamespace } from "@/i18n/translations";

/** Document metadata and machine-facing (llms.txt) copy. */
const en = {
  title: "intent-link: Know the target before the click",
  description:
    "A user-target prediction library for React & Next.js. Predict where a user is headed and prepare the next navigation before they click.",
  docs: {
    indexTitle: "Docs · intent-link",
    indexDescription:
      "Documentation for intent-link, a user-target prediction library for React & Next.js: quickstart, API reference, and guides.",
    pageTitle: (title: string) => `${title} · intent-link docs`,
  },
} as const;

type MetadataText = typeof en;

/** Metadata query. Falls back to the `en` dictionary. */
const { getText: getMetadataText } = createTextQuery(en, pickNamespace("metadata"));

export { getMetadataText };
export type { MetadataText };
