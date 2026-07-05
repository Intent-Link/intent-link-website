import { redirect } from "next/navigation";
import { docSlugs } from "@/constants/docs-nav";
import { appRoutes } from "@/constants/routes";

/** /docs → first doc page (Quickstart). */
const DocsIndex = () => {
  redirect(appRoutes.docsSlug(docSlugs[0]));
};

export default DocsIndex;
