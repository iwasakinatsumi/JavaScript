import { test } from "./index.js";

describe("test", () => {
  it("正常値", () => {
    let args = { a: 1, b: 2, c: 3 };
    expect(test(args)).toBe({ a: 1, c: 3 });
  });
});
