import { add, dot } from "./index.js";

let matrix1 = [
  [1, 1],
  [1, 1],
];

let matrix2 = [
  [2, 2],
  [2, 2],
];

test("add", () => {
  expect(add(matrix1, matrix2)).toEqual([
    [3, 3],
    [3, 3],
  ]);
});

test("dot", () => {
  expect(dot(matrix1, matrix2)).toEqual([
    [4, 4],
    [4, 4],
  ]);
});
