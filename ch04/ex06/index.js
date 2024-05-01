//以下の resize 関数を書き直した 2 つの関数を作成しなさい
//if を利用せず && や || を用いて maxWidth や maxHeight を設定する関数 (resize1)
//if を利用せず ?. や ?? を用いて maxWidth や maxHeight を設定する関数 (resize2)

// 何らかのリサイズを行う関数と思って読んで下さい
//
// - params には undefined またはオブジェクトが与えられる
// - params.maxWidth が与えられる場合 (正の整数と仮定して良い) はその値を利用する
// - params.maxHeight が与えられる場合 (正の整数と仮定して良い) はその値を利用する
function resize(params) {
  let maxWidth = 600;
  let maxHeight = 480;

  if (params && params.maxWidth) {
    maxWidth = params.maxWidth;
  }

  if (params && params.maxHeight) {
    maxHeight = params.maxHeight;
  }

  console.log({ maxWidth, maxHeight });
}
