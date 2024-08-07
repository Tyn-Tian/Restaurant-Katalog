import sortRestaurant from "../../utils/sortRestaurant";

describe("sort function", () => {
  const data = [
    { name: "A", city: "New York", rating: 4.5 },
    { name: "B", city: "Los Angeles", rating: 3.8 },
    { name: "C", city: "Chicago", rating: 4.8 },
    { name: "D", city: "New York", rating: 4.2 },
    { name: "E", city: "Chicago", rating: 4.9 },
  ];

  it("sortByRating should sort data by rating", () => {
    const sorted = sortRestaurant.sortByRating(data);
    expect(sorted).toEqual([
      { name: "E", city: "Chicago", rating: 4.9 },
      { name: "C", city: "Chicago", rating: 4.8 },
      { name: "A", city: "New York", rating: 4.5 },
      { name: "D", city: "New York", rating: 4.2 },
      { name: "B", city: "Los Angeles", rating: 3.8 },
    ]);
  });

  it("sortByCity should sort data by city", () => {
    const sorted = sortRestaurant.sortByCity(data);
    expect(sorted).toEqual([
      { name: "E", city: "Chicago", rating: 4.9 },
      { name: "C", city: "Chicago", rating: 4.8 },
      { name: "B", city: "Los Angeles", rating: 3.8 },
      { name: "A", city: "New York", rating: 4.5 },
      { name: "D", city: "New York", rating: 4.2 },
    ]);
  });

  it("sortByName should sort data by name", () => {
    const sorted = sortRestaurant.sortByName(data);
    expect(sorted).toEqual([
      { name: "A", city: "New York", rating: 4.5 },
      { name: "B", city: "Los Angeles", rating: 3.8 },
      { name: "C", city: "Chicago", rating: 4.8 },
      { name: "D", city: "New York", rating: 4.2 },
      { name: "E", city: "Chicago", rating: 4.9 },
    ]);
  });
});
