/**
 * 指定のパス文字列を引数にとり、ファイルならfile、ディレクトリならdirectoryを返すcheckEntry関数をfs.statsを利用して実装しなさい。
 * なお、可能ならfile, directory以外を返すパターンの必要性を考えてそれも関数内に実装しなさい。
 * 出題範囲 16.7.5
 */

const fs = require("fs").promises;
const path = require("path");

async function checkEntry(path) {
  try {
    const stats = await fs.stat(path);
    if (stats.isFile()) {
      return "ファイルです"; // ファイルの場合
    } else if (stats.isDirectory()) {
      return "ディレクトリです"; // ディレクトリの場合
    } else {
      return "その他です"; // その他のタイプ
    }
  } catch (error) {
    // エラーが発生した場合
    return "エラーが発生しました";
  }
}

(async () => {
  const result = await checkEntry(__dirname);
  console.log(result);
})();
