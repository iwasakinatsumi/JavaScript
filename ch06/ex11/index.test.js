import { object } from "./index.js";

test("通常の値呼び出し：x", () => {
  expect(object.x).toBe(1);
});

test("通常の値呼び出し：y", () => {
  expect(object.y).toBe(2);
});

test("NaNの場合：x", () => {
  expect(object.x.set(NaN)).toBe("error");
});

test("NaNの場合：y", () => {
  expect(object.y.set(NaN)).toBe("error");
});
