P.664 では fs.truncate() を利用してファイルを拡張した場合には拡張された部分には 0 が書き込まれる、と説明されていますが、これは ASCII の"0"が書き込まれるという意味ではありません。  
実際に fs.truncate() を利用してファイルを拡張し、拡張されたファイルの内容をバイナリエディタ(Stirling や VSCode の HexEditor 拡張機能等)で確認しなさい。  
出題範囲: 16.7

fs.truncate()  
参考：  
https://www.geeksforgeeks.org/node-js-fs-truncate-method/　　
https://nodejs.org/api/fs.html#fstruncatepath-len-callback

memo：

> Using fs.truncate with a file descriptor is deprecated. Please use fs.ftruncate with a file descriptor instead

が出たので、ftruncate にした。(Node のバージョン？)

> ファイルサイズの変更エラー: [Error: EPERM: operation not permitted, ftruncate] {
> errno: -4048,
> code: 'EPERM',
> syscall: 'ftruncate'
> }

が出ている…

吉田さんコメント：  
警告なので、実際には実行されていたのでは？

動いているが、↑ のエラーは変わらず。

渡邊さんコメント：  
fs.truncate()でディスクリプタじゃなくてファイル名（パス）を与えるとか

下記の修正を追加。resize.cjs が動作するもの。エディタで 00 パディングされていることを確認。  
**fs.fstat**を使用してファイルの現在のサイズを取得。  
現在のサイズが目標サイズより小さい場合にのみ拡張を行います。  
不足している分だけ、Buffer.alloc を使って空のバッファを作成し、fs.write でファイルに書き込みます。

何がいけなかったのか？？
