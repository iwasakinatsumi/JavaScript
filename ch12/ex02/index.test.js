import { fibonacciSequence } from "./index.js";

test("正常系", () => {
  expect(fibonacciSequence().next()).toEqual(1);
});
