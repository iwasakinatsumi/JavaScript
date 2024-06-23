// 可変長引数を受け取り、以下の仕様でオブジェクトを返却する関数 sequenceToObject(...values)を作成しなさい。

// 奇数番に string の値を受け取り偶数番に任意の値を受け取り、各偶数奇数のペアで {奇数番の値: 偶数番の値}の形式になるオブジェクトを返却する。
// 1.例えばsequenceToObject("a", 1, "b", 2)は{a: 1, b: 2}を返却する
// 2.いずれかの奇数番の値が string でない場合、または値の個数の合計が偶数ではない場合は例外を発生させる

// また作成した sequenceToObject に対してスプレッド演算子で配列を与えられることを確認しなさい。

export function sequenceToObject(...values) {
  //引数が偶数個あるか判断する：例外発生
  if (values.length % 2 == 0) {
    throw error;
  }
  //いずれかの奇数番の値がstringか判断する：例外発生
  for (let i = 0; i < values.length; i = i + 2) {
    if (typeof values[i] == "string") {
      throw error;
    }
  }

  let obj = new Object();
  for (let i = 0; i < values.length; i = i + 2) {
    obj.values[i] = values[i + 1];
  }
  return obj;
}

console.log(sequenceToObject("a", 1, "b", 2));
