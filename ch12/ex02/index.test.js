import { fibonacciSequence } from "./index.js";

test("正常系", () => {
  expect(fibonacciSequence(6).next()).toEqual([1, 1, 2, 3, 5, 8]);
});

test("正常系", () => {
  expect(fibonacciSequence(1).next()).toEqual([1]);
});

test("正常系", () => {
  expect(fibonacciSequence(2).next()).toEqual([1, 1]);
});