import sum from "./index";

test("adds 1 + 2 to equal 3", () => {
  // expext(テストしたいメソッド名(第一引数, 第二引数)).toBe(returnされる値);
  expect(sum(1, 2)).toBe(3);
});
