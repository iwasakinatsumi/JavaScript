import { isHoliday1 } from "./index.js";
import { isHoliday2 } from "./index.js";

describe("isHoliday1", () => {
  it("月", () => {
    expect(isHoliday1("月")).toBe(false);
  });
  it("土", () => {
    expect(isHoliday1("土")).toBe(true);
  });
  it(1, () => {
    expect(isHoliday1(1)).toBe(false);
  });
  it("#", () => {
    expect(isHoliday1("#")).toBe(false);
  });
});

describe("isHoliday2", () => {
  it("月", () => {
    expect(isHoliday2("月")).toBe(false);
  });
  it("土", () => {
    expect(isHoliday2("土")).toBe(true);
  });
  it(1, () => {
    expect(isHoliday2(1)).toBe(false);
  });
  it("#", () => {
    expect(isHoliday2("#")).toBe(false);
  });
});
