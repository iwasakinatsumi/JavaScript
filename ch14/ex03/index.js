/**
 * 合成可能なダイアクリティカルマークを無視して文字列比較を行うパターンクラス定義しなさい。
 * 合成可能なダイアクリティカルマークは文字列を Unicode 正規化して分解し、 \u0300-\u036f の範囲を取り除くと除去できます。
 * 出題範囲: 14.4.6
 */
export class IgnoreAccentPattern {
  constructor(pattern) {
    if (typeof pattern === "string") {
      this.pattern = this._normalizeString(pattern);
      this.regex = new RegExp(this.pattern, "g");
    } else if (pattern instanceof RegExp) {
      this.pattern = pattern.source.replace(/[aeiou]/g, (match) => {
        const accents = {
          a: "[aáàâäãå]",
          e: "[eéèêë]",
          i: "[iíìîï]",
          o: "[oóòôöõ]",
          u: "[uúùûü]",
        };
        return accents[match] || match;
      });
      this.regex = new RegExp(this.pattern, pattern.flags);
    } else {
      throw new TypeError("Pattern must be a string or a RegExp");
    }
  }

  _normalizeString(str) {
    return str.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
  }

  search(string) {
    const normalizedString = this._normalizeString(string);
    return normalizedString.search(this.regex);
  }

  match(string) {
    const normalizedString = this._normalizeString(string);
    const matches = normalizedString.match(this.regex);
    if (matches) {
      return matches.map((match) => this._normalizeString(match));
    }
    return null;
  }
}
