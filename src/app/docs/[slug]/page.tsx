import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { DocsShell } from "@/components/docs/docs-shell";
import { Prose } from "@/components/docs/prose";
import { getAllDocs, getDoc } from "@/utils/docs";
import { getLocale } from "@/i18n/get-locale";
import { getDocTitle } from "@/i18n/messages/docs";
import { getMetadataText } from "@/i18n/messages/metadata";

/** Pre-render every known doc slug at build time. */
const generateStaticParams = () => {
  return getAllDocs().map((doc) => ({ slug: doc.slug }));
};

// Next 16: dynamic route `params` is a Promise and must be awaited.
interface DocPageProps {
  params: Promise<{ slug: string }>;
}

const generateMetadata = async ({ params }: DocPageProps): Promise<Metadata> => {
  const { slug } = await params;
  const locale = await getLocale();
  const metadataText = getMetadataText(locale);
  const doc = getDoc(slug);
  return {
    title: doc ? metadataText.docs.pageTitle(getDocTitle(slug, locale)) : metadataText.docs.indexTitle,
  };
};

const DocPage = async ({ params }: DocPageProps) => {
  const { slug } = await params;
  const doc = getDoc(slug);
  if (!doc) notFound();

  const locale = await getLocale();

  return (
    <DocsShell>
      <Prose>
        {/* TODO: render markdown → elements. Stub shows title + raw body. */}
        <h1 className="text-2xl font-semibold">{getDocTitle(slug, locale)}</h1>
        <pre className="mt-4 whitespace-pre-wrap font-mono text-sm text-ink-2">{doc.body}</pre>
      </Prose>
    </DocsShell>
  );
};

export { generateStaticParams, generateMetadata };
export default DocPage;
