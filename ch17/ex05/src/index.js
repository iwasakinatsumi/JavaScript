import { renderGrid } from "./renderGrid.js"
import { updateGrid } from "./updateGrid.js"

const ROWS = 50
const COLS = 50
const RESOLUTION = 10

const canvas = document.querySelector("#screen")
const ctx = canvas.getContext("2d")
const startButton = document.querySelector("#start")
const pauseButton = document.querySelector("#pause")

canvas.width = ROWS * RESOLUTION
canvas.height = COLS * RESOLUTION

let animationId = null
const sound = new Audio("./decision1.mp3")

// ライフゲームのセル (true or false) をランダムに初期化する
let grid = new Array(ROWS)
  .fill(null)
  .map(() =>
    new Array(COLS).fill(null).map(() => !!Math.floor(Math.random() * 2)),
  )

// canvas がクリックされたときの処理 (セルの値を反転する)
canvas.addEventListener("click", function (evt) {
  const rect = canvas.getBoundingClientRect()
  const pos = { x: evt.clientX - rect.left, y: evt.clientY - rect.top }

  const row = Math.floor(pos.y / RESOLUTION)
  const col = Math.floor(pos.x / RESOLUTION)
  grid[row][col] = !grid[row][col]
  sound.cloneNode().play()
  renderGrid(grid)
})

// requestAnimationFrame によって一定間隔で更新・描画を行う
function update() {
  grid = updateGrid(grid)
  renderGrid(grid)
  animationId = requestAnimationFrame(update)
}

startButton.addEventListener("click", () => {
  if (animationId) return
  update()
})

pauseButton.addEventListener("click", () => {
  if (!animationId) return
  cancelAnimationFrame(animationId)
  animationId = null
})

renderGrid(grid)
