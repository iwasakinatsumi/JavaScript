/**
 * ex10 の続きを実装し ライフゲーム のプログラムを完成させなさい。
 * https://ja.wikipedia.org/wiki/%E3%83%A9%E3%82%A4%E3%83%95%E3%82%B2%E3%83%BC%E3%83%A0
 * 参考: 完成後のイメージは以下:ex10.gif
 * 出題範囲: 15.7
 */

// 50 x 50 の盤面とする
const ROWS = 50;
const COLS = 50;
// 1セルのサイズ
const RESOLUTION = 10;

const canvas = document.querySelector("#screen");
const ctx = canvas.getContext("2d");
const startButton = document.querySelector("#start");
const pauseButton = document.querySelector("#pause");

canvas.width = ROWS * RESOLUTION;
canvas.height = COLS * RESOLUTION;

// https://developer.mozilla.org/ja/docs/Web/API/Window/requestAnimationFrame が返す ID
let animationId = null;

// NOTE: download from https://soundeffect-lab.info/sound/button/mp3/decision1.mp3
const sound = new Audio("./decision1.mp3");

// ライフゲームのセル (true or false) をランダムに初期化する
let grid = new Array(ROWS)
  .fill(null)
  .map(() =>
    new Array(COLS).fill(null).map(() => !!Math.floor(Math.random() * 2))
  );

// grid を canvas に描画する
function renderGrid(grid) {
  for (let row = 0; row < ROWS; row++) {
    for (let col = 0; col < COLS; col++) {
      const cell = grid[row][col];
      ctx.beginPath();
      ctx.rect(col * RESOLUTION, row * RESOLUTION, RESOLUTION, RESOLUTION);
      ctx.fillStyle = cell ? "black" : "white";
      ctx.fill();
      ctx.stroke();
    }
  }
}

// Life Game のルールに従ってセルを更新する
function updateGrid(grid) {
  // 新しいグリッドを作成
  const nextGrid = grid.map((arr) => [...arr]);

  for (let row = 0; row < ROWS; row++) {
    for (let col = 0; col < COLS; col++) {
      // 周囲のセルの生存数を数えて nextGrid[row][col] に true or false を設定する (実装してね)
      const aliveNeighbors = countAliveNeighbors(grid, row, col);

      // ライフゲームのルールに従って次の状態を設定する
      /**
       * 誕生
       * 死んでいるセルに隣接する生きたセルがちょうど3つあれば、次の世代が誕生する。
       * 生存
       * 生きているセルに隣接する生きたセルが2つか3つならば、次の世代でも生存する。
       * 過疎
       * 生きているセルに隣接する生きたセルが1つ以下ならば、過疎により死滅する。
       * 過密
       * 生きているセルに隣接する生きたセルが4つ以上ならば、過密により死滅する。
       */
      if (grid[row][col]) {
        //　自分が生きている場合
        if (aliveNeighbors <= 1 || aliveNeighbors >= 4) {
          nextGrid[row][col] = false; // 死亡
        }
      } else {
        // 自分が死んでいる場合
        if (aliveNeighbors === 3) {
          nextGrid[row][col] = true; // 生存
        }
      }
    }
  }
  return nextGrid;
}

// 指定されたセルの周囲の生存数を数える関数
//　参考：https://qiita.com/gushwell/items/ed7f4039e5c240a387ff
function countAliveNeighbors(grid, row, col) {
  //gridは盤上に適当にセルが存在している状態
  //row：特定のセルのx座標
  //col：特定のセルのy座標

  const directions = [
    //指定したセルから見て
    [-1, -1], //左下
    [-1, 0], //左横
    [-1, 1], //左上
    [0, -1], //真下
    [0, 1], //真上
    [1, -1], //右下
    [1, 0], //右横
    [1, 1], //右上
  ];

  let count = 0;

  //周囲8つ分を計算する
  for (const [x, y] of directions) {
    let newRow = row + x; //端のセルのチェック用
    let newCol = col + y;

    // 判断しているセルの座標がグリッドの範囲内であればカウントする
    //セルの座標は1-50でないと✖
    if (newRow >= 0 && newRow < ROWS && newCol >= 0 && newCol < COLS) {
      //範囲内、かつそのセルの値がtrue(=生存状態)なら+1、false(=死滅状態)なら+0で周りの存在数を加算していく
      count += grid[newRow][newCol] ? 1 : 0;
    }
  }

  return count;
}

// canvas がクリックされたときの処理 (セルの値を反転する)
canvas.addEventListener("click", function (evt) {
  const rect = canvas.getBoundingClientRect();
  const pos = { x: evt.clientX - rect.left, y: evt.clientY - rect.top };

  const row = Math.floor(pos.y / RESOLUTION);
  const col = Math.floor(pos.x / RESOLUTION);
  grid[row][col] = !grid[row][col];
  sound.cloneNode().play();
  renderGrid(grid);
});

// requestAnimationFrame によって一定間隔で更新・描画を行う
// NOTE: リフレッシュレートの高い画面では速く実行される (これを防ぐ場合は下記の例を参照)
// https://developer.mozilla.org/ja/docs/Web/API/Window/requestAnimationFrame
function update() {
  grid = updateGrid(grid);
  renderGrid(grid);
  animationId = requestAnimationFrame(update);
}

startButton.addEventListener("click", () => {
  // 既にアニメーションが動いている場合は何もしない
  if (animationId) {
    return;
  }
  update();
});

pauseButton.addEventListener("click", () => {
  // アニメーションが停止している場合は何もしない
  if (!animationId) {
    return;
  }
  cancelAnimationFrame(animationId);
  animationId = null;
});

renderGrid(grid);
