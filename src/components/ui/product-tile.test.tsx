import { screen } from "@testing-library/react";
import { renderWithProviders } from "@tests/helpers/render-with-providers";
import { testConstants } from "@tests/constants";
import { ProductTile } from "./product-tile";

const { demoTile } = testConstants;

const text = {
  tileImageLabel: "product shot",
  tileBadge: "prefetched",
};

describe("ProductTile", () => {
  it("renders its label inside the real IntentProvider", () => {
    renderWithProviders(<ProductTile id={demoTile.id} label="Trail runners" text={text} />);
    expect(screen.getByText("Trail runners")).toBeInTheDocument();
  });

  it("shows the real onIntent result after prefetching", () => {
    renderWithProviders(
      <ProductTile id={demoTile.id} label={demoTile.label} text={text} prefetched />,
    );
    expect(screen.getByText("prefetched")).toBeInTheDocument();
  });
});
