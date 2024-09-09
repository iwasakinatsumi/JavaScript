/**
 * index.jsを完成させ、以下の要件を満たすクラスを作成しなさい。
 * index.test.jsのテストが通ることを確認すること。
 * MyArrayはArrayを継承し、map(), slice()の結果としてMyArrayLikeのオブジェクトを返す。（結果の型を変更するにはSymbol.speciesを指定する）
 * MyArrayLikeは配列のようなクラスでArrayを継承しない
 * 出題範囲: 14.4.4
 */

export class MyArrayLike {
  // TODO
}

export class MyArray extends Array {
  constructor(items) {
    super(...items);
  }

  // TODO
}
