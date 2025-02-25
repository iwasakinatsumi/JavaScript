// 地図の初期化とクリックイベントの処理
function initializeMap() {
  const map = L.map("map").setView([35.682839, 139.759455], 2); // 初期位置は東京

  L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
    attribution:
      '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
  }).addTo(map);

  // クリックイベントの処理
  map.on("click", function (e) {
    const lat = e.latlng.lat;
    const lng = e.latlng.lng;

    console.log(moment.tz); // これが表示されない場合、moment-timezoneが正しく読み込まれていない

    // クリックした地点の現在時刻を取得
    const timezone = moment.tz.guess(); // 現地のタイムゾーンを取得
    const currentTime = moment
      .tz({ lat: lat, lng: lng }, timezone)
      .format("YYYY-MM-DD HH:mm:ss");

    // 地名（または緯度経度）と時刻を表示
    // const locationInfo = `位置: 緯度: ${lat.toFixed(2)}, 経度: ${lng.toFixed(
    //   2
    // )} <br> 時刻: ${currentTime}`;
    const locationInfo = `<div>
        <p><strong>位置:</strong> 緯度: ${lat.toFixed(2)}, 経度: ${lng.toFixed(
      2
    )}</p>
        <p><strong>時刻:</strong> ${currentTime}</p>
      </div>
    `;

    document.getElementById("info").innerHTML = locationInfo;
    //document.getElementById("info").innerText = "ここに情報を表示します";
  });
}
