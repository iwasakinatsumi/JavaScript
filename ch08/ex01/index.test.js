import { func1, func2, func3 } from "./index.js";

test("func1 n:自然数,c:英数文字", () => {
  expect(func1(3, "x")).toEqual([["x", "x", "x"]]);
});

test("func1 n:自然数以外,c:英数文字", () => {
  expect(func1(-1, "x")).toEqual([["x", "x", "x"]]);
});

test("func1 n:自然数,c:漢字", () => {
  expect(func1(3, "漢字")).toEqual([["x", "x", "x"]]);
});

test("func2 x:自然数", () => {
  expect(func2(3)).toEqual(9);
});

test("func2 x:負の数", () => {
  expect(func2(-2)).toEqual(4);
});

test("func2 x:文字", () => {
  expect(func2("文字")).toEqual();
});

test("func3", () => {
  expect(func3()).toEqual();
});
