import type { ReactElement, ReactNode } from "react";
import { render, type RenderOptions } from "@testing-library/react";
import { IntentProvider } from "intent-link";
import { LocaleProvider } from "@/i18n/locale-provider";

/**
 * All app-wide providers, mirroring src/components/providers.tsx (locale context
 * + the real intent-link engine). Add future providers here so every test gets them.
 */
const AppProviders = ({ children }: { children: ReactNode }) => {
  return (
    <LocaleProvider>
      <IntentProvider>{children}</IntentProvider>
    </LocaleProvider>
  );
};

/** render() wrapped in the app providers. */
const renderWithProviders = (
  ui: ReactElement,
  options?: Omit<RenderOptions, "wrapper">,
) => {
  return render(ui, { wrapper: AppProviders, ...options });
};

/** Wrapper for renderHook({ wrapper }) when a hook needs the providers. */
const createHookWrapper = () => {
  const Wrapper = ({ children }: { children: ReactNode }) => {
    return <AppProviders>{children}</AppProviders>;
  };
  return Wrapper;
};

// Re-export navigation setters so tests import render + route control from one place.
export { setPathname, setSearchParams, setParams } from "@tests/mocks/next-navigation";
export { AppProviders, renderWithProviders, createHookWrapper };
