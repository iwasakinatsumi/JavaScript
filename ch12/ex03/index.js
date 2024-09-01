/**
 * P.372 で例示されている、throw()を使ってリセットを行うカウンタのようなジェネレータを実装しなさい。
 * 出題範囲: 12.4.3
 */

//https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/Generator/throw

export function* counter() {
  let count = 0;
  while (true) {
    try {
      yield count++;
    } catch (e) {
      console.log(e.message);
    }
  }
}

const c = counter();
console.log(c.next()); //0
console.log(c.next()); //1

//c.throw(new Error("リセット"));
