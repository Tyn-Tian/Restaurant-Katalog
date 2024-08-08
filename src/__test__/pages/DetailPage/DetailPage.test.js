import "@testing-library/jest-dom";
import { useNavigate, useParams } from "react-router-dom";
import useFetch from "../../../hooks/useFetch";
import { render, screen, waitFor } from "@testing-library/react";
import { ActiveSidebar } from "../../../context/ActiveSidebar";
import DetailPage from "../../../pages/DetailPage";

jest.mock("react-router-dom", () => ({
  useNavigate: jest.fn(),
  useParams: jest.fn(),
}));

jest.mock("../../../hooks/useFetch", () => jest.fn());

jest.mock(
  "../../../components/fragments/RestaurantDetail",
  () =>
    ({ skeleton, data }) =>
      (
        <div>
          {skeleton && <div>Loading...</div>}
          {data && <div>Data</div>}
        </div>
      )
);

jest.mock("../../../components/elements/BackTopButton", () => ({
  __esModule: true,
  default: () => <button>Back Top</button>,
}));

jest.mock("../../../components/elements/AlertDialog", () => ({
  __esModule: true,
  default: ({ text }) => <div>{text}</div>,
}));

describe("DetailPage", () => {
  const setActiveSidebar = jest.fn();
  const mockNavigate = jest.fn();
  const mockParams = { id: "1" };

  beforeEach(() => {
    useNavigate.mockReturnValue(mockNavigate);
    useParams.mockReturnValue(mockParams);
    jest.clearAllMocks();
  });

  it("should render loading state correctly", () => {
    useFetch.mockReturnValue({
      data: null,
      isLoading: true,
      error: null,
      refetch: jest.fn(),
    });

    render(
      <ActiveSidebar.Provider value={{ setActiveSidebar }}>
        <DetailPage />
      </ActiveSidebar.Provider>
    );

    expect(screen.getByText("Loading...")).toBeInTheDocument();
  });

  it("should render error state correctly", async () => {
    useFetch.mockReturnValue({
      data: null,
      isLoading: false,
      error: "Error fetching data",
      refetch: jest.fn(),
    });

    render(
      <ActiveSidebar.Provider value={{ setActiveSidebar }}>
        <DetailPage />
      </ActiveSidebar.Provider>
    );

    expect(screen.getByText("Error fetching data")).toBeInTheDocument();
  });

  it("should render data state correctly", () => {
    useFetch.mockReturnValue({
      data: { id: "1", name: "Test Restaurant" },
      isLoading: false,
      error: null,
      refetch: jest.fn(),
    });

    render(
      <ActiveSidebar.Provider value={{ setActiveSidebar }}>
        <DetailPage />
      </ActiveSidebar.Provider>
    );

    expect(screen.getByText("Data")).toBeInTheDocument();
  });

  it("should redirect to home on no data", async () => {
    useFetch.mockReturnValue({
      data: null,
      isLoading: false,
      error: null,
      refetch: jest.fn(),
    });

    render(
      <ActiveSidebar.Provider value={{ setActiveSidebar }}>
        <DetailPage />
      </ActiveSidebar.Provider>
    );

    await waitFor(() => expect(mockNavigate).toHaveBeenCalledWith("/"));
  });

  it("should sets active sidebar to empty string on mount", () => {
    useFetch.mockReturnValue({
      data: null,
      isLoading: true,
      error: null,
      refetch: jest.fn(),
    });

    render(
      <ActiveSidebar.Provider value={{ setActiveSidebar }}>
        <DetailPage />
      </ActiveSidebar.Provider>
    );

    expect(setActiveSidebar).toHaveBeenCalledWith("");
  });
});
