/**
 * 引数として与えられる 符号なし 32 ビット整数の配列(Uint32Array) を受け取り、
 * 変換して符号なし 32 ビット整数の配列(Uint32Array) を返す次の二つの関数を実装しなさい。
 */

//どういうデータがどういう結果になればよいか？？

//リトルエンディアンのバイト列として引数のデータを読み込み、ビッグエンディアンのバイト列に変換して返す関数
function littleToBig(array) {
  //エンディアンの確認？元々ビッグエンディアンならそのまま返す
  console.log(array);
  console.log(array.buffer[0]);
  if (array.buffer[0] === 0) {
    return new Error("変換できません");
  } else {
    //変換して返却する
  }
}

//ビッグエンディアンのバイト列として引数のデータを読み込み、リトルエンディアンのバイト列に変換して返す関数
function bigToLittle(array) {
  //エンディアンの確認？元々リトルエンディアンならそのまま返す
  if (array.buffer[0] === 1) {
    return new Error("変換できません");
  } else {
    //変換して返却する
  }
}

var arr = new Uint32Array([0x01020304]);
console.log(littleToBig(arr));

// var arr = new Uint32Array([0x04030201]);
// console.log(bigToLittle(arr));

//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/DataView
//new ArrayBuffer
//new DataView　使う
