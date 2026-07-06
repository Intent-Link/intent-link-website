import { screen } from "@testing-library/react";
import { renderWithProviders } from "@tests/helpers/render-with-providers";
import { DocContentView } from "./doc-content-view";
import { getDocContent } from "@/content/docs";
import { appRoutes, localePath } from "@/constants/routes";

describe("DocContentView", () => {
  it("renders heading blocks with their anchor ids", () => {
    const content = getDocContent("importance-and-cost");
    const { container } = renderWithProviders(<DocContentView content={content} locale="en" />);
    expect(container.querySelector("#importance")).not.toBeNull();
    expect(container.querySelector("#cost")).not.toBeNull();
  });

  it("resolves cross-links to the target doc route", () => {
    const content = getDocContent("quickstart");
    renderWithProviders(<DocContentView content={content} locale="en" />);
    const link = screen.getByRole("link", { name: /importance & cost/i });
    expect(link).toHaveAttribute("href", localePath("en", appRoutes.docsSlug("importance-and-cost")));
  });

  it("renders code blocks verbatim (not translated)", () => {
    const content = getDocContent("importance-and-cost");
    const { container } = renderWithProviders(<DocContentView content={content} locale="en" />);
    expect(container.textContent).toContain("importanceWeight");
  });
});
