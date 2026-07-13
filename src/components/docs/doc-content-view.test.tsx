import { screen } from "@testing-library/react";
import { renderWithProviders } from "@tests/helpers/render-with-providers";
import { DocContentView } from "./doc-content-view";
import { getDocContent } from "@/content/docs";

describe("DocContentView", () => {
  it("renders heading blocks with their anchor ids", () => {
    const content = getDocContent("use-intent-target");
    const { container } = renderWithProviders(<DocContentView content={content} locale="en" />);
    expect(container.querySelector("#button")).not.toBeNull();
    expect(container.querySelector("#options")).not.toBeNull();
  });

  it("renders external links from prose", () => {
    const content = getDocContent("changelog");
    renderWithProviders(<DocContentView content={content} locale="en" />);
    const link = screen.getByRole("link", { name: /version history/i });
    expect(link).toHaveAttribute("href", "https://www.npmjs.com/package/intent-link?activeTab=versions");
  });

  it("renders code blocks verbatim (not translated)", () => {
    const content = getDocContent("intent-link");
    const { container } = renderWithProviders(<DocContentView content={content} locale="en" />);
    expect(container.textContent).toContain("router.prefetch(href)");
  });
});
