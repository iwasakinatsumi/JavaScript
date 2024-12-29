/**
 * Shift_JIS で保存されたテキストファイル hello.txt を読み込み、文字化けしないようにコンソールに表示しなさい。
 * ライブラリiconv-liteを使用してよい。https://www.npmjs.com/package/iconv-lite
 * 出題範囲: 16.5.1
 */

const fs = require("fs");
const iconv = require("iconv-lite");

// hello.txt ファイルを読み込む
fs.readFile("hello.txt", (err, data) => {
  if (err) {
    console.error("ファイルの読み込みに失敗しました:", err);
    return;
  }

  // Shift_JIS から UTF-8 に変換
  const text = iconv.decode(data, "shift_jis");

  // 結果をコンソールに表示
  console.log(text);
});
