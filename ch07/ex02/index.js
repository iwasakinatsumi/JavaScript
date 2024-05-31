//以下の関数を繰り返し (for, while) や条件分岐 (if) を利用せず map, filter, reduce, forEach 等のメソッドを利用して書き直しなさい。
//コードは_index.js参照

function fizzbuzz(n) {
  for (let i = 1; i <= n; i++) {
    if (i % 15 === 0) {
      console.log("FizzBuzz");
    } else if (i % 3 === 0) {
      console.log("Fizz");
    } else if (i % 5 === 0) {
      console.log("Buzz");
    } else {
      console.log(i);
    }
  }
}

//fizzbuzz(10);

function refizzbuzz(n) {
  n.map((x) => x % 15 === 0);
}

refizzbuzz([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);

function sumOfSquaredDifference(f, g) {
  let result = 0;
  for (let i = 0; i < f.length; i++) {
    result += (f[i] - g[i]) ** 2;
  }
  return result;
}

function reSumOfSquareDifference(f, g) {}

function sumOfEvensIsLargerThan42(array) {
  let sum = 0;
  for (let i = 0; i < array.length; i++) {
    if (array[i] % 2 !== 0) {
      continue;
    }
    sum += array[i];
  }
  return sum >= 42;
}
