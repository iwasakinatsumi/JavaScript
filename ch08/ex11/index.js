//組み込み関数
//https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/Object/toString
function Dog(name) {
  this.name = name;
}

const dog1 = new Dog("Taro");

Dog.prototype.toString = function dogToString() {
  return `${this.name}`;
};

console.log(dog1.toString());

//自作関数
