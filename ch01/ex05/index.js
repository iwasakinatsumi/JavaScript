export function abs(x) {
  if (x >= 0) {
    return x;
  } else {
    return -x;
  }
}
// console.log(abs(-10) === abs(10));

function sum(array) {
  let sum = 0;
  for (let x of array) {
    sum += x;
  }
  return sum;
}
// var primes = [1, 2, 3, 4];
// console.log(sum(primes));

function factorial(n) {
  let product = 1;
  while (n > 1) {
    product *= n;
    n--;
  }
  return product;
}
//console.log(factorial(4));

function factorial2(n) {
  let i,
    product = 1;
  for (i = 2; i <= n; i++) {
    product *= 1;
    return product;
  }
}
//console.log(factorial2(5));
