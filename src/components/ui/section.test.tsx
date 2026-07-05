import { render, screen } from "@testing-library/react";
import { testText } from "@tests/constants";
import { sectionIds } from "@/constants/section-ids";
import { testIds } from "@/constants/test-ids";
import { Section } from "./section";

describe("Section", () => {
  const renderSection = (decor?: Parameters<typeof Section>[0]["decor"]) =>
    render(
      <Section
        id={sectionIds.hero}
        testId={testIds.section.hero}
        ariaLabel={testText.sectionLabel}
        decor={decor}
      >
        {testText.sectionBody}
      </Section>,
    );

  it("renders the structural chrome (id, aria-label, test id) and children", () => {
    renderSection();
    const section = screen.getByTestId(testIds.section.hero);
    expect(section).toHaveAttribute("id", sectionIds.hero);
    expect(section).toHaveAttribute("aria-label", testText.sectionLabel);
    expect(section).toHaveTextContent(testText.sectionBody);
  });

  it("renders no decorative backdrop by default", () => {
    renderSection();
    expect(screen.queryByTestId(testIds.gridBackground.root)).not.toBeInTheDocument();
    expect(screen.queryByTestId(testIds.glyphBackground.root)).not.toBeInTheDocument();
  });

  it("renders the requested single decor layer", () => {
    renderSection("grid");
    expect(screen.getByTestId(testIds.gridBackground.root)).toBeInTheDocument();
    expect(screen.queryByTestId(testIds.glyphBackground.root)).not.toBeInTheDocument();
  });

  it("layers multiple decor backdrops", () => {
    renderSection(["grid", "glyph"]);
    expect(screen.getByTestId(testIds.gridBackground.root)).toBeInTheDocument();
    expect(screen.getByTestId(testIds.glyphBackground.root)).toBeInTheDocument();
  });
});
