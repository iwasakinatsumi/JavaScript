/**
 * 引数として与えられる 符号なし 32 ビット整数の配列(Uint32Array) を受け取り、
 * 変換して符号なし 32 ビット整数の配列(Uint32Array) を返す次の二つの関数を実装しなさい。
 */

//リトルエンディアンのバイト列として引数のデータを読み込み、ビッグエンディアンのバイト列に変換して返す関数
function littleToBig(array) {
  //エンディアンの確認？元々ビッグエンディアンならそのまま返す
}

//ビッグエンディアンのバイト列として引数のデータを読み込み、リトルエンディアンのバイト列に変換して返す関数
function bigToLittle(array) {
  //エンディアンの確認？元々リトルエンディアンならそのまま返す
}

var arr = new Uint32Array([21, 31]);
console.log(littleToBig(arr));

var arr = new Uint32Array([31, 21]);
console.log(bigToLittle(arr));
