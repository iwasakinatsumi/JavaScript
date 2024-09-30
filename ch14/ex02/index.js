/**
 * index.jsを完成させ、以下の要件を満たすクラスを作成しなさい。
 * index.test.jsのテストが通ることを確認すること。
 * MyArrayはArrayを継承し、map(), slice()の結果としてMyArrayLikeのオブジェクトを返す。
 * （結果の型を変更するにはSymbol.speciesを指定する）
 * MyArrayLikeは配列のようなクラスでArrayを継承しない
 * 出題範囲: 14.4.4
 */

export class MyArrayLike {
  constructor(...args) {
    this.items = [...args];
  }

  get length() {
    return this.items.length;
  }

  [Symbol.iterator]() {
    return this.items[Symbol.iterator]();
  }
}

export class MyArray extends Array {
  constructor(...args) {
    super(...args);
  }

  //
  static get [Symbol.species]() {
    return MyArrayLike;
  }

  slice(start, end) {
    const result = super.slice(start, end);
    return new this.constructor(...result);
  }

  map(callback, thisArg) {
    const result = super.map(callback, thisArg);
    return new this.constructor(...result);
  }
}
