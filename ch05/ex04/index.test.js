import { fibWhile } from "./index.js";
import { fibFor } from "./index.js";
import { fibDoWhile } from "./index.js";

describe("fib", () => {
  it("fibWhile", () => {
    expect(fibWhile()).toBe(55);
  });
  it("fibFor", () => {
    expect(fibFor()).toBe(55);
  });
  it("fibDoWhile", () => {
    expect(fibDoWhile()).toBe(55);
  });
});
