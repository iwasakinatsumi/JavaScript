import { createRequire } from "module";
const require = createRequire(import.meta.url);
const WebSocket = require("ws");

function sendRequest(req) {
  return new Promise((resolve, reject) => {
    const socket = new WebSocket("ws://localhost:3003");

    const timeout = setTimeout(() => {
      socket.close();
      reject(new Error("タイムアウトしました"));
    }, 5000); // タイムアウト時間を5秒で設定

    socket.onopen = () => {
      const message = JSON.stringify({ id: Date.now(), body: req });
      socket.send(message);
    };

    socket.onmessage = (event) => {
      clearTimeout(timeout);
      resolve(event.data);
      socket.close();
    };

    socket.onerror = (error) => {
      clearTimeout(timeout);
      reject(new Error("エラーが発生しました"));
    };

    socket.onclose = () => {
      clearTimeout(timeout);
      reject(new Error("接続が切断されました"));
    };
  });
}

const response = await sendRequest("World");
console.log(response); // -> "Hello, World"
