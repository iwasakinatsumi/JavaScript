import { bitCount } from "./index.js";

describe("bitCount", () => {
  it("正常系", () => {
    expect(bitCount(0b111)).toBe(3);
  });

  it("境界値", () => {
    expect(bitCount(0b1111111111111111111111111111111)).toBe(31);
  });
});
