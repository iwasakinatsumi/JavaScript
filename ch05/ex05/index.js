function test(args) {
  let result = {};
  for (let [key, value] of Object.entries(args)) {
    //値が偶数かどうか判断する
    if (value % 2 == 0) {
      result[key] = value;
    }
  }
  return result;
}

let args = { a: 1, b: 2, c: 3, d: 4 };
console.log(test(args));
