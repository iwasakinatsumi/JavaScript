// day.js にタイムゾーンと UTC プラグインを追加
dayjs.extend(window.dayjs_plugin_utc); // UTC プラグインを拡張
dayjs.extend(window.dayjs_plugin_timezone); // タイムゾーンプラグインを拡張

// Google Maps APIのキーをここに入力
const googleMapsApiKey = "Your Google Maps Api Key";

let locationTimeInterval = null; // 地点の時刻を更新するインターバルID
let currentTimeZone = ""; // 現在のタイムゾーン

let marker;

// 現在の時刻を表示 (日本標準時)
function updateClock() {
  const now = dayjs().tz("Asia/Tokyo"); // 日本標準時
  const formattedTime = now.format("YYYY-MM-DD HH:mm:ss");
  document.getElementById(
    "clock"
  ).textContent = `現在の東京の時刻: ${formattedTime}`;
}

setInterval(updateClock, 1000); // 1秒ごとに更新
updateClock(); // 初回表示

// 地図の初期設定
let lat = 35.6762;
let lon = 139.6503;
const map = L.map("map").setView([lat, lon], 5); // 東京を中央にセット

marker = L.marker([lat, lon]).addTo(map);

// 地図のタイルレイヤー設定 (OpenStreetMap)
L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
  attribution:
    '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
}).addTo(map);

// 地図のクリックイベント
map.on("click", function (e) {
  lat = e.latlng.lat.toFixed(4);
  lon = e.latlng.lng.toFixed(4);

  //マーカーの指定があれば消す
  if (marker) {
    map.removeLayer(marker);
  }

  //ピン表示
  marker = L.marker([lat, lon]).addTo(map);

  // 地点の時刻を初期化して空にする
  document.getElementById("location").textContent = "";

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
        currentTimeZone = timezone; // 現在のタイムゾーンを保存
        updateLocationTime(); // 地点の時刻を初期表示
        // 1秒ごとに地点の時刻を更新するインターバルを設定
        if (locationTimeInterval) {
          clearInterval(locationTimeInterval); // 前のインターバルをクリア
        }
        locationTimeInterval = setInterval(() => updateLocationTime(), 1000); // 地点の時刻を更新
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

// 地点の時刻を更新する関数
function updateLocationTime() {
  if (currentTimeZone) {
    const locationTime = dayjs()
      .tz(currentTimeZone)
      .format("YYYY-MM-DD HH:mm:ss");

    if (lat && lon) {
      document.getElementById(
        "location"
      ).textContent = `緯度: ${lat}, 経度: ${lon} 地点の現在の時刻: ${locationTime} (${currentTimeZone})`;
    } else {
      document.getElementById("location").textContent =
        "緯度・経度の取得に失敗しました";
    }
  }
}
