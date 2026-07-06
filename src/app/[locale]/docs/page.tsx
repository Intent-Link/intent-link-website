import { redirect } from "next/navigation";
import { docsEntryPath } from "@/constants/docs-nav";
import { localePath } from "@/constants/routes";
import type { Locale } from "@/i18n/locales";

interface DocsIndexProps {
  params: Promise<{ locale: Locale }>;
}

/** /[locale]/docs → first doc page (Quickstart). */
const DocsIndex = async ({ params }: DocsIndexProps) => {
  const { locale } = await params;
  redirect(localePath(locale, docsEntryPath));
};

export default DocsIndex;
