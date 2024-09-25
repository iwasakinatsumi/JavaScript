/**
 * ひらがな 1 文字とその UTF-16 コード単位をプロパティとしてもつ独自クラスを、
 * 50 音順(UTF-16 コード単位順)で<や>で比較、ソートできるようSymbol.toPrimitiveを用いて実装し、テストコードを書きなさい。
 * 文字列が期待される場合にはひらがなを、数字が期待される場合には UTF-16 コード単位を、どちらでもない場合にはひらがなを返すようにし、テストコードで確認しなさい。
 * 出題範囲: 14.4.7
 */

export class Hiragana {
  constructor(character) {
    if (!/^[\u3040-\u309F]$/.test(character)) {
      throw new Error("Error");
    }
    this.character = character;
    this.codeUnit = character.charCodeAt(0);
  }

  // Symbol.toPrimitive の実装
  [Symbol.toPrimitive](hint) {
    if (hint === "string") {
      return this.character;
    } else if (hint === "number") {
      return this.codeUnit;
    }
    return this.character; // デフォルトはひらがなを返す
  }

  // ソート用の比較メソッド
  static compare(a, b) {
    return a.codeUnit - b.codeUnit;
  }
}
