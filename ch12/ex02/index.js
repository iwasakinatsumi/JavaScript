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

//https://developer.mozilla.org/ja/docs/Web/JavaScript/Guide/Iterators_and_generators#%E3%82%A4%E3%83%86%E3%83%AC%E3%83%BC%E3%82%BF%E3%83%BC
//1,1,2,3,5,8,13
//引数で6を渡したときに8を返す

export function fibonacciSequence(num) {
  let array = [1, 1];
  let iterationCount = 2;

  const fibIterator = {
    next: function () {
      let result;
      if (iterationCount < num) {
        result = { value: array, done: false };
        array[iterationCount] =
          array[iterationCount - 2] + array[iterationCount - 1];
        iterationCount++;
        return result;
      }
      return { value: array, done: true }; //計算し終わったら結果を返す
    },
  };
  return fibIterator;
}

const it = fibonacciSequence(6);
let result = it.next();
while (!result.done) {
  result = it.next();
}
//console.log(result.value);
