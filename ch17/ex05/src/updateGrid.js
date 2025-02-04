// updateGrid.js

// 50 x 50 の盤面とする
const ROWS = 50;
const COLS = 50;

// Life Game のルールに従ってセルを更新する
function updateGrid(grid) {
  // 新しいグリッドを作成
  const nextGrid = grid.map((arr) => [...arr]);

  for (let row = 0; row < ROWS; row++) {
    for (let col = 0; col < COLS; col++) {
      const aliveNeighbors = countAliveNeighbors(grid, row, col);

      // ライフゲームのルールに従って次の状態を設定する
      if (grid[row][col]) {
        if (aliveNeighbors <= 1 || aliveNeighbors >= 4) {
          nextGrid[row][col] = false; // 死亡
        }
      } else {
        if (aliveNeighbors === 3) {
          nextGrid[row][col] = true; // 生存
        }
      }
    }
  }
  return nextGrid;
}

// 指定されたセルの周囲の生存数を数える関数
function countAliveNeighbors(grid, row, col) {
  const directions = [
    [-1, -1],
    [-1, 0],
    [-1, 1],
    [0, -1],
    [0, 1],
    [1, -1],
    [1, 0],
    [1, 1],
  ];

  let count = 0;

  for (const [x, y] of directions) {
    let newRow = row + x;
    let newCol = col + y;

    if (newRow >= 0 && newRow < ROWS && newCol >= 0 && newCol < COLS) {
      count += grid[newRow][newCol] ? 1 : 0;
    }
  }

  return count;
}

export { updateGrid };
