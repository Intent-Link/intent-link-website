import { site } from "@/constants/site";
import { appRoutes, externalUrls } from "@/constants/routes";
import { getLocale } from "@/i18n/get-locale";
import { getCommonText } from "@/i18n/messages/common";
import { getMetadataText } from "@/i18n/messages/metadata";

/**
 * Static /llms.txt route (footer "For AI" link). TODO: replace body with the
 * real content from intent-link-website-rebuild/project/llms-full.txt.
 */
const GET = async () => {
  const locale = await getLocale();
  const common = getCommonText(locale);
  const metadataText = getMetadataText(locale);

  const body = [
    `# ${site.name}`,
    "",
    common.tagline,
    "",
    `${metadataText.llms.docsLabel}: ${appRoutes.docs}`,
    `${metadataText.llms.repoLabel}: ${externalUrls.github}`,
  ].join("\n");

  return new Response(body, {
    headers: { "content-type": "text/plain; charset=utf-8" },
  });
};

export { GET };
