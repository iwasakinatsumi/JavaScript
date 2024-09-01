import { counter } from "./index.js";

test("正常系", () => {
  expect(counter.next()).toEqual(0);
});

test("正常系", () => {
  expect(counter.next()).toEqual(1);
});

test("異常系", () => {
  expect(counter.throw(new Error("リセット"))).toEqual("リセット");
});
