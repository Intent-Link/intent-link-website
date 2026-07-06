"use client";

import { useLocale } from "@/i18n/locale-provider";
import { getCommonText } from "@/i18n/messages/common";

/** Shared chrome copy resolved for the active client locale. */
const useCommonText = () => {
  return getCommonText(useLocale());
};

export { useCommonText };
