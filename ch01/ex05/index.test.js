//import { abs, sum, factorial } from "./index.js";
import { abs } from "./index.js";

// TypeScript の場合は以下:
// import { abs, sum, factorial } from "./index.ts";

describe("math", () => {
  describe("abs", () => {
    it("returns same value when positive value given", () => {
      expect(abs(42)).toBe(42);
    });

    it("returns negated value when negative value given", () => {
      expect(abs(-42)).toBe(42);
    });

    it("returns zero value when zero given", () => {
      expect(abs(0)).toBe(0);
    });
  });

  // 以下に sum, factorial のテストを記載せよ
  describe("sum", () => {
    it("returns same value when positive value given", () => {
      expect(sum([1, 2, 3, 4])).toBe(10);
    });

    it("returns zero value when zero given", () => {
      expect(abs([0])).toBe(0);
    });
  });

  describe("factorial", () => {
    it("returns same value when positive value given", () => {
      expect(factorial(4)).toBe(24);
    });

    it("returns zero value when zero given", () => {
      expect(abs(0)).toBe(0);
    });
  });
});
