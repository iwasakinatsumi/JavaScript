import { Hiragana } from "./index.js";
describe("Hiragana", () => {
  it("ひらがな", () => {});

  it("空文字", () => {
    const hiragana = new Hiragana();
    const input = "";
    const expectedOutput = "";

    const result = hiragana.convert(input);

    expect(result).toEqual(expectedOutput);
  });

  it("ひらがな以外", () => {});
});
