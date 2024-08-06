import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import { MemoryRouter, Route, Routes } from "react-router-dom";
import Layout from "../../../components/layouts/Layout";

jest.mock("../../../components/fragments/Sidebar", () => () => (
  <div data-testid="sidebar">Sidebar</div>
));

describe("Layout component", () => {
  it("should render sidebar and outlet components", () => {
    render(
      <MemoryRouter initialEntries={["/"]}>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route path="/" element={<div data-testid="outlet">Outlet</div>} />
          </Route>
        </Routes>
      </MemoryRouter>
    );

    expect(screen.getByTestId("sidebar")).toBeInTheDocument();
    expect(screen.getByTestId("outlet")).toBeInTheDocument();
  });
});
