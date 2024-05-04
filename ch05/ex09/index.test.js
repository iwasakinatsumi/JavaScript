import { parseJSON } from "./index.js";

describe("parseJSON", () => {
  it("success", () => {
    expect(parseJSON('{"result":true, "count":42}')).toBe(true);
  });
  it("error", () => {
    expect(parseJSON("[1, 2, 3, 4, ]")).toBe(false);
  });
});
