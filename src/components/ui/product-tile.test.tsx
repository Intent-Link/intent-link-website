import { screen } from "@testing-library/react";
import { renderWithProviders } from "@tests/helpers/render-with-providers";
import { testConstants } from "@tests/constants";
import { ProductTile } from "./product-tile";

const { demoTile } = testConstants;

const text = {
  tileStates: { watching: "watching", arming: "arming", prefetched: "prefetched" },
  tileImageLabel: "product shot",
  tileBadge: "prefetched",
};

describe("ProductTile", () => {
  it("renders its label inside the real IntentProvider", () => {
    renderWithProviders(<ProductTile id={demoTile.id} label="Trail runners" text={text} />);
    expect(screen.getByText("Trail runners")).toBeInTheDocument();
  });

  it("draws a probability ring (backing disc + track + progress arc)", () => {
    const { container } = renderWithProviders(
      <ProductTile id={demoTile.id} label={demoTile.label} text={text} />,
    );
    expect(container.querySelectorAll("circle")).toHaveLength(3);
  });
});
