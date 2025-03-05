// Day.jsにプラグインを追加
dayjs.extend(window.dayjs_plugin_utc);
dayjs.extend(window.dayjs_plugin_timezone);

// 現在の日本時間を表示する関数
function updateClock() {
  const now = dayjs().tz("Asia/Tokyo"); // 日本時間 (JST) を取得

  let hours = now.hour();
  let minutes = now.minute();
  let seconds = now.second();

  // 時計表示用の文字列を作成
  const timeString = `${hours}:${minutes}:${seconds}`;
  document.getElementById("time").textContent = timeString;
}

// 1秒ごとに更新
setInterval(updateClock, 1000);
updateClock(); // 初期表示

// Leafletで地図を作成
const map = L.map("map").setView([35.682839, 139.759455], 2); // 初期位置は東京（日本）

// OpenStreetMapタイルレイヤーを設定
L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
  attribution:
    '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
}).addTo(map);

// 地図クリック時の処理
map.on("click", function (e) {
  const lat = e.latlng.lat; // 緯度
  const lng = e.latlng.lng; // 経度

  // 地名の取得（逆ジオコーディング）
  fetch(
    `https://nominatim.openstreetmap.org/reverse?lat=${lat}&lon=${lng}&format=json`
  )
    .then((response) => response.json())
    .then((data) => {
      const location = data.display_name || `緯度: ${lat}, 経度: ${lng}`;

      // タイムゾーンの取得
      const timezone = Intl.DateTimeFormat().resolvedOptions().timeZone;
      const currentTime = dayjs().tz(timezone).format("YYYY-MM-DD HH:mm:ss");

      // 地名と現在時刻を表示
      document.getElementById("location-info").innerHTML = `
        <strong>場所:</strong> ${location} <br>
        <strong>現在時刻:</strong> ${currentTime}
      `;
    });
});

// 地図のサイズを動的に更新する関数
function resizeMap() {
  const height = window.innerHeight * 0.7; // 画面の70%に地図を設定
  const mapContainer = document.getElementById("map");
  mapContainer.style.height = `${height}px`; // #mapの高さをビューポートの高さに設定
  map.invalidateSize(); // Leafletの地図サイズを再計算
}

// 初期サイズ設定
//resizeMap();

// ウィンドウリサイズ時に地図のサイズを更新
//window.addEventListener("resize", resizeMap);
