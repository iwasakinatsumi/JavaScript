import { spawn } from "child_process";
import path from "path";

// ESMでこのファイルの絶対パスとして__dirnameを定義するイディオム
import { fileURLToPath } from "url";
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// startChildで起動したプロセスの参照
let child = null;

// node ./child.js を起動し、このプロセスが終了したときに解決するPromiseを返す
// cf. https://nodejs.org/api/child_process.html#event-close
async function startChild() {
  const childPath = path.join(__dirname, "child.js");
  child = spawn("node", [childPath]);

  child.stdout.on("data", (data) => {
    console.log(`stdout: ${data}`);
  });

  child.stderr.on("data", (data) => {
    console.error(`stderr: ${data}`);
  });

  return new Promise((res) => {
    child.on("close", (code, signal) => {
      res([code, signal]);
    });
  });
}

// TODO: ここに処理を書く
// 子プロセスを監視して再起動する
async function monitorChild() {
  let [exitCode, exitSignal] = await startChild();

  // 子プロセスが異常終了した場合は再起動
  while (exitCode !== 0) {
    console.log("子プロセスが異常終了しました");
    console.log("子プロセスを再起動します");
    [exitCode, exitSignal] = await startChild();
  }

  console.log("子プロセスが正常に終了しました");
}

// シグナルをトラップして、子プロセスに通知する処理
function handleSignals() {
  const signals = ["SIGINT", "SIGTERM"]; // ここでは SIGINT と SIGTERM

  signals.forEach((signal) => {
    process.on(signal, () => {
      if (child) {
        console.log(
          `親プロセスが ${signal} を受け取りました。子プロセスに同じシグナルを送信します`
        );
        child.kill(signal); // 子プロセスに同じシグナルを送信
        child.on("close", (code, signal) => {
          console.log(`子プロセスは ${signal} によって終了しました`);
          process.exit(code); // 親プロセスも終了
        });
      }
    });
  });
}

// メインの処理開始
async function main() {
  handleSignals(); // シグナルハンドラーをセットアップ
  await monitorChild(); // 子プロセスの監視と再起動
}

main();
