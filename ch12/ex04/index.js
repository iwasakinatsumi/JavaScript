/**
 * 値が必要になるまで実際の計算を行わない評価戦略を遅延評価と呼ぶ。
 * ジェネレータ関数はnext()が呼ばれるまで評価が遅延される関数と考えることができる。
 * 遅延評価を行うことで、例えば素数のような無限に続く値を扱うことができる。
 * 呼び出しごとに素数を順番に返す無限ジェネレータ primes() を実装しなさい。
 * 素数を計算するアルゴリズムとしてエラトステネスの篩1を使いなさい。
 * ヒント:
 * P363 の filter() 関数と整数列を返すジェネレータを組み合わせることで、
 * 素数の倍数をふるい落とす再帰ジェネレータを作成し、
 * 内部に配列を保持することなくアルゴリズムを実現できる
 * 出題範囲: 12.3
 */

//エラトステネスのふるい
//https://ja.wikipedia.org/wiki/%E3%82%A8%E3%83%A9%E3%83%88%E3%82%B9%E3%83%86%E3%83%8D%E3%82%B9%E3%81%AE%E7%AF%A9
//一般的には特定の値を入力し、その値までを計算している
//→引数入れている

export function* primes() {
  while (true) {
    try {
    } catch (e) {
      console.log(e.message);
    }
  }
}

//p363のfilter関数
function filter(iterable, predicate) {
  let iterator = iterable[Symbol.iterator]();
  return {
    [Symbol.iterator]() {
      return this;
    },
    next() {
      for (;;) {
        let v = iterator.next();
        if (v.done || predicate(v.value)) {
          return v;
        }
      }
    },
  };
}

//整数列を返すジェネレーター

const p = primes();
p.next();
