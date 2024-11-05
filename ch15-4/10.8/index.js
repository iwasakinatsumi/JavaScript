// アナログ SVG 時計に秒針を追加しなさい。HTML は変更しないこと。
// 出題範囲: 15.7

document.addEventListener("DOMContentLoaded", () => {
  const svg = document.querySelector("svg");

  // 秒針を作成
  // https://developer.mozilla.org/ja/docs/Web/SVG/Element/line
  // https://beamaker.jp/article/19
  const secondHand = document.createElementNS(
    "http://www.w3.org/2000/svg",
    "line"
  );
  secondHand.setAttribute("id", "second-hand");
  secondHand.setAttribute("stroke", "red"); //秒針の色
  secondHand.setAttribute("stroke-width", "1"); //秒針の太さ：

  // SVG に秒針を追加
  svg.appendChild(secondHand);

  //時刻を更新する
  function updateClock() {
    let now = new Date(); //現在時刻の取得
    let sec = now.getSeconds(); //秒の取得
    let min = now.getMinutes() + sec / 60; //分の取得 小数部を持つ"分"
    let hour = (now.getHours() % 12) + min / 60; //時間の取得 小数部を持つ"時"
    let minangle = min * 6; // 1分あたり6度
    let hourangle = hour * 30; // 1時間あたり30度
    let secondsAngle = sec * 6; // 1秒あたり6度

    //時計の針のSVG要素を取得する
    let minhand = document.querySelector("#clock .minutehand");
    let hourhand = document.querySelector("#clock .hourhand");

    //SVG属性を設定して、時計盤の中で回転する
    minhand.setAttribute("transform", `rotate(${minangle},50,50)`);
    hourhand.setAttribute("transform", `rotate(${hourangle},50,50)`);
    secondHand.setAttribute("transform", `rotate(${secondsAngle}, 50, 50)`);
  }

  setInterval(updateClock, 1000);
  updateClock(); // 初期表示のために即時実行
});
