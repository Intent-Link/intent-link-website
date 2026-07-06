import type { Loosen, PartialText } from "@/i18n/create-text-query";
import type { CommonText } from "@/i18n/messages/common";
import type { MetadataText } from "@/i18n/messages/metadata";
import type { SectionsText } from "@/i18n/messages/sections";
import type { DocsText } from "@/i18n/messages/docs";

/**
 * One locale's translation of the four "small" namespaces (chrome, metadata,
 * landing sections, doc titles). Docs *body* prose is translated separately
 * under `@/i18n/messages/docs-content/<locale>`. `Loosen` widens the literal
 * `en` shapes so translated strings are accepted; `PartialText` lets a locale
 * carry only what differs from `en` — omitted keys deep-merge from the source.
 */
interface TranslationBundle {
  common: PartialText<Loosen<CommonText>>;
  metadata: PartialText<Loosen<MetadataText>>;
  sections: PartialText<Loosen<SectionsText>>;
  docs: PartialText<Loosen<DocsText>>;
}

export type { TranslationBundle };
