const { Worker } = require("worker_threads");
const Jimp = require("jimp");

// 画像を読み込む
Jimp.read("image.jpg")
  .then((image) => {
    // ワーカースレッドを作成
    const worker = new Worker("./worker.js", {
      workerData: {
        image: image.bitmap,
        width: image.bitmap.width,
        height: image.bitmap.height,
      },
    });

    worker.on("message", (filteredImage) => {
      // フィルタ適用後の画像を保存
      new Jimp({
        data: filteredImage,
        width: image.bitmap.width,
        height: image.bitmap.height,
      }).write("output.jpg", () => {
        console.log("画像のフィルタ適用が完了しました。");
      });
    });

    worker.on("error", (err) => {
      console.error("ワーカースレッドでエラーが発生しました:", err);
    });

    worker.on("exit", (code) => {
      if (code !== 0) {
        console.error(`ワーカースレッドが終了コード ${code} で終了しました`);
      }
    });
  })
  .catch((err) => {
    console.error("画像の読み込みに失敗しました:", err);
  });
