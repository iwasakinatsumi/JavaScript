//https://www.freecodecamp.org/japanese/news/how-to-reverse-a-string-in-javascript-in-3-different-ways-75e4763c68cb/
function reverseString(str) {
  // Step 1. split() メソッドを使用して配列を作成する
  var splitString = str.split(""); // var splitString = "hello".split("");
  // ["h", "e", "l", "l", "o"]

  // Step 2. reverse() メソッドを使用して配列を反転させる
  var reverseArray = splitString.reverse(); // var reverseArray = ["h", "e", "l", "l", "o"].reverse();
  // ["o", "l", "l", "e", "h"]

  // Step 3. join() メソッドを使用して配列内のすべての要素を結合して文字列にする
  var joinArray = reverseArray.join(""); // var joinArray = ["o", "l", "l", "e", "h"].join("");
  // "olleh"

  //Step 4. 反転した文字列を返す
  return joinArray; // "olleh"
}

console.log(reverseString("家族 👨‍👨‍👧‍👧"));
//これだと出力が6(2+4)つになった：想定は3つ

//https://qiita.com/standard-software/items/24a8cc99171f988e4523
function reverseString2(str) {
  const split = require("graphemesplit"); //ライブラリ
  return split(str).reverse().join("");
}

//console.log(reverseString2("家族 👨‍👨‍👧‍👧"));

//https://qiita.com/sounisi5011/items/aa2d747322aad4850fe7
function reverse(str) {
  return Array.from(str).reverse().join("");
}

console.log("家族 👨‍👨‍👧‍👧");
console.log(reverse("家族 👨‍👨‍👧‍👧"));
