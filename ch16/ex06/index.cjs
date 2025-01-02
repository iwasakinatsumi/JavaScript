const fs = require("fs");
const path = require("path");

// 拡張したいファイルのパス
const filePath = path.join(__dirname, "sample.txt");

// ファイルを開き、サイズを 2048 バイトに変更（拡張）
fs.open(filePath, "a", (err, fd) => {
  if (err) {
    console.error("ファイルのオープンエラー:", err);
    return;
  }

  const newSize = 2048;

  // ファイルサイズを 10 バイトに設定する（拡張）
  fs.ftruncate(fd, newSize, (err) => {
    if (err) {
      console.error("ファイルサイズの変更エラー:", err);
    } else {
      console.log(`ファイルのサイズを ${newSize} バイトに拡張しました。`);
    }

    // ファイルディスクリプタを閉じる
    fs.close(fd, (err) => {
      if (err) {
        console.error("ファイルのクローズエラー:", err);
      }
    });
  });
});
