import { recusion, loop } from "./index.js";

test("recusion 通常のべき乗", () => {
  expect(recusion(2, 3)).toEqual(8);
});

test("recusion べき乗が0", () => {
  expect(recusion(2, 0)).toEqual(1);
});

test("recusion 負の数のべき乗", () => {
  expect(recusion(-2, 3)).toEqual(-8);
});

test("loop 通常のべき乗", () => {
  expect(loop(2, 3)).toEqual(8);
});

test("loop べき乗が0", () => {
  expect(loop(2, 0)).toEqual(1);
});

test("loop 負の数のべき乗", () => {
  expect(loop(-2, 3)).toEqual(-8);
});
