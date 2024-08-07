import "jest-localstorage-mock";
import {
  isLiked,
  loadDataFromStorage,
  saveData,
  unlikeData,
} from "../../utils/storage";

describe("storage functions", () => {
  beforeEach(() => {
    localStorage.clear();
  });

  it("should save data correctly", () => {
    saveData(1);
    expect(localStorage.setItem).toHaveBeenCalledWith(
      "favorite",
      JSON.stringify([{ id: 1 }])
    );
  });

  it("should loads data correctly", () => {
    localStorage.setItem("favorite", JSON.stringify([{ id: 1 }, { id: 2 }]));
    const data = loadDataFromStorage();
    expect(data).toEqual([{ id: 1 }, { id: 2 }]);
  });

  it("should return an empty array if no data", () => {
    const data = loadDataFromStorage();
    expect(data).toEqual([]);
  });

  it("isLiked return true if id is in storage", () => {
    localStorage.setItem("favorite", JSON.stringify([{ id: 1 }]));
    expect(isLiked(1)).toBe(true);
  });

  it("isLiked func should return false if id is not in storage", () => {
    expect(isLiked(1)).toBe(false);
  });

  it("should remove the correct data", () => {
    localStorage.setItem("favorite", JSON.stringify([{ id: 1 }, { id: 2 }]));
    unlikeData(1);
    expect(localStorage.setItem).toHaveBeenLastCalledWith(
      "favorite",
      JSON.stringify([{ id: 2 }])
    );
  });

  it("unlikeData should does nothing if id is not found", () => {
    localStorage.setItem("favorite", JSON.stringify([{ id: 1 }, { id: 2 }]));
    unlikeData(3);
    expect(localStorage.setItem).toHaveBeenLastCalledWith(
      "favorite",
      JSON.stringify([{ id: 1 }, { id: 2 }])
    );
  });
});
