const object1 = {};

Object.defineProperty(object1, "property1", {
  value: 1,
  writable: true,
  enumerable: false,
  configurable: true,
});

//https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/Object/defineProperty

//プロパティの変更
object1.property1 = 100;
console.log(object1.property1);

//プロパティの削除
delete object1.property1;
console.log(object1.property1);

//hasOwnProperty
console.log(object1.hasOwnProperty());

//propertyIsEnumerable
console.log(object1.propertyIsEnumerable());
