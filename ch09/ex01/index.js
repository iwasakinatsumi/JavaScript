class C {
  //呼ばれるたびにカウントアップしていくクラスを作成したい

  static method() {
    var count = 0;
    count++;
    return count;
  }
}

console.log(C.method());
console.log(new C().method());
