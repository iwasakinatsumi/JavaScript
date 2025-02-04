import { isSameValue } from "./index.js";

describe("同じか比較", () => {
  it("0.3-0.2と0.1の比較 to equal 3", () => {
    expect(isSameValue(0.3 - 0.2, 0.1)).toBe(true);
  });

  it("0.2-0.1と0.1の比較 to equal 3", () => {
    expect(isSameValue(0.3 - 0.2, 0.1)).toBe(true);
  });
});
