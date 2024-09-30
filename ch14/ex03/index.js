/**
 * 合成可能なダイアクリティカルマークを無視して文字列比較を行うパターンクラス定義しなさい。
 * 合成可能なダイアクリティカルマークは文字列を Unicode 正規化して分解し、 \u0300-\u036f の範囲を取り除くと除去できます。
 * ダイアクリティカルマーク：https://ja.wikipedia.org/wiki/%E3%83%80%E3%82%A4%E3%82%A2%E3%82%AF%E3%83%AA%E3%83%86%E3%82%A3%E3%82%AB%E3%83%AB%E3%83%9E%E3%83%BC%E3%82%AF
 * 出題範囲: 14.4.6
 */
export class IgnoreAccentPattern {
  constructor(pattern) {
    this.pattern = this.normalize(pattern);
  }

  normalize(str) {
    // Unicodeを正規化して分解
    const normalized = str.normalize("NFD");
    // ダイアクリティカルマークを取り除く
    return normalized.replace(/[\u0300-\u036f]/g, "");
  }

  search(input) {
    const normalizedInput = this.normalize(input);
    return normalizedInput === this.pattern;
  }
}

// const pattern = new IgnoreAccentPattern("café");
// console.log(pattern.search("cafe")); // true
// console.log(pattern.search("kafe")); //false
