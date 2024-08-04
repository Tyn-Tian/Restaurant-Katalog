import "@testing-library/jest-dom";
import { fireEvent, render, screen } from "@testing-library/react";
import RestaurantCard from "../../../../components/fragments/RestaurantCard";
import { MemoryRouter } from "react-router-dom";

const mockNavigate = jest.fn();

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useNavigate: () => mockNavigate,
}));

const restaurant = {
  id: "1",
  pictureId: "1",
  name: "test-name",
  city: "test-city",
  description: "test-desc",
};

describe("RestaurantCard Component", () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  it("should render skeleton when skeleton props is true", () => {
    render(
      <MemoryRouter>
        <RestaurantCard skeleton={true} />
      </MemoryRouter>
    );
    const skeletonElements = screen.getAllByText("‌");
    skeletonElements.forEach((el) => {
      expect(el).toHaveClass("react-loading-skeleton");
    });
  });

  it("should render restaurant card", () => {
    render(
      <MemoryRouter>
        <RestaurantCard restaurant={restaurant} />
      </MemoryRouter>
    );
    expect(screen.getByRole("heading")).toBeInTheDocument();
    expect(screen.getByText("test-city")).toBeInTheDocument();
    expect(screen.getByText("test-desc")).toBeInTheDocument();
  });

  it("should navigates to detail page on click", () => {
    render(
      <MemoryRouter>
        <RestaurantCard restaurant={restaurant} />
      </MemoryRouter>
    );

    const card = screen.getByRole("img").parentElement;
    fireEvent.click(card);
    expect(mockNavigate).toHaveBeenCalledWith(`/detail/${restaurant.id}`);
  });
});
