import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { DocsShell } from "@/components/docs/docs-shell";
import { DocHeader } from "@/components/docs/doc-header";
import { DocContentView } from "@/components/docs/doc-content-view";
import { getDocContent } from "@/content/docs";
import { deriveToc } from "@/content/docs/toc";
import { docToMarkdown } from "@/content/docs/markdown";
import { docsNav, docSlugs, isDocSlug } from "@/constants/docs-nav";
import { appRoutes, localeAlternates, localePath } from "@/constants/routes";
import { site } from "@/constants/site";
import { absoluteUrl, socialImage } from "@/constants/seo";
import { StructuredData } from "@/components/seo/structured-data";
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
  const path = isDocSlug(slug) ? appRoutes.docsSlug(slug) : appRoutes.docs;
  const url = localePath(locale, path);
  return {
    title,
    description,
    alternates: isDocSlug(slug) ? localeAlternates(locale, path) : undefined,
    openGraph: {
      type: "article",
      siteName: site.name,
      title,
      description,
      url,
      locale,
      images: [{ url: socialImage.path, width: socialImage.width, height: socialImage.height, alt: socialImage.alt }],
    },
    twitter: { card: "summary_large_image", title, description, images: [socialImage.path] },
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
  const description = getDocDescription(slug, locale);
  const docUrl = absoluteUrl(localePath(locale, appRoutes.docsSlug(slug)));

  return (
    <DocsShell toc={toc}>
      <StructuredData
        data={[
          {
            "@context": "https://schema.org",
            "@type": "TechArticle",
            headline: heading,
            description,
            url: docUrl,
            inLanguage: locale,
            isPartOf: { "@type": "WebSite", name: site.name, url: absoluteUrl(`/${locale}`) },
          },
          {
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            itemListElement: [
              { "@type": "ListItem", position: 1, name: site.name, item: absoluteUrl(`/${locale}`) },
              { "@type": "ListItem", position: 2, name: group, item: absoluteUrl(localePath(locale, appRoutes.docs)) },
              { "@type": "ListItem", position: 3, name: title, item: docUrl },
            ],
          },
        ]}
      />
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
