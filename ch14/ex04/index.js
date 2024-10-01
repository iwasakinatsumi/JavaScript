/**
 * ひらがな 1 文字とその UTF-16 コード単位をプロパティとしてもつ独自クラスを、
 * 50 音順(UTF-16 コード単位順)で<や>で比較、ソートできるようSymbol.toPrimitiveを用いて実装し、テストコードを書きなさい。
 * 文字列が期待される場合にはひらがなを、数字が期待される場合には UTF-16 コード単位を、どちらでもない場合にはひらがなを返すようにし、テストコードで確認しなさい。
 * 出題範囲: 14.4.7
 */

export class Hiragana {
  constructor(character) {
    if (
      typeof character !== "string" ||
      character.length !== 1 ||
      !this.isHiragana(character)
    ) {
      throw new Error("ひらがなを1文字指定してください。");
    }
    this.character = character; //ひらがな
    this.codePoint = character.codePointAt(0); //コード単位
  }

  isHiragana(character) {
    return /^[\u3040-\u309F]$/.test(character); // ひらがな範囲をチェックする
  }

  //https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/Symbol/Symbol.toPrimitive
  [Symbol.toPrimitive](hint) {
    if (hint === "number") {
      return this.codePoint; // 数字の場合はUTF-16 コード単位を返す
    }
    return this.character; // それ以外はひらがなを返す
  }

  toString() {
    return this.character; // 文字列化するとひらがなを返す
  }

  //50 音順(UTF-16 コード単位順)で<や>で比較、ソート？？
  sort() {}
}
