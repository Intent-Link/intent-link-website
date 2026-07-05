"use client";

import { useLocale } from "@/i18n/locale-provider";
import { getDocGroupTitle, getDocTitle } from "@/i18n/messages/docs";

interface UseDocsTextInfo {
  pageTitle: (slug: string) => string;
  groupTitle: (groupId: string) => string;
}

/** Docs title resolvers bound to the active client locale. */
const useDocsText = (): UseDocsTextInfo => {
  const { locale } = useLocale();
  return {
    pageTitle: (slug) => getDocTitle(slug, locale),
    groupTitle: (groupId) => getDocGroupTitle(groupId, locale),
  };
};

export { useDocsText };
