/**
 * 書籍 16.8 節の HTTP サーバを改造しファイルの取得だけでなくファイルをストリームでアップロードできるようにしなさい:
 * NOTE: file.txt の内容をアップロード
 * fetch("http://localhost:8000/foo/bar/hello.txt", {
 * method: "PUT",
 * body: fs.createReadStream("file.txt"),
 * duplex: "half",
 * });
 * また大きな file.txt に対し fs.createReadStream を利用した場合と fs.read を利用した場合でメモリ使用量がどれだけ違うか確認しなさい。
 * 出題範囲: 16.8
 **/
const https = require("https");
const path = require("path");

function postJSON(host, endpoint, body, port, username, password) {
  return new Promise((resolve, reject) => {
    let bodyText = JSON.stringify(body);

    let requestOptions = {
      method: "POST",
      host: host,
      path: endpoint,
      headers: {
        "Content-Type": "application/json",
        "Content-Length": Buffer.byteLength(bodyText),
      },
    };

    if (port) {
      requestOptions.port = port;
    }

    if (username && password) {
      requestOptions.auth = `${username}:${password}`;
    }

    let request = https.request(requestOptions);

    request.write(bodyText);
    request.end();

    request.on("error", (e) => reject(e));

    request.on("response", (response) => {
      if (response.statusCode !== 200) {
        reject(new Error(`HTTP status ${response.statusCode}`));
        response.resume();
        return;
      }

      response.setEncoding("utf8");

      let body = "";
      response.on("data", (chunk) => {
        body += chunk;
      });

      response.on("end", () => {
        try {
          resolve(JSON.parse(body));
        } catch (e) {
          reject(e);
        }
      });
    });
  });
}
