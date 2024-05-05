let score = { "1st": 90, "2nd": 85, "3rd": 100 };

const startWith = performance.now();
//with文
with (score) {
  var firstWith = "1st";
}
const endWith = performance.now();
console.log("with使用時：", endWith - startWith);

//使わない
const startNoWith = performance.now();
var firstNoWith = socre["first"];
const endNoWith = performance.now();
console.log("with不使用時：", endNoWith - startNoWith);
