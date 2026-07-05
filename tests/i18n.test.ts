import { defaultLocale, isLocale, locales, localeNames } from "@/i18n/locales";
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

  it("falls back to the en dictionary for a locale with no messages", () => {
    // `ru` has no dictionary yet, so every query returns the en source of truth.
    expect(getCommonText("ru")).toBe(getCommonText("en"));
    expect(getMetadataText("ru")).toBe(getMetadataText("en"));
    expect(getSectionsText("ru")).toBe(getSectionsText("en"));
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
    expect(getCommonText().footer.copyright("intent-link")).toBe("© intent-link");
  });
});
