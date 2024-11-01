// アナログ SVG 時計に秒針を追加しなさい。HTML は変更しないこと。
// 出題範囲: 15.7

document.addEventListener("DOMContentLoaded", () => {
  const svg = document.querySelector("svg");

  // 秒針を作成
  const secondHand = document.createElementNS(
    "http://www.w3.org/2000/svg",
    "line"
  );
  secondHand.setAttribute("id", "second-hand");
  secondHand.setAttribute("x1", "50");
  secondHand.setAttribute("y1", "50");
  secondHand.setAttribute("x2", "50");
  secondHand.setAttribute("y2", "10");
  secondHand.setAttribute("stroke", "red");
  secondHand.setAttribute("stroke-width", "2");

  // SVG に秒針を追加
  svg.appendChild(secondHand);

  function updateClock() {
    const now = new Date();
    const seconds = now.getSeconds();
    const secondsAngle = seconds * 6; // 1秒あたり6度

    secondHand.setAttribute("transform", `rotate(${secondsAngle}, 50, 50)`);
  }

  setInterval(updateClock, 1000);
  updateClock(); // 初期表示のために即時実行
});
