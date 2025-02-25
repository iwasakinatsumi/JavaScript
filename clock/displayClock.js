/**
 * デジタル時計を表示する
 */

// 日本の標準時（JST）をデジタル表示する
function showJST() {
  const now = new Date();
  const jstOffset = 9 * 60; // 日本標準時はUTC+9
  const jstTime = new Date(
    now.getTime() + (jstOffset - now.getTimezoneOffset()) * 60000
  );

  const hours = String(now.getHours()).padStart(2, "0");
  const minutes = String(now.getMinutes()).padStart(2, "0");
  const seconds = String(now.getSeconds()).padStart(2, "0");
  document.getElementById("clock").innerText = `${hours}:${minutes}:${seconds}`;
}

setInterval(showJST, 1000); // 1秒ごとに更新
