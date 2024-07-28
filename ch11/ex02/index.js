/**
 * オブジェクトを1つ引数に取り、何らかの時間のかかる計算を行い、与えられた引数に対して一意な結果を返す関数slowFnを考える。
 * slowFnの計算結果をキャッシュし、同じ引数で繰り返し呼び出された時にはキャッシュを返す関数cachedSlowFnを生成する関数cacheを実装しなさい。
 * ただしslowFnの引数のオブジェクトが到達不能になった場合には、キャッシュがガベージコレクションの対象になるように実装しなさい。
 * またslowFnは任意の実装で良い。
 */

// f はオブジェクトを1つ引数に取る関数
function cache(f) {
  // この関数を実装する
}

function slowFn(obj) {
  // 時間のかかる処理
  setTimeout(() => {
    console.log("Text 1");
  }, 10000);
  console.log("Text 2");
}

// cachedSlowFnを同じ引数で複数回呼び出すと、2回目以降はキャッシュが返る
const cachedSlowFn = cache(slowFn);
