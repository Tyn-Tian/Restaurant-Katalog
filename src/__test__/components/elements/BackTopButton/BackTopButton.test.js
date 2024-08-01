import "@testing-library/jest-dom";
import { fireEvent, render, screen } from "@testing-library/react";
import BackTopButton from "../../../../components/elements/BackTopButton";
import { wait } from "@testing-library/user-event/dist/cjs/utils/index.js";

describe("BackTopButton Component", () => {
  it("should render button", async () => {
    render(<BackTopButton />);
    const buttonElement = screen.getByRole("button");
    expect(buttonElement).toBeInTheDocument();
  });

  it("should hidden on initial render", () => {
    render(<BackTopButton />);
    const buttonElement = screen.getByRole("button");
    expect(buttonElement.parentElement).toHaveClass("hidden");
  });

  it("should become visible after scrolling down", async () => {
    render(<BackTopButton />);
    fireEvent.scroll(window, { target: { scrollY: 200 } });
    await wait(
      () => {
        const buttonElement = screen.getByRole("button");
        expect(buttonElement.parentElement).toHaveClass("fixed");
      },
      { timeout: 200 }
    );
  });

  it("should to the top when it clicked and have class hidden", async () => {
    render(<BackTopButton />);
    fireEvent.scroll(window, { target: { scrollY: 200 } });
    await wait(
      () => {
        const buttonElement = screen.getByRole("button");
        fireEvent.click(buttonElement);
        expect(window.scrollY).toBe(0);
        expect(buttonElement.parentElement).toHaveClass("hidden");
      },
      { timeout: 200 }
    );
  });
});
