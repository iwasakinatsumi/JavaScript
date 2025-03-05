// day.js にタイムゾーンと UTC プラグインを追加
dayjs.extend(window.dayjs_plugin_utc); // UTC プラグインを拡張
dayjs.extend(window.dayjs_plugin_timezone); // タイムゾーンプラグインを拡張

// Google Maps APIのキーをここに入力してください
const googleMapsApiKey = "YOUR_GOOGLE_MAPS_API_KEY";

// 現在の時刻を表示 (日本標準時)
function updateClock() {
  const now = dayjs().tz("Asia/Tokyo"); // 日本標準時
  const formattedTime = now.format("YYYY-MM-DD HH:mm:ss");
  document.getElementById("clock").textContent = `現在の時刻: ${formattedTime}`;
}

setInterval(updateClock, 1000); // 1秒ごとに更新
updateClock(); // 初回表示

// 地図の初期設定
const map = L.map("map").setView([35.6762, 139.6503], 5); // 東京を中央にセット

// 地図のタイルレイヤー設定 (OpenStreetMap)
L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
  attribution:
    '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
}).addTo(map);

// 地図のクリックイベント
map.on("click", function (e) {
  const lat = e.latlng.lat.toFixed(4);
  const lon = e.latlng.lng.toFixed(4);
  getTimeZone(lat, lon);
});

// 地点のタイムゾーンを取得するための関数
function getTimeZone(lat, lon) {
  // Google Maps Time Zone APIを呼び出してタイムゾーンを取得
  const timestamp = Date.now() / 1000; // 現在のタイムスタンプ
  const url = `https://maps.googleapis.com/maps/api/timezone/json?location=${lat},${lon}&timestamp=${timestamp}&key=${googleMapsApiKey}`;

  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      if (data.status === "OK") {
        const timezone = data.timeZoneId; // 取得したタイムゾーンID
        const locationTime = dayjs().tz(timezone).format("YYYY-MM-DD HH:mm:ss");
        document.getElementById(
          "location"
        ).textContent = `地点: 緯度: ${lat}, 経度: ${lon} / 現在の時刻: ${locationTime} (${timezone})`;
      } else {
        document.getElementById("location").textContent =
          "タイムゾーンの取得に失敗しました";
      }
    })
    .catch((error) => {
      console.error("タイムゾーンの取得エラー:", error);
      document.getElementById("location").textContent =
        "タイムゾーンの取得に失敗しました";
    });
}

// ズームコントロールの表示
L.control.zoom().addTo(map);
