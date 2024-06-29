import { sequenceToObject } from "./index.js";

test("正常系", () => {
  expect(sequenceToObject("a", 1, "b", 2)).toEqual({ a: 1, b: 2 });
});

test("引数が奇数個", () => {
  expect(sequenceToObject("a", 1, "b")).toEqual(Error);
});

test("引数の奇数番目に文字が入っていない", () => {
  expect(sequenceToObject(2, 1, "b")).toEqual(Error);
});
