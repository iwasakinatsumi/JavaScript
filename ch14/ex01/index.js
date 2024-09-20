//与えられたテストを通過するように、プロパティ、属性を設定したオブジェクトを返す関数を作成しなさい。
//14.2
export function unwritableAndUnconfigurableObj() {
  //初期値は1で上書きしようとするとエラーになる：書き込み不可
  //値を削除しようとするとエラーになる：再定義不可
  const obj = {};
  Object.defineProperty(obj, "a", {
    value: 1,
    writable: false,
    configurable: false,
  });
  return obj;
}

export function writableAndUnconfigurableObj() {
  //初期値は2だが、上書きして3になる：書き込み可能
  //値を削除しようとするとエラーになる：再定義不可
  const obj = {};
  Object.defineProperty(obj, "b", {
    value: 2,
    writable: true,
    configurable: false,
  });
  return obj;
}

export function nestedUnwritableObj() {
  const e = { value: 3 };
  const d = {};
  const c = {};
}
