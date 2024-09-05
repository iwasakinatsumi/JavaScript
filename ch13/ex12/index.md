問題 13.1 で非同期処理について学んだあなたは「時間のかかる同期関数があるならば、非同期関数に変換して適宜 await すればいいのではないか」と思いついた。
それでは以下のコードを実行すると何が出力されるか予想し実際に確認しなさい。
また「マイクロタスク」について調査し、この用語を用いて理由を説明しなさい。
出題範囲: 13.3

# 予想

await しても何も解決されないので、1 秒後に Hello,World!は出力されない

# 結果

1 秒経っても何も表示されずに、その後も Hello,World!は出力されなかった

# 理由

タスク(マクロタスク)
次の種類のコールバック関数を指し、タスクキューに格納されます。

script タグで読み込んだ JavaScript ファイル
setTimeout / setInterval のコールバック関数
UI イベント(クリック、マウス移動等)のコールバック関数
requestAnimationFrame のコールバック関数　https://developer.mozilla.org/ja/docs/Web/API/Window/requestAnimationFrame

マイクロタスク
次の種類のコールバック関数を指し、マイクロタスクキューに格納されます。

Promise の then / catch / finally のコールバック関数
queueMicrotask のコールバック関数　https://developer.mozilla.org/ja/docs/Web/API/queueMicrotask
MutationObserver のコールバック関数　https://developer.mozilla.org/ja/docs/Web/API/MutationObserver

タスク(マクロタスク)との違い

> 主な違いは 2 つあります。
> まず、タスクが終了するたびに、イベントループは、タスクが他の JavaScript コードに制御を返しているかどうかをチェックします。
> もしそうでなければ、マイクロタスクキューにあるすべてのマイクロタスクを実行します。
> マイクロタスクキューは、イベントや他のコールバックを処理した後を含め、イベントループの反復ごとに複数回処理されます。
> 次に、マイクロタスクが queueMicrotask() を呼び出してキューにさらにマイクロタスクを追加すると、それらの新しく追加されたマイクロタスクは次のタスクが実行される前に実行されます。
> これは、イベントループが、たとえ追加され続けても、キューに何も残らなくなるまでマイクロタスクを呼び続けるからです。

setTimeout は「タスクキュー」に格納され、longRunningButAsyncFunction は「マイクロタスクキュー」に入った。
そのため、タスクキューが実行された後、マイクロタスクキューが実行に入る。
マイクロタスクキューはキューに何も残らなくなるまで、マイクロタスクを呼び続ける(今回の場合は無限ループ)ので、
タスクキューは実行されなかった。

参考：  
https://engineering.mercari.com/blog/entry/20220128-3a0922eaa4/
https://developer.mozilla.org/ja/docs/Web/API/HTML_DOM_API/Microtask_guide
https://zenn.dev/estra/books/js-async-promise-chain-event-loop/viewer/d-epasync-task-microtask-queues
