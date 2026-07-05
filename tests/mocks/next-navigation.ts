import { vi } from "vitest";

/**
 * Hand-written mock of `next/navigation` (App Router). Mirrors the Carnatter
 * inertia-mock pattern: module-scoped mutable state + vi.fn() spies, driven by
 * setters and reset in the global beforeEach.
 */

let _pathname = "/";
let _searchParams = new URLSearchParams();
let _params: Record<string, string | string[]> = {};

const routerSpies = {
  push: vi.fn(),
  replace: vi.fn(),
  prefetch: vi.fn(),
  back: vi.fn(),
  forward: vi.fn(),
  refresh: vi.fn(),
};

const redirect = vi.fn();
const notFound = vi.fn();
const permanentRedirect = vi.fn();

const useRouter = () => routerSpies;
const usePathname = () => _pathname;
const useSearchParams = () => _searchParams;
const useParams = () => _params;
const useSelectedLayoutSegment = () => null;
const useSelectedLayoutSegments = () => [];

// --- test-side setters -----------------------------------------------------

const setPathname = (pathname: string) => {
  _pathname = pathname;
};

const setSearchParams = (init: string | Record<string, string>) => {
  _searchParams = new URLSearchParams(init);
};

const setParams = (params: Record<string, string | string[]>) => {
  _params = params;
};

const resetRouterMock = () => {
  _pathname = "/";
  _searchParams = new URLSearchParams();
  _params = {};
  redirect.mockReset();
  notFound.mockReset();
  permanentRedirect.mockReset();
  for (const spy of Object.values(routerSpies)) spy.mockReset();
};

export {
  routerSpies,
  redirect,
  notFound,
  permanentRedirect,
  useRouter,
  usePathname,
  useSearchParams,
  useParams,
  useSelectedLayoutSegment,
  useSelectedLayoutSegments,
  setPathname,
  setSearchParams,
  setParams,
  resetRouterMock,
};
