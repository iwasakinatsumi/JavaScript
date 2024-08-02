/**
 * オブジェクトを1つ引数に取り、何らかの時間のかかる計算を行い、与えられた引数に対して一意な結果を返す関数slowFnを考える。
 * slowFnの計算結果をキャッシュし、同じ引数で繰り返し呼び出された時にはキャッシュを返す関数cachedSlowFnを生成する関数cacheを実装しなさい。
 * ただしslowFnの引数のオブジェクトが到達不能になった場合には、キャッシュがガベージコレクションの対象になるように実装しなさい。
 * またslowFnは任意の実装で良い。
 */

//cache関数は計算結果をキャッシュする
//cache→slowFnを呼び出す
//

// f はオブジェクトを1つ引数に取る関数
function cache(f) {
  // この関数を実装する
  var result = slowFn(f);
  var cacheValue = 0;
  if (cacheValue == result) {
    return cachedSlowFn();
  } else {
    cacheValue = result;
  }
}

function slowFn(obj) {
  // 時間のかかる処理
  //バブルソート
  const testData = generateTestData(obj.number);
  var array = [...testData];
  const length = array.length;
  for (let i = 0; i < length; i++) {
    for (let j = length - 1; j > i; j--) {
      if (array[j] < array[j - 1]) {
        [array[j], array[j - 1]] = [array[j - 1], array[j]];
      }
    }
  }
}

// cachedSlowFnを同じ引数で複数回呼び出すと、2回目以降はキャッシュが返る
const obj = new Object();
obj.number = 20;

const cachedSlowFn = cache(obj);

//到達不能はWeakMapを使う：
