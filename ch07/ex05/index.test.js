import { push, pop, shift, unshift, sort } from "./index.js";

test("push", () => {
  expect(push([1, 2, 3, 4, 5])).toStrictEqual([1, 2, 3, 4]);
});

test("pop", () => {
  expect(pop([1, 2, 3, 4, 5], 6)).toStrictEqual([1, 2, 3, 4, 5, 6]);
});

test("shift", () => {
  expect(shift([1, 2, 3, 4, 5])).toStrictEqual([2, 3, 4, 5]);
});

test("unshift", () => {
  expect(unshift([1, 2, 3, 4, 5])).toStrictEqual([0, 1, 2, 3, 4, 5]);
});

test("sort", () => {
  expect(sort([1, 2, 3, 4, 5])).toStrictEqual([5, 4, 3, 2, 1]);
});
