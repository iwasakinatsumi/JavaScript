import { IgnoreAccentPattern } from "./index.js";

describe("IgnoreAccentPattern", () => {
  //aのパターン

  //eのパターン
  describe("search", () => {
    const pattern = new IgnoreAccentPattern("café");
    test("found test", () => {
      expect(pattern.search("cafe")).toBe(true);
    });
    test("not found test", () => {
      expect(pattern.search("kafe")).toBe(false);
    });
  });

  //iのパターン

  //oのパターン

  //uのパターン
});
