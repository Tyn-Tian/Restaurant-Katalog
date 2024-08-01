import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import AlertDialog from "../../../../components/elements/AlertDialog";
import { MemoryRouter } from "react-router-dom";

describe("AlertDialog Component", () => {
  it("should render with correct heading", () => {
    render(
      <MemoryRouter>
        <AlertDialog text="Test" />
      </MemoryRouter>
    );
    const headingElement = screen.getByRole("heading");
    expect(headingElement).toBeInTheDocument();
  });

  it("should render link", () => {
    render(
      <MemoryRouter>
        <AlertDialog text="Test" />
      </MemoryRouter>
    );
    const linkElement = screen.getByText(/Back to Home/i);
    expect(linkElement).toBeInTheDocument();
    expect(linkElement.getAttribute("href")).toBe("/");
  });
});
