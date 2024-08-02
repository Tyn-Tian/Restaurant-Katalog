import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import LazyImage from "../../../../components/elements/LazyImage";

describe("LazyImage Component", () => {
  it("should render image", () => {
    render(
      <LazyImage alt="test-image" src="https://via.placeholder.com/150" />
    );
    const imgElement = screen.getByAltText("test-image");
    expect(imgElement).toBeInTheDocument();
  });
});
