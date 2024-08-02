import "@testing-library/jest-dom";
import { fireEvent, render, screen } from "@testing-library/react";
import LikeButton from "../../../../components/elements/LikeButton";

describe("LikeButton Component", () => {
  it("should render button", () => {
    render(<LikeButton />);
    const buttonElement = screen.getByRole("button");
    expect(buttonElement).toBeInTheDocument();
  });

  it("should change like/unlike when it clicked", () => {
    render(<LikeButton />);
    const buttonElement = screen.getByRole("button");
    expect(buttonElement.firstChild).toHaveAttribute("color", "white");
    fireEvent.click(buttonElement);
    expect(buttonElement.firstChild).toHaveAttribute("color", "red");
  });
});
