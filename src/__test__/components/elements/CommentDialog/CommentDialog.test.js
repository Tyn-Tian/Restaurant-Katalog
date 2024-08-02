import "@testing-library/jest-dom";
import { fireEvent, render, screen } from "@testing-library/react";
import CommentDialog from "../../../../components/elements/CommentDialog";
import apiService from "../../../../services/api.service";

jest.mock("../../../../services/api.service", () => ({
  addReview: jest.fn(),
}));

describe("CommentDialog Component", () => {
  const onCommentAdded = jest.fn();
  const id = 1;

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("should render skeleton when skeleton props is true", () => {
    render(<CommentDialog skeleton={true} />);
    const skeletonElements = screen.getAllByText("‌");
    skeletonElements.forEach((el) => {
      expect(el).toHaveClass("react-loading-skeleton");
    });
  });
  ``;

  it("should render comment dialog correctly", () => {
    render(<CommentDialog id={id} onCommentAdded={onCommentAdded} />);
    expect(
      screen.getByPlaceholderText("Write your name here...")
    ).toBeInTheDocument();
    expect(
      screen.getByPlaceholderText("Write your comment here...")
    ).toBeInTheDocument();
    expect(screen.getByRole("button")).toBeInTheDocument();
  });

  it("should calls apiService.addReview when button clicked", async () => {
    render(<CommentDialog id={id} onCommentAdded={onCommentAdded} />);

    fireEvent.change(screen.getByPlaceholderText("Write your name here..."), {
      target: { value: "John Doe" },
    });
    fireEvent.change(
      screen.getByPlaceholderText("Write your comment here..."),
      {
        target: { value: "This is a test comment." },
      }
    );

    fireEvent.click(screen.getByRole("button"));
    expect(apiService.addReview).toHaveBeenCalledWith(
      id,
      "John Doe",
      "This is a test comment."
    );
  });

  it('should calls onCommentAdded after successful comment', async () => {
    apiService.addReview.mockResolvedValueOnce({});
    render(<CommentDialog id={id} onCommentAdded={onCommentAdded} />);
    
    fireEvent.change(screen.getByPlaceholderText("Write your name here..."), {
      target: { value: "John Doe" },
    });
    fireEvent.change(
      screen.getByPlaceholderText("Write your comment here..."),
      {
        target: { value: "This is a test comment." },
      }
    );

    fireEvent.click(screen.getByRole("button"));
    await screen.findByRole("button");
    expect(onCommentAdded).toHaveBeenCalled();
  });
});
