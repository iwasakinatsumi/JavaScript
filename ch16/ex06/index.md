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
