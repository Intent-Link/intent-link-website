import { screen } from "@testing-library/react";
import { renderWithProviders } from "@tests/helpers/render-with-providers";
import { createTestDemoTile } from "@tests/factories/demo";
import { ProductTile } from "./product-tile";

describe("ProductTile", () => {
  it("renders its label inside the real IntentProvider", () => {
    const tile = createTestDemoTile({ label: "Trail runners" });
    renderWithProviders(<ProductTile id={tile.id} label={tile.label} />);
    expect(screen.getByText("Trail runners")).toBeInTheDocument();
  });

  it("draws a probability ring (two SVG circles)", () => {
    const tile = createTestDemoTile();
    const { container } = renderWithProviders(
      <ProductTile id={tile.id} label={tile.label} />,
    );
    expect(container.querySelectorAll("circle")).toHaveLength(2);
  });
});
