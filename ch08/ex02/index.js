//再帰
export function recusion(x, n) {
  if (n === 0) {
    return 1;
  }
  return x * power(x, n - 1);
}

console.log(recusion(2, 3)); //8

//ループ
export function loop(x, n) {
  if (n === 0) {
    return 1;
  }

  let num = x;
  for (let i = 1; i < n; i++) {
    x = x * num;
  }
  return x;
}

// console.log(loop(2, 3)); //8
