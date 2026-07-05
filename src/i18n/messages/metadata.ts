import { createTextQuery } from "@/i18n/create-text-query";

/** Document metadata and machine-facing (llms.txt) copy. */
const en = {
  title: "intent-link — Know the target before the click",
  description:
    "A user-target prediction library for React & Next.js. Predict where a user is headed and prepare the next navigation before they click.",
  docs: {
    indexTitle: "Docs — intent-link",
    pageTitle: (title: string) => `${title} — intent-link docs`,
  },
  llms: {
    docsLabel: "Docs",
    repoLabel: "Repo",
  },
} as const;

type MetadataText = typeof en;

/** Metadata registry + server query. Falls back to the `en` dictionary. */
const { messages: metadataMessages, getText: getMetadataText } = createTextQuery(en);

export { metadataMessages, getMetadataText };
export type { MetadataText };
