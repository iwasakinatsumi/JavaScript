// ワーカースレッドでメッセージを受け取るイベントリスナーを設定
import { parentPort } from "worker_threads";

// メインスレッドから送信されたメッセージを受け取る
parentPort.on("message", (message) => {
  console.log("Workerが受け取ったメッセージ:", message);

  // メインスレッドに対して応答を送信
  parentPort.postMessage(`Hello from worker! You sent: ${message}`);
});
