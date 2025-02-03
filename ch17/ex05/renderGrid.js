// 50 x 50 の盤面とする
const ROWS = 50;
const COLS = 50;
const RESOLUTION = 10;

const canvas = document.querySelector("#screen");
const ctx = canvas.getContext("2d");

// grid を canvas に描画する関数
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

export { renderGrid };
