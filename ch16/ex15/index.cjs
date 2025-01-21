/**
 * p.691-692 のサンプルコードを以下のように SharedArrayBuffer および Atomic を使わない形式に書き換えなさい。
 * 1.sharedArray を number 型の変数 num にする
 * 2.メインスレッドの for ループで Atomic.add の代わりに num をインクリメントする
 * 3.サブスレッドの for ループで Atomic.add の代わりにメインスレッドに"num をインクリメントせよ"というメッセージを送り、メインスレッドではそのメッセージを受信したら num をインクリメントする
 * このようないわゆるメッセージパッシングによって排他制御処理相当を行う並行処理モデルを何と呼ぶか書きなさい。
 * ⇒Actorモデル https://www.slideshare.net/slideshow/akka-136932641/136932641#7
 * 出題範囲: 16.11.5
 */

const threads = require("worker_threads");
if (threads.isMainThread) {
  //let sharedBuffer = new SharedArrayBuffer(4);
  //let sharedArray = new Int32Array(sharedBuffer);
  //let worker = new threads.Worker(__filename, { workerData: sharedArray });

  let num = 0;
  let worker = new threads.Worker(__filename, { workerData: num });

  worker.on("online", () => {
    for (let i = 0; i < 10_000_000; i++) {
      //Atomics.add(sharedArray, 0, 1); //スレッドセーフでアトミックなインクリメント
      num++;
    }

    worker.on("message", (message) => {
      //両方のスレッドが終了したら、スレッドセーフな関数を使って
      //共有配列を読み込み、期待通りの20,000,000という値になっていることを確認する
      console.log(num);
    });
  });
} else {
  let num = threads.workerData;
  for (let i = 0; i < 10_000_000; i++) {
    num++;
  }
  threads.parentPort.postMessage("done");
}
