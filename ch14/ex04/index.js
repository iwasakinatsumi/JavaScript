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
      throw new Error("ひらがな 1 文字を指定してください。");
    }
    this.character = character;
    this.codePoint = character.codePointAt(0);
  }

  isHiragana(character) {
    return /^[\u3040-\u309F]$/.test(character); // ひらがな範囲をチェック
  }

  [Symbol.toPrimitive](hint) {
    if (hint === "number") {
      return this.codePoint; // 数字が期待される場合は UTF-16 コード単位を返す
    }
    return this.character; // 文字列が期待される場合はひらがなを返す
  }

  toString() {
    return this.character; // 文字列化するとひらがなを返す
  }
}

const hiraganaArray = [
  new Hiragana("あ"),
  new Hiragana("い"),
  new Hiragana("う"),
  new Hiragana("え"),
  new Hiragana("お"),
];

console.log(hiraganaArray[0] == "あ"); // true
console.log(hiraganaArray[1] == "い"); // true
console.log(hiraganaArray[2] == "う"); // true
console.log(hiraganaArray[3] == "え"); // true
console.log(hiraganaArray[4] == "お"); // true

console.log(hiraganaArray[0] == 123); // false
console.log(hiraganaArray[1] == 3042); // true (UTF-16 コード単位)
