import { render, screen } from "@testing-library/react";
import { testText } from "@tests/constants";
import { Button } from "./button";

describe("Button", () => {
  it("renders its label", () => {
    render(<Button>{testText.clickMe}</Button>);
    expect(screen.getByRole("button", { name: testText.clickMe })).toBeInTheDocument();
  });

  it("applies the primary variant by default", () => {
    render(<Button>{testText.clickMe}</Button>);
    expect(screen.getByRole("button")).toHaveClass("bg-accent");
  });

  it("applies the ghost variant", () => {
    render(<Button variant="ghost">{testText.clickMe}</Button>);
    expect(screen.getByRole("button")).toHaveClass("border");
  });

  it("forwards the disabled attribute", () => {
    render(<Button disabled>{testText.clickMe}</Button>);
    expect(screen.getByRole("button")).toBeDisabled();
  });
});
