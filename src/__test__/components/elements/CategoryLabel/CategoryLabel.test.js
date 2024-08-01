import "@testing-library/jest-dom";
import CategoryLabel from "../../../../components/elements/CategoryLabel";
import { render, screen } from "@testing-library/react";

describe("CategoryLabel Component", () => {
  it("should render label correctly", () => {
    render(<CategoryLabel category="test" />);
    const labelElement = screen.getByText(/test/i);
    expect(labelElement).toBeInTheDocument();
  });
});
