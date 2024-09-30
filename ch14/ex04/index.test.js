import { Hiragana } from "./index.js";
describe("Hiragana", () => {
  it("ひらがな変換", () => {
    const hiragana = new Hiragana();
    const input = "konnichiwa";
    const expectedOutput = "こんにちわ";

    const result = hiragana.convert(input);

    expect(result).toEqual(expectedOutput);
  });

  it("空文字", () => {
    const hiragana = new Hiragana();
    const input = "";
    const expectedOutput = "";

    const result = hiragana.convert(input);

    expect(result).toEqual(expectedOutput);
  });

  it("ひらがな以外", () => {
    const hiragana = new Hiragana();
    const input = "12345!@#$%";
    const expectedOutput = "12345!@#$%";

    const result = hiragana.convert(input);

    expect(result).toEqual(expectedOutput);
  });
});
