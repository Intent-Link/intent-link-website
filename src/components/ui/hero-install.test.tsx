import { act, fireEvent, screen } from "@testing-library/react";
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import { renderWithProviders } from "@tests/helpers/render-with-providers";
import { HeroInstall } from "./hero-install";

const snippet = "// drop-in snippet";

/** Stubs matchMedia so `(prefers-reduced-motion: reduce)` resolves to `matches`. */
const stubReducedMotion = (matches: boolean) => {
  vi.stubGlobal(
    "matchMedia",
    vi.fn((query: string) => ({
      matches,
      media: query,
      onchange: null,
      addEventListener: vi.fn(),
      removeEventListener: vi.fn(),
      addListener: vi.fn(),
      removeListener: vi.fn(),
      dispatchEvent: vi.fn(),
    })),
  );
};

describe("HeroInstall", () => {
  beforeEach(() => {
    vi.useFakeTimers();
    stubReducedMotion(false);
  });

  afterEach(() => {
    vi.useRealTimers();
    vi.unstubAllGlobals();
  });

  it("types the npm install command out character by character", () => {
    renderWithProviders(<HeroInstall snippet={snippet} />);

    // Nothing typed yet on the very first tick.
    expect(screen.getByText("$")).toBeInTheDocument();
    expect(screen.queryByText("npm install intent-link")).not.toBeInTheDocument();

    act(() => {
      vi.advanceTimersByTime(1000);
    });

    expect(screen.getByText("npm install intent-link")).toBeInTheDocument();
  });

  it("renders the full command immediately when reduced motion is preferred", () => {
    stubReducedMotion(true);
    renderWithProviders(<HeroInstall snippet={snippet} />);

    expect(screen.getByText("npm install intent-link")).toBeInTheDocument();
  });

  it("cancels the in-flight type and retypes when the package manager tab changes", () => {
    renderWithProviders(<HeroInstall snippet={snippet} />);

    // Let npm partially type, then switch to pnpm before it finishes.
    act(() => {
      vi.advanceTimersByTime(40);
    });

    fireEvent.click(screen.getByRole("button", { name: "pnpm" }));

    act(() => {
      vi.advanceTimersByTime(1000);
    });

    expect(screen.getByText("pnpm add intent-link")).toBeInTheDocument();
    expect(screen.queryByText("npm install intent-link")).not.toBeInTheDocument();
  });

  it("copies the full command even while it is still typing", () => {
    renderWithProviders(<HeroInstall snippet={snippet} />);

    act(() => {
      vi.advanceTimersByTime(40);
    });

    act(() => {
      fireEvent.click(screen.getByRole("button", { name: "copy" }));
    });

    expect(navigator.clipboard.writeText).toHaveBeenCalledWith("npm install intent-link");
  });
});
