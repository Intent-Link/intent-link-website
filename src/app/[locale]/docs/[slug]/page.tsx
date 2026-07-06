import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { DocsShell } from "@/components/docs/docs-shell";
import { DocHeader } from "@/components/docs/doc-header";
import { DocContentView } from "@/components/docs/doc-content-view";
import { getDocContent } from "@/content/docs";
import { deriveToc } from "@/content/docs/toc";
import { docToMarkdown } from "@/content/docs/markdown";
import { docsNav, docSlugs, isDocSlug } from "@/constants/docs-nav";
import { appRoutes, localeAlternates } from "@/constants/routes";
import type { Locale } from "@/i18n/locales";
import { getDocTitle, getDocGroupTitle, getDocHeading, getDocDescription } from "@/i18n/messages/docs";
import { getMetadataText } from "@/i18n/messages/metadata";

/** Pre-render every known doc slug at build time (locales enumerate on the layout). */
const generateStaticParams = () => {
  return docSlugs.map((slug) => ({ slug }));
};

// Next 16: dynamic route `params` is a Promise and must be awaited.
interface DocPageProps {
  params: Promise<{ locale: Locale; slug: string }>;
}

const generateMetadata = async ({ params }: DocPageProps): Promise<Metadata> => {
  const { locale, slug } = await params;
  const metadataText = getMetadataText(locale);
  const title = isDocSlug(slug)
    ? metadataText.docs.pageTitle(getDocTitle(slug, locale))
    : metadataText.docs.indexTitle;
  const description = isDocSlug(slug)
    ? getDocDescription(slug, locale)
    : metadataText.docs.indexDescription;
  return {
    title,
    description,
    alternates: isDocSlug(slug) ? localeAlternates(appRoutes.docsSlug(slug)) : undefined,
    openGraph: { title, description },
    twitter: { title, description },
  };
};

const DocPage = async ({ params }: DocPageProps) => {
  const { locale, slug } = await params;
  if (!isDocSlug(slug)) notFound();

  const content = getDocContent(slug);
  const toc = deriveToc(content, locale);
  const title = getDocTitle(slug, locale);
  const heading = getDocHeading(slug, locale);
  const groupId = docsNav.find((group) => group.slugs.some((s) => s === slug))?.id ?? "";
  const group = getDocGroupTitle(groupId, locale);
  const markdown = docToMarkdown(content, locale);

  return (
    <DocsShell toc={toc}>
      <DocHeader group={group} title={title} markdown={markdown} />
      <article className="min-w-0 text-ink-2">
        <h1 className="mb-3 text-[32px] font-extrabold leading-[1.1] tracking-[-0.035em] text-ink">
          {heading}
        </h1>
        <DocContentView content={content} locale={locale} />
      </article>
    </DocsShell>
  );
};

export { generateStaticParams, generateMetadata };
export default DocPage;
