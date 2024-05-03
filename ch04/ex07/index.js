// このような関数は絶対に書いてはならない。
function set42(key) {
  eval(`${key}= 42;`);
}
// 例:
// set42("hello");
// console.log(hello);
// 42

set42("new Date()");
console.log("new Date()");
