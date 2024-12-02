/**
 * EventSource でサーバーからメッセージを受信し、表示する UI を実装しなさい。
 * 問題 15.11-15.01 と同様にサーバーは用意している。起動方法も同様である。
 * http://localhost:3000/message にリクエストすると EventSource でメッセージを受信できる。
 * index.js のコードを完成させて、通信ボタンを押下するとサーバーと通信を開始し、
 * 通信中は通信ボタンが非活性になるように実装しなさい。
 * 出題範囲: 15.11.2
 */

"use strict";

const button = document.querySelector("#send-button");
const messageContainer = document.getElementById("message-container");
button.addEventListener("click", (e) => {
  e.preventDefault();
  getMessageFromServer();
});
async function getMessageFromServer() {
  const messageElement = document.createElement("div");
  messageElement.className = "message";
  messageElement.textContent = "";
  messageContainer.appendChild(messageElement);

  // TODO: ここにサーバーとのやり取り等を実装しなさい
}
