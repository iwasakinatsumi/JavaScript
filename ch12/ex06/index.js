/**
 * 指定されたディクトリ内のファイル/ディレクトリを再帰的に探索するジェネレータ関数 function* walk(rootPath) を作成しなさい。
 * ファイルとディレクトリのみを考慮すれば良く、シンボリックリンクやブロックデバイスなどは無視して良い。
 * fs モジュールの同期関数 (fs.xxxSync()) を利用すること。
 * 取得できるデータは以下のプロパティを持つオブジェクトにすること。
 * path: ファイル/ディレクトリのパス文字列
 * isDirectory: ディレクトリであれば true, そうでなければ false
 * 出題範囲: 12.3.2
 * https://ja.wikipedia.org/wiki/%E3%82%A8%E3%83%A9%E3%83%88%E3%82%B9%E3%83%86%E3%83%8D%E3%82%B9%E3%81%AE%E7%AF%A9
 */

export function* walk(rootPath) {}

//出力結果は↓みたいな感じ
//{path:'js/test/index.js',isDirectory:false}
