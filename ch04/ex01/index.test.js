import { add } from "./index.js";
import { sub } from "./index.js";
import { mul } from "./index.js";
import { div } from "./index.js";

describe("add", () => {
  it("全部正の値", () => {
    let num1 = { realNumber: 3, imaginaryNumber: 4 };
    let num2 = { realNumber: 1, imaginaryNumber: 2 };
    expect(add(num1, num2)).toBe("4+6i");
  });
  it("全部負の値", () => {
    let num1 = { realNumber: -3, imaginaryNumber: -4 };
    let num2 = { realNumber: -1, imaginaryNumber: -2 };
    expect(add(num1, num2)).toBe("-4-6i");
  });
  it("実数は正、虚数部は負", () => {
    let num1 = { realNumber: 3, imaginaryNumber: -4 };
    let num2 = { realNumber: 1, imaginaryNumber: -2 };
    expect(add(num1, num2)).toBe("4-6i");
  });
  it("実数は負、虚数部は正", () => {
    let num1 = { realNumber: -3, imaginaryNumber: 4 };
    let num2 = { realNumber: -1, imaginaryNumber: 2 };
    expect(add(num1, num2)).toBe("-4+6i");
  });
});

describe("sub", () => {
  it("全部正の値", () => {
    let num1 = { realNumber: 3, imaginaryNumber: 4 };
    let num2 = { realNumber: 1, imaginaryNumber: 2 };
    expect(sub(num1, num2)).toBe("2+2i");
  });
  it("全部負の値", () => {
    let num1 = { realNumber: -3, imaginaryNumber: -4 };
    let num2 = { realNumber: -1, imaginaryNumber: -2 };
    expect(sub(num1, num2)).toBe("-2-2i");
  });
  it("実数は正、虚数部は負", () => {
    let num1 = { realNumber: 3, imaginaryNumber: -4 };
    let num2 = { realNumber: 1, imaginaryNumber: -2 };
    expect(sub(num1, num2)).toBe("2-2i");
  });
  it("実数は負、虚数部は正", () => {
    let num1 = { realNumber: -3, imaginaryNumber: 4 };
    let num2 = { realNumber: -1, imaginaryNumber: 2 };
    expect(sub(num1, num2)).toBe("-2+2i");
  });
});

describe("mul", () => {
  it("全部正の値", () => {
    let num1 = { realNumber: 3, imaginaryNumber: 4 };
    let num2 = { realNumber: 1, imaginaryNumber: 2 };
    expect(mul(num1, num2)).toBe("-5+10i");
  });
  it("全部負の値", () => {
    let num1 = { realNumber: -3, imaginaryNumber: -4 };
    let num2 = { realNumber: -1, imaginaryNumber: -2 };
    expect(mul(num1, num2)).toBe("-5+10i");
  });
  it("実数は正、虚数部は負", () => {
    let num1 = { realNumber: 3, imaginaryNumber: -4 };
    let num2 = { realNumber: 1, imaginaryNumber: -2 };
    expect(mul(num1, num2)).toBe("-5-6i");
  });
  it("実数は負、虚数部は正", () => {
    let num1 = { realNumber: -3, imaginaryNumber: 4 };
    let num2 = { realNumber: -1, imaginaryNumber: 2 };
    expect(mul(num1, num2)).toBe("-5-10i");
  });
});

describe("div", () => {
  it("全部正の値", () => {
    let num1 = { realNumber: 3, imaginaryNumber: 4 };
    let num2 = { realNumber: 1, imaginaryNumber: 2 };
    expect(div(num1, num2)).toBe("2+2i");
  });
  it("全部負の値", () => {
    let num1 = { realNumber: -3, imaginaryNumber: -4 };
    let num2 = { realNumber: -1, imaginaryNumber: -2 };
    expect(div(num1, num2)).toBe("-2-2i");
  });
  it("実数は正、虚数部は負", () => {
    let num1 = { realNumber: 3, imaginaryNumber: -4 };
    let num2 = { realNumber: 1, imaginaryNumber: -2 };
    expect(div(num1, num2)).toBe("2-2i");
  });
  it("実数は負、虚数部は正", () => {
    let num1 = { realNumber: -3, imaginaryNumber: 4 };
    let num2 = { realNumber: -1, imaginaryNumber: 2 };
    expect(div(num1, num2)).toBe("-2+2i");
  });
});
