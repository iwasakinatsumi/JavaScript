import { isNonZero } from "./index.js";

it("0", () => {
  expect(isNonZero(0)).toBe(false);
});

it("42", () => {
  expect(isNonZero(0)).toBe(true);
});

it("-0.5", () => {
  expect(isNonZero(0)).toBe(false);
});
