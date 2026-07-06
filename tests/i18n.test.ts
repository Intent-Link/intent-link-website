import { defaultLocale, isLocale, locales, localeNames } from "@/i18n/locales";
import { createTextQuery } from "@/i18n/create-text-query";
import { getCommonText } from "@/i18n/messages/common";
import { getMetadataText } from "@/i18n/messages/metadata";
import { getSectionsText } from "@/i18n/messages/sections";
import { getDocGroupTitle, getDocTitle } from "@/i18n/messages/docs";
import { testConstants } from "@tests/constants";

describe("i18n foundation", () => {
  it("has a display name for every supported locale", () => {
    for (const locale of locales) {
      expect(localeNames[locale]).toBeTruthy();
    }
  });

  it("validates locales", () => {
    expect(isLocale(defaultLocale)).toBe(true);
    expect(isLocale("xx")).toBe(false);
    expect(isLocale(undefined)).toBe(false);
  });

  it("returns a distinct translated dictionary for a supported locale", () => {
    expect(getCommonText("ru")).not.toBe(getCommonText("en"));
    expect(getMetadataText("es")).not.toBe(getMetadataText("en"));
    expect(getSectionsText("ja")).not.toBe(getSectionsText("en"));
  });

  it("falls back to the en dictionary for an unregistered locale", () => {
    const { getText } = createTextQuery({ hello: "hi" });
    // No override supplied for `ru`, so it resolves to the en source of truth.
    expect(getText("ru")).toBe(getText("en"));
  });

  it("fills untranslated keys from en, key by key (deep merge)", () => {
    const { getText } = createTextQuery(
      { greeting: "hi", nested: { translated: "yes", untranslated: "no" } },
      { ru: { nested: { translated: "да" } } },
    );
    expect(getText("ru").nested.translated).toBe("да");
    expect(getText("ru").nested.untranslated).toBe("no");
    expect(getText("ru").greeting).toBe("hi");
  });

  it("resolves doc titles by slug and group id", () => {
    expect(getDocTitle(testConstants.doc.slug)).toBe(testConstants.doc.title);
    expect(getDocGroupTitle(testConstants.doc.groupId)).toBe("Getting Started");
  });

  it("falls back to the raw slug / id for unknown docs", () => {
    expect(getDocTitle("not-a-real-slug")).toBe("not-a-real-slug");
    expect(getDocGroupTitle("not-a-real-group")).toBe("not-a-real-group");
  });

  it("exposes interpolated copy as functions", () => {
    expect(getCommonText().footer.copyright("intent-link")).toBe("© 2026 intent-link · MIT");
  });
});
