// ex09 は画像のグレースケール変換を行うデモである。
// このプログラムを変更し、グレースケール変換ではなくガウシアンフィルタ (最低 5x5) によるぼかし処理を実施しなさい。
// 出題範囲: 15.7

document.getElementById("image").addEventListener("change", (event) => {
  const file = event.target.files[0];
  if (!file) {
    return;
  }

  const img = new Image();
  const reader = new FileReader();

  reader.addEventListener("load", (e) => {
    img.src = e.target.result;
  });

  img.addEventListener("load", () => {
    const originalCanvas = document.getElementById("original");
    const filteredCanvas = document.getElementById("filtered");
    const originalCtx = originalCanvas.getContext("2d");
    const filteredCtx = filteredCanvas.getContext("2d");

    originalCanvas.width = img.width;
    originalCanvas.height = img.height;
    filteredCanvas.width = img.width;
    filteredCanvas.height = img.height;

    originalCtx.drawImage(img, 0, 0);

    const imageData = originalCtx.getImageData(0, 0, img.width, img.height);
    const data = imageData.data;

    // グレースケールへの変換 (RGB を足して平均を取っている)
    // 参考：https://qiita.com/sassy_watson/items/676af253d8425ce0f8fc

    // ガウシアンフィルタを実装する場合はこの周辺のコードを変更しなさい
    //　参考：https://www.mitani-visual.jp/mivlog/imageprocessing/gf3r89.php
    // 5x5の重みづけ
    const kernel = [
      [1, 4, 6, 4, 1],
      [4, 16, 24, 16, 4],
      [6, 24, 36, 24, 6],
      [4, 16, 24, 16, 4],
      [1, 4, 6, 4, 1],
    ];

    const kernelSum = 256; // カーネルの合計値　参考サイトのものは↑で割れば同じ

    // imageData の中身はそのままに別の配列に結果を格納するとよい
    // ```js
    //https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/Uint8ClampedArray
    const outputData = new Uint8ClampedArray(data.length);
    //
    // TODO: ここで imageData.data を参照して outputData に結果を格納
    // 参考：https://zenn.dev/inaniwaudon/scraps/4c50abe16011a1
    //
    for (let i = 0; i < data.length; i += 4) {
      const avg = (data[i] + data[i + 1] + data[i + 2]) / 3;
      data[i] = avg;
      data[i + 1] = avg;
      data[i + 2] = avg;
    }

    filteredCtx.putImageData(imageData, 0, 0);
  });

  reader.readAsDataURL(file);
});
