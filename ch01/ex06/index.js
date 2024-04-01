//フィボナッチ数列
//前2つの数字を足した数の数列
//1,1,2,3,5,8,13,21,…

function fib(n) {
  if (n < 3) {
    return 1;
  } else {
    return fib(n - 1) + fib(n - 2);
  }
}

console.log(fib(5));
console.log(fib(75));

cache = { 0: 0, 1: 1 };
function fib2(n) {
  if (n <= 1) {
    return cache[n];
  } else {
    cache[n - 1] = fib2(n - 1);
    return cache[n - 1] + cache[n - 2];
  }
}

console.log(fib2(75));

cache2 = { 1: 1, 2: 1 };
function fib3(n) {
  if (n < 3) {
    return cache2[n];
  } else {
    cache2[n - 1] = fib3(n - 1);
    return cache2[n - 1] + cache2[n - 2];
  }
}

console.log(fib3(75));
