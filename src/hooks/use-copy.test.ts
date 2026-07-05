import { act, renderHook, waitFor } from "@testing-library/react";
import { useCopy } from "./use-copy";

describe("useCopy", () => {
  it("starts un-copied", () => {
    const { result } = renderHook(() => useCopy());
    expect(result.current.copied).toBe(false);
  });

  it("writes to the clipboard and flips `copied`", async () => {
    const { result } = renderHook(() => useCopy());

    await act(async () => {
      await result.current.copy("npm install intent-link");
    });

    expect(navigator.clipboard.writeText).toHaveBeenCalledWith("npm install intent-link");
    await waitFor(() => expect(result.current.copied).toBe(true));
  });
});
