/**
 * プロトタイプを一つ以上もつ
 * プロトタイプと同名と同名でない数字、文字列のプロパティをもつ
 * プロトタイプはオブジェクトと同名ではない数字、文字列のプロパティももつ
 * プロトタイプは列挙可のプロパティをもち、それと同名の列挙不可のプロパティをオブジェクトにもたせること
 */

//memo：https://developer.mozilla.org/ja/docs/Web/JavaScript/Enumerability_and_ownership_of_properties

let obj = new Object();

obj = {
  number: 8,
  string: "good",
};

//プロトタイプは列挙可のプロパティをもち、それと同名の列挙不可のプロパティをオブジェクトにもたせること
Object.prototype.method = function () {};

Object.defineProperty(Object.prototype, "method", {
  enumerable: true,
});

Object.defineProperty(Object.prototype, "method", {
  enumerable: false,
});

for (let prop in obj) {
  console.log(prop);
}
