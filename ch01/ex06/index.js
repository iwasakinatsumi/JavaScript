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

//console.log(fib(75));
