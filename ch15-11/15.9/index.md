15.4-10.10 で作成したライフゲームについて、WebSocket を利用して多人数で同期してプレイできるようにしなさい。  
サーバ側はあらかじめ用意してあるので、クライアント側を作成するのが課題となる。  
ex09/server.js は、ライフゲームの盤面情報を管理し WebSocket でクライアントと送受信する WebSocket サーバーである。  
15.4-10.10 で実装した updateGrid メソッドを server.js にも実装し、以下のコマンドで実行すると ws://localhost:3003 で WebSocket サーバが起動する。

> node ex09/server.js

このサーバでは、ゲームが開始されると 1 秒に 10 回盤面を更新し、以下のメッセージをすべてのクライアントに送信する。

> {
> "type": "update",
> "grid": {盤面を表す boolean 二次元配列}
> }

また、クライアントからは WebSocket で以下のメッセージを受信し、ゲームの盤面・進行状態に反映する。

- セルの反転（盤面クリック時）

> {
> "type": "toggle",
> "row": {セルの行数},
> "col": {セルの列数}
> }

- ゲームの一時停止

> {
> "type": "pause"
> }

- ゲームの開始・再開

> {
> "type": "start"
> }

出題範囲: 15.11.3

# メモ

ws できないと思ったら！ファイアウォールでブロックされていたらしい
https://qiita.com/siroitori0413/items/31a570f4e8447f1da985  
https://develop.miugle.info/websocket/  
↑ だと問題なさそうに見えるが…
