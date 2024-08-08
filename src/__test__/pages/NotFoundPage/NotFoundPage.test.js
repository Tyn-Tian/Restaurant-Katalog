import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import { ActiveSidebar } from "../../../context/ActiveSidebar";
import NotFoundPage from "../../../pages/NotFoundPage";

jest.mock("../../../components/elements/AlertDialog", () => ({ text }) => (
  <div>{text}</div>
));

describe("NotFoundPage", () => {
  it("should renders AlertDialog with correct text", () => {
    render(
      <ActiveSidebar.Provider value={{ setActiveSidebar: jest.fn() }}>
        <NotFoundPage />
      </ActiveSidebar.Provider>
    );

    expect(screen.getByText("Pages Not Found")).toBeInTheDocument();
  });

  it("should set active sidebar to empty string on mount", () => {
    const setActiveSidebar = jest.fn();

    render(
      <ActiveSidebar.Provider value={{ setActiveSidebar }}>
        <NotFoundPage />
      </ActiveSidebar.Provider>
    );

    expect(setActiveSidebar).toHaveBeenCalledWith("");
  });
});
