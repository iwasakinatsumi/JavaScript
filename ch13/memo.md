# JavaScript の非同期実行

1.コールバック
13.1.4 　コールバック関数？

> 第 1 引数として、2 つのパラメータを持つコールバックを指定する

→Object.assign がここでのコールバック関数
第 1 引数は Object.assign にかかっている！
(fs.readFile の話ではない)

2.Promise
非同期の計算結果を返すオブジェクト
→ 何か処理をしてくれるわけではなく、あくまでも処理は別のところで実施する感じか

then()：コールバックを登録するためのメソッド
→getJson(url).then(xxx,yyy)
getJson で url の取得が
・成功したら第 1 引数の xxx が実行される
・失敗したら第 2 引数の yyy が実行される：基本的には Error オブジェクトになる

p.383
getJson()が戻る？

クを登録するためのメソッド
→getJson(url).then(xxx).catch(yyy)
getJson で url の取得が成功したら xxx が実行される。エラーは yyy で catch する

3.async/await

await Promise が完了するまでは待つ
→ 前の処理が終わらない限り、次に進まない
await は async がないと使えない
async 宣言された関数の返り値は Promise

並列実行には Promise.all を使う
