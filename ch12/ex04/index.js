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

export function* primes() {
  while (true) {
    try {
      //ここで素数の計算する
      //方針：
      //最初の呼び出しでは2を返す：計算せずにそのまま返す？
      //その次以降は割り算していく
      //次の値は3なので、前の素数で割れなければ素数：2回目の呼び出しでは3が出力される
      //次の値は4なので、前の素数(2)で割れるので素数ではない
      //次の値は5なので、前の素数(2,3)で割れないので素数：3回目の呼び出しでは5が出力される
      //以下続行
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
function* numberGenerator() {
  for (let i = 1; i < Infinity; i++) {
    yield i;
  }
}

var gen = numberGenerator();
var num;
num = gen.next().value;
console.log(num);

const p = primes();
p.next(); //ここで返されるのは2になるはず
p.next(); //ここで返されるのは3になるはず
