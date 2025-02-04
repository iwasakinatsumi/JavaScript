var num = Number.MAX_SAFE_INTEGER;

console.log("最大値：", num);
console.log("最小値：", Number.MIN_SAFE_INTEGER);

console.log("最大値+1：", num + 1);
console.log("比較結果：", num + 1 === num + 2);

//比較結果がtrueになった理由：
//最大値を超えたので、最大値より大きい値という意味で同じと評価された
