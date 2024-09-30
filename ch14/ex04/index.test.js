import { Hiragana } from "./index.js";
import { Hiragana } from "./index.js";
describe("Hiragana", () => {
    it("should convert a string to hiragana", () => {
        const hiragana = new Hiragana();
        const input = "konnichiwa";
        const expectedOutput = "こんにちは";

        const result = hiragana.convert(input);

        expect(result).toEqual(expectedOutput);
    });

    it("should handle empty string input", () => {
        const hiragana = new Hiragana();
        const input = "";
        const expectedOutput = "";

        const result = hiragana.convert(input);

        expect(result).toEqual(expectedOutput);
    });

    it("should handle non-alphabetic characters", () => {
        const hiragana = new Hiragana();
        const input = "12345!@#$%";
        const expectedOutput = "12345!@#$%";

        const result = hiragana.convert(input);

        expect(result).toEqual(expectedOutput);
    });
});
