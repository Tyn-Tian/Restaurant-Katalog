import apiService from "../../services/api.service";

global.fetch = jest.fn();

describe("API service", () => {
  beforeEach(() => {
    fetch.mockClear();
  });

  it("getAll should fetch a list of restaurants", async () => {
    const mockResponse = {
      restaurants: [
        { id: 1, name: "Restaurant 1" },
        { id: 2, name: "Restaurant 2" },
      ],
    };
    fetch.mockResolvedValueOnce({
      ok: true,
      json: async () => mockResponse,
    });

    const result = await apiService.getAll();

    expect(fetch).toHaveBeenCalledWith(
      "https://restaurant-api.dicoding.dev/list",
      null
    );
    expect(result).toEqual(mockResponse);
  });

  it("get should fetch a restaurant detail", async () => {
    const mockResponse = { restaurant: { id: 1, name: "Restaurant 1" } };
    fetch.mockResolvedValueOnce({
      ok: true,
      json: async () => mockResponse,
    });

    const result = await apiService.get(1);

    expect(fetch).toHaveBeenCalledWith(
      "https://restaurant-api.dicoding.dev/detail/1",
      null
    );
    expect(result).toEqual(mockResponse);
  });

  it("addReview should post a review", async () => {
    const mockResponse = { message: "success" };
    fetch.mockResolvedValueOnce({
      ok: true,
      json: async () => mockResponse,
    });

    const result = await apiService.addReview(1, "John Doe", "Great place!");

    expect(fetch).toHaveBeenCalledWith(
      "https://restaurant-api.dicoding.dev/review",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          id: 1,
          name: "John Doe",
          review: "Great place!",
        }),
      }
    );
    expect(result).toEqual(mockResponse);
  });
});
