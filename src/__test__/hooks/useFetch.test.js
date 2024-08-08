import "@testing-library/jest-dom";
import { renderHook, waitFor } from "@testing-library/react";
import useFetch from "../../hooks/useFetch";

const mockApiService = jest.fn();

describe("useFetch hook", () => {
  beforeEach(() => {
    mockApiService.mockClear();
  });

  it("should fetch data successfully", async () => {
    const mockData = { id: 1, name: "Test Data" };
    mockApiService.mockResolvedValueOnce(mockData);

    const { result } = renderHook(() => useFetch(mockApiService));

    expect(result.current.isLoading).toBe(true);
    expect(result.current.data).toBeNull();
    expect(result.current.error).toBeNull();

    await waitFor(() => {
      expect(result.current.isLoading).toBe(false);
    });

    expect(result.current.data).toEqual(mockData);
    expect(result.current.error).toBeNull();
  });

  it("should handler error", async () => {
    const mockError = new Error("Error");
    mockApiService.mockRejectedValueOnce(mockError);

    const { result } = renderHook(() => useFetch(mockApiService));

    expect(result.current.isLoading).toBe(true);
    expect(result.current.data).toBeNull();
    expect(result.current.error).toBeNull();

    await waitFor(() => {
      expect(result.current.isLoading).toBe(false);
    });

    expect(result.current.data).toBeNull();
    expect(result.current.error).toEqual(mockError);
  });
});
