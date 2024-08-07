import { cn } from "../../utils";

describe("cn function", () => {
  it("should joins a multiple class names with spaces", () => {
    expect(cn("class1 class2 class3")).toBe("class1 class2 class3");
  });
});
