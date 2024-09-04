//fetchSumOfFileSizes を Promise.all を使って書き換え、ディレクトリ内のファイルサイズを同時並行で取得するようにしなさい。
//注意: Promise.all を使う時は注意すること (例えば Web API の呼び出しを並行に実行すると、数次第で何らかのエラーに繋がる可能性がある)
//出題範囲: 13.3

//元コード
function fetchSumOfFileSizes(path, callback) {
  fs.readdir(path, (err, files) => {
    if (err) {
      callback(err);
      return;
    }

    let total = 0;
    const rest = [...files];

    function iter() {
      if (rest.length === 0) {
        callback(null, total);
        return;
      }

      const next = rest.pop();
      fs.stat(join(path, next), (err, stats) => {
        if (err) {
          callback(err);
          return;
        }
        total += stats.size;
        iter();
      });
    }
    iter();
  });
}

function _fetchSumOfFileSizes(path, callback) {
  //上は1つずつ取得して、足していくのをファイルサイズを全部取得終了したら、最後に合計する
  fs.readdir(path).then((files) => {
    //ファイル取得出来たら、ファイルサイズを取得する部分をPromise.allにする
  });
}
