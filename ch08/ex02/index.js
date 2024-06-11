//再帰
export function recusion(x, n) {
  let num = x; //ここが変わるので✖
  if (n > 0) {
    x = x * num;
    n = n - 1;
    recusion(x, n);
  }
  return x;
}

console.log(recusion(2, 3)); //8

//ループ
export function loop(x, n) {
  let num = x;
  for (let i = 1; i < n; i++) {
    x = x * num;
  }
  return x;
}

// console.log(loop(2, 3)); //8
