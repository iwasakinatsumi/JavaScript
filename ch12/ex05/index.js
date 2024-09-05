/**
 * 指定されたファイルパスを受け取り、そのファイルを改行コード \n の出現ごとに分割して返すジェネレータ関数 function* readLines(filePath) を作成しなさい。
 * 取得できる文字列からは改行コードが除去されていること。
 * ファイルの読み込みは一度にすべて読み込むのではなく、fs.openSync(), fs.readSync() を使って一定バッファサイズごとに読み込むようにし、必ず fs.closeSync() でファイルをクローズすること。
 * また、利用者側のイテレータのループの途中で break したり throw された場合でも fs.closeSync() されるようにすること。
 * 読み込まれるファイルは UTF-8 エンコーディングされたテキストファイルであると想定して良い。
 * 出題範囲: 12.3
 */

const fs = require("fs");

export function* readLines(filePath) {
  //一定バッファサイズごと
  var bufferSize = 1024;
  //https://nodejs.org/api/buffer.html#static-method-bufferallocsize-fill-encoding
  //指定サイズで区切る
  var buffer = Buffer.alloc(bufferSize);

  //Similar to fs.readFile(), when the path is a directory, the behavior of fs.readFileSync() is platform-specific.
  try {
    fs.openSync(filePath);
    fs.readSync(filePath, buffer, "utf-8");
    //\nでsplit
  } catch (e) {
    console.log(e.message);
  } finally {
    fs.closeSync();
  }
}

//↓がファイルに含まれていた場合
//明日\nごはんに行く\n
//出力イメージ
//明日
//ごはんに行く
