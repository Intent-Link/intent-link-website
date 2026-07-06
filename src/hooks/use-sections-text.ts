"use client";

import { useLocale } from "@/i18n/locale-provider";
import { getSectionsText } from "@/i18n/messages/sections";

/**
 * Section copy resolved for the active client locale. Client sections read text
 * through this instead of receiving it as a prop, so the copy's function-valued
 * entries (e.g. `firedCount`) never have to cross the Server → Client boundary.
 */
const useSectionsText = () => {
  return getSectionsText(useLocale());
};

export { useSectionsText };
