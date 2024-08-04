import "@testing-library/jest-dom";
import { fireEvent, render, screen } from "@testing-library/react";
import { ActiveSidebar } from "../../../../context/ActiveSidebar";
import Sidebar from "../../../../components/fragments/Sidebar";
import { MemoryRouter } from "react-router-dom";

const mockSetActiveSidebar = jest.fn();

const renderWithContext = (ui, { providerProps, ...renderOptions }) => {
  return render(
    <ActiveSidebar.Provider {...providerProps}>{ui}</ActiveSidebar.Provider>,
    { ...renderOptions }
  );
};

const providerProps = {
  value: {
    activeSidebar: "home",
    setActiveSidebar: mockSetActiveSidebar,
  },
};

describe("Sidebar component", () => {
  beforeEach(() => {
    renderWithContext(<Sidebar />, { providerProps, wrapper: MemoryRouter });
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it("should render the sidebar", () => {
    const navElement = screen.getByRole("navigation");
    expect(navElement).toBeInTheDocument();
  });

  it("should update active sidebar on click a nav item", () => {
    const linkElements = screen.getAllByRole("link");
    linkElements.forEach((item) => {
      if (item.getAttribute("href") === "/favorite`") {
        fireEvent.click(item.parentElement);
        expect(mockSetActiveSidebar).toHaveBeenCalledWith("favorite");
      }
    });
  });
});
