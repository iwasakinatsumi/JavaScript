import { bubbleSort } from "./index.js";

const array = [5, 3, 2, 4, 1];

test("bubbleSort", () => {
  expect(bubbleSort(array)).toEqual([1, 2, 3, 4, 5]);
});
