import { setPathname } from "@tests/mocks/next-navigation";
import { usePathname } from "next/navigation";

/** Sanity check that the test harness + next/navigation mock are wired up. */
describe("test harness", () => {
  it("has jest-dom matchers", () => {
    const el = document.createElement("div");
    el.textContent = "hi";
    expect(el).toHaveTextContent("hi");
  });

  it("routes next/navigation through the mock", () => {
    setPathname("/docs/quickstart");
    expect(usePathname()).toBe("/docs/quickstart");
  });
});
