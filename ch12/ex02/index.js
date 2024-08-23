/**
 * ジェネレータ関数を使わずに、P.367 のfibonacciSequence()が返すジェネレータと同等のイテレータを返す関数を実装しなさい。
 * 出題範囲: 12.3.1
 */

//元コード
// function* fibonacciSequence() {
//   let x = 0;
//   let y = 1;
//   for (;;) {
//     yield y;
//     [x, y] = [y, x + y];
//   }
// }

export function fibonacciSequence() {
  let iterator = iterable[Symbol.iterator]();
  return {
    [Symbol.iterator]() {
      return this;
    },
    next() {
      let v = iterator.next();
      if (v.done) {
        return v;
      } else {
        return { value: fibonacciSequence(v.value) };
      }
    },
  };
}
