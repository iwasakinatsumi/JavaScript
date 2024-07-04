class C {
  constructor() {}

  static method() {
    let count = 0;
    count++;
    return count;
  }
}

console.log(C.method());
console.log(new C().method()); //method is not a function のエラーになる なんで？？
