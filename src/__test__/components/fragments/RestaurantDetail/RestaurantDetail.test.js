import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import RestaurantDetail from "../../../../components/fragments/RestaurantDetail";

window.SVGElement.prototype.getBBox = () => ({
  x: 0,
  y: 0,
  width: 100,
  height: 100,
});

const mockData = {
  restaurant: {
    name: "Test Restaurant",
    city: "Test City",
    rating: 4.5,
    pictureId: "testpic",
    categories: [{ name: "Category1" }, { name: "Category2" }],
    description: "Test Description",
    customerReviews: [
      { name: "Reviewer1", review: "Review1", date: "2021-01-01" },
      { name: "Reviewer2", review: "Review2", date: "2021-01-02" },
    ],
  },
};

describe("RestaurantDetail component", () => {
  it("should render skeleton when skeleton props is true", () => {
    render(
      <MemoryRouter>
        <RestaurantDetail skeleton={true} />
      </MemoryRouter>
    );

    const skeletonElements = screen.getAllByText("‌");
    skeletonElements.forEach((item) => {
      expect(item).toBeInTheDocument();
    });
  });

  it("should render restaurant detail correctly", () => {
    render(
      <MemoryRouter>
        <RestaurantDetail data={mockData} />
      </MemoryRouter>
    );

    expect(screen.getByText("Test Restaurant")).toBeInTheDocument();
    expect(screen.getByText("Test City")).toBeInTheDocument();
    expect(screen.getByText("Category1")).toBeInTheDocument();
    expect(screen.getByText("Category2")).toBeInTheDocument();
    expect(screen.getByText("Test Description")).toBeInTheDocument();
    expect(screen.getByText("Review1")).toBeInTheDocument();
    expect(screen.getByText("Review2")).toBeInTheDocument();
  });
});
