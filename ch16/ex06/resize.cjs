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

  // ファイルの現在のサイズを確認する
  fs.fstat(fd, (err, stats) => {
    if (err) {
      console.error("ファイル情報の取得エラー:", err);
      fs.close(fd, () => {}); // エラー時でもファイルを閉じる
      return;
    }

    const currentSize = stats.size;

    if (currentSize >= newSize) {
      console.log(`ファイルはすでに ${newSize} バイト以上のサイズです。`);
      fs.close(fd, () => {}); // ファイルを閉じる
      return;
    }

    // 新しいサイズに足りない分だけを埋める
    const buffer = Buffer.alloc(newSize - currentSize); // 足りないサイズだけバッファを作成

    fs.write(fd, buffer, 0, buffer.length, currentSize, (err) => {
      if (err) {
        console.error("ファイルの書き込みエラー:", err);
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
});
