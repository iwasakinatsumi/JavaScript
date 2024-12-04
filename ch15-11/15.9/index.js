import { createRequire } from "module";
const require = createRequire(import.meta.url);
const WebSocket = require("ws");

const grid = document.getElementById("grid");
const startButton = document.getElementById("start-button");

const socket = new WebSocket("ws://localhost:3003");

socket.onopen = () => {
  console.log("WebSocket 接続が開かれました");
};

//成功したとき
socket.onmessage = (event) => {
  const data = JSON.parse(event.data);
  renderGrid();
};

//エラーの時
socket.onerror = (error) => {
  console.error("WebSocket エラー:", error);
};

//切断されたとき
socket.onclose = () => {
  console.log("WebSocket 接続が切断されました");
};

//スタートボタンが押されたとき
startButton.addEventListener("click", () => {
  socket.send(JSON.stringify({ type: "start" }));
  startButton.disabled = true;
});

//描画
function renderGrid() {
  grid.innerHTML = "";
}

renderGrid();
