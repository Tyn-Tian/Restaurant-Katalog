import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import Comment from "../../../../components/elements/Comment";

describe("Comment Component", () => {
  const data = {
    name: "John Doe",
    date: "2024-08-01",
    review: "This is a review",
  };

  it("should render skeleton loader when skeleton prop is true", () => {
    render(<Comment skeleton={true} />);
    const skeletonElement = screen.getByText("‌");
    expect(skeletonElement).toHaveClass("react-loading-skeleton");
  });

  it("should render comment correctly", () => {
    render(<Comment data={data} />);
    const reviewElement = screen.getByText(data.review);
    const nameElement = screen.getByText(data.name);
    const dateElement = screen.getByText(data.date);
    expect(reviewElement).toBeInTheDocument();
    expect(nameElement).toBeInTheDocument();
    expect(dateElement).toBeInTheDocument();
  });
});
