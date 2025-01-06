/**
 * 読み込んだ画像に対してガウシアンフィルタ(ch15.4-10 ex09 参照)を適用するプログラムを作成しなさい。
 * フィルタの適用はワーカースレッドで行うこと。
 * 出題範囲: 16.11
 */
const { parentPort, workerData } = require("worker_threads");

// ガウシアンフィルタを適用する関数
function applyGaussianFilter(imageData, width, height) {
  const kernel = [
    [1, 4, 6, 4, 1],
    [4, 16, 24, 16, 4],
    [6, 24, 36, 24, 6],
    [4, 16, 24, 16, 4],
    [1, 4, 6, 4, 1],
  ];

  const kernelSum = 256; // カーネルの合計値
  const outputData = new Uint8ClampedArray(imageData.length);

  for (let y = 0; y < height; y++) {
    for (let x = 0; x < width; x++) {
      let r = 0,
        g = 0,
        b = 0;

      for (let ky = -2; ky <= 2; ky++) {
        for (let kx = -2; kx <= 2; kx++) {
          const px = Math.min(width - 1, Math.max(0, x + kx));
          const py = Math.min(height - 1, Math.max(0, y + ky));
          const offset = (py * width + px) * 4;
          const weight = kernel[ky + 2][kx + 2];

          r += imageData[offset] * weight;
          g += imageData[offset + 1] * weight;
          b += imageData[offset + 2] * weight;
        }
      }

      const i = (y * width + x) * 4;
      outputData[i] = r / kernelSum;
      outputData[i + 1] = g / kernelSum;
      outputData[i + 2] = b / kernelSum;
      outputData[i + 3] = imageData[i + 3]; // アルファ値はそのまま
    }
  }

  return outputData;
}

// 画像データを取得
const { image, width, height } = workerData;

// ガウシアンフィルタを適用
const filteredImage = applyGaussianFilter(image.data, width, height);

// 親スレッドに結果を送信
parentPort.postMessage(filteredImage);
