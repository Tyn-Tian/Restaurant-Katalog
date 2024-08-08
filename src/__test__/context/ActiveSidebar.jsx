import "@testing-library/jest-dom";
import { useContext } from "react";
import ActiveSidebarContextProvider, {
  ActiveSidebar,
} from "../../context/ActiveSidebar";
import { render, screen } from "@testing-library/react";

const TestComponent = () => {
  const { activeSidebar, setActiveSidebar } = useContext(ActiveSidebar);
  return (
    <div>
      <span data-testid="active-sidebar">{activeSidebar}</span>
      <button onClick={() => setActiveSidebar("about")}>Change Sidebar</button>
    </div>
  );
};

describe("ActiveSidebar context", () => {
  it("should provides and updates activeSidebar context value", () => {
    render(
      <ActiveSidebarContextProvider>
        <TestComponent />
      </ActiveSidebarContextProvider>
    );

    expect(screen.getByTestId("active-sidebar")).toHaveTextContent("home");
    screen.getByText("Change Sidebar").click();
    expect(screen.getByTestId("active-sidebar")).toHaveTextContent("about");
  });
});
