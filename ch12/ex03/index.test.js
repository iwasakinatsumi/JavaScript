import { counter } from "./index.js";

const c = counter();

test("正常系", () => {
  expect(c.next().value).toEqual(0);
});

test("正常系", () => {
  expect(c.next().value).toEqual(1);
});

test("異常系", () => {
  expect(c.throw(new Error("リセット"))).toEqual("リセット");
});
