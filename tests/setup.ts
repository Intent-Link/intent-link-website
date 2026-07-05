import "@testing-library/jest-dom/vitest";
import { createElement, forwardRef, type AnchorHTMLAttributes } from "react";
import { beforeEach, vi } from "vitest";
import { resetRouterMock } from "./mocks/next-navigation";

// Route the App Router navigation hooks to our controllable mock.
vi.mock("next/navigation", () => import("./mocks/next-navigation"));

// next/link → plain <a>. jsdom can't run the real Link, and `intent-link`
// imports it internally, so this also lets IntentProvider load under Vitest.
const MockLink = forwardRef<HTMLAnchorElement, AnchorHTMLAttributes<HTMLAnchorElement>>(
  function MockLink({ children, ...props }, ref) {
    return createElement("a", { ref, ...props }, children);
  },
);

vi.mock("next/link", () => ({ default: MockLink }));

// --- jsdom shims for browser APIs our client code touches ------------------

// matchMedia — used by use-media-query and use-scroll-reveal.
vi.stubGlobal(
  "matchMedia",
  vi.fn((query: string) => ({
    matches: false,
    media: query,
    onchange: null,
    addEventListener: vi.fn(),
    removeEventListener: vi.fn(),
    addListener: vi.fn(),
    removeListener: vi.fn(),
    dispatchEvent: vi.fn(),
  })),
);

// ResizeObserver / IntersectionObserver — not implemented by jsdom.
class MockObserver {
  observe() {}
  unobserve() {}
  disconnect() {}
  takeRecords() {
    return [];
  }
}
vi.stubGlobal("ResizeObserver", MockObserver);
vi.stubGlobal("IntersectionObserver", MockObserver);

// requestAnimationFrame — the intent-link engine runs a rAF loop on mount.
vi.stubGlobal(
  "requestAnimationFrame",
  vi.fn((cb: FrameRequestCallback) => setTimeout(() => cb(0), 0) as unknown as number),
);
vi.stubGlobal("cancelAnimationFrame", vi.fn());

// clipboard — used by use-copy.
Object.assign(navigator, {
  clipboard: { writeText: vi.fn().mockResolvedValue(undefined) },
});

// Reset mutable mock state between every test.
beforeEach(() => {
  resetRouterMock();
});
