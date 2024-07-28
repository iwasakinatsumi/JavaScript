import { sortJapanese, toJapaneseDateString } from "./index.js";

test("正常系", () => {
  expect(sortJapanese(["あした", "きのう", "あさって", "おととい"])).toEqual([
    "あさって",
    "あした",
    "おととい",
    "きのう",
  ]);
});

test("正常系", () => {
  expect(toJapaneseDateString(new Date("2024-08-02"))).toEqual("令和6年8月2日");
});
