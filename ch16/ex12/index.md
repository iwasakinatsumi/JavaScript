用語「C10K 問題」について調べて説明しなさい。
出題範囲 16.10

# C10K 問題

アクセスするクライアントの台数が 1 万台を超えると処理のためのサーバーのスレッド数が増え、サーバーのメモリ数などが不足してしまう
Client 10K(=10\*1000=10000)

# 回避方法

Node.js を使う

# なぜか？

Node.js はノンブロッキング I/O モデルを採用  
⇒ 並行で処理可能

→ 大量にスレッドやプロセスを作成しないので可能。

参考：  
https://qiita.com/katu_/items/01c9c35d17a541014d32

https://qiita.com/hiroaki-u/items/f2455d62f8a4017663cb
https://qiita.com/kamihork/items/296ee689a8d48c2bebcd
