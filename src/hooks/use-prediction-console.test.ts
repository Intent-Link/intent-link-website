import { act, renderHook } from "@testing-library/react";
import { usePredictionConsole } from "./use-prediction-console";

describe("usePredictionConsole", () => {
  afterEach(() => vi.useRealTimers());

  it("records a real onIntent callback and clears the demo on reset", () => {
    vi.useFakeTimers();
    const { result } = renderHook(() => usePredictionConsole());

    act(() => result.current.recordIntent("women"));

    expect(result.current.fired).toBe(1);
    expect(result.current.log[0].path).toBe("/women");
    expect(result.current.prefetched.women).toBe(true);

    const previousGeneration = result.current.generation;
    act(() => result.current.reset());

    expect(result.current.fired).toBe(0);
    expect(result.current.log).toEqual([]);
    expect(result.current.prefetched).toEqual({});
    expect(result.current.generation).toBe(previousGeneration + 1);
  });

  it("clears only the temporary prefetched visual state", () => {
    vi.useFakeTimers();
    const { result } = renderHook(() => usePredictionConsole());

    act(() => result.current.recordIntent("women"));
    expect(result.current.prefetched.women).toBe(true);

    act(() => vi.advanceTimersByTime(1900));

    expect(result.current.prefetched.women).toBeUndefined();
    expect(result.current.fired).toBe(1);
    expect(result.current.log[0].path).toBe("/women");
  });
});
