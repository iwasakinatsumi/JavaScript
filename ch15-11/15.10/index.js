// 問題 15.4-10.9 の画像変換処理を、Web Worker で処理するように修正しなさい。
// 可能であればページ内に動くオブジェクトを配置し、画像変換中にメインスレッドがブロックされていないことを確認しなさい。
// 出題範囲: 15.13

//参考：https://qiita.com/irico/items/4a4049fbda7bfd654498

// document.getElementById("image").addEventListener("change", (event) => {
//   const file = event.target.files[0];
//   if (!file) {
//     return;
//   }

//   const img = new Image();
//   const reader = new FileReader();

//   reader.addEventListener("load", (e) => {
//     img.src = e.target.result;
//   });

//   img.addEventListener("load", () => {
//     const originalCanvas = document.getElementById("original");
//     const filteredCanvas = document.getElementById("filtered");
//     const originalCtx = originalCanvas.getContext("2d");
//     const filteredCtx = filteredCanvas.getContext("2d");

//     originalCanvas.width = img.width;
//     originalCanvas.height = img.height;
//     filteredCanvas.width = img.width;
//     filteredCanvas.height = img.height;

//     originalCtx.drawImage(img, 0, 0);

//     const imageData = originalCtx.getImageData(0, 0, img.width, img.height);
//     const data = imageData.data;

//     const kernel = [
//       [1, 4, 6, 4, 1],
//       [4, 16, 24, 16, 4],
//       [6, 24, 36, 24, 6],
//       [4, 16, 24, 16, 4],
//       [1, 4, 6, 4, 1],
//     ];

//     const kernelSum = 256; // カーネルの合計値　参考サイトのものは↑で割れば同じ

//     const outputData = new Uint8ClampedArray(data.length);

//     // 各ピクセルにガウシアンフィルタを適用
//     for (let y = 2; y < img.height - 2; y++) {
//       for (let x = 2; x < img.width - 2; x++) {
//         let r = 0,
//           g = 0,
//           b = 0;

//         // カーネルを適用
//         for (let ky = -2; ky <= 2; ky++) {
//           for (let kx = -2; kx <= 2; kx++) {
//             const pixelIndex = ((y + ky) * img.width + (x + kx)) * 4;
//             const weight = kernel[ky + 2][kx + 2];

//             r += data[pixelIndex] * weight;
//             g += data[pixelIndex + 1] * weight;
//             b += data[pixelIndex + 2] * weight;
//           }
//         }

//         // ピクセルの値を正規化し、出力データに設定
//         const outputIndex = (y * img.width + x) * 4;
//         outputData[outputIndex] = r / kernelSum;
//         outputData[outputIndex + 1] = g / kernelSum;
//         outputData[outputIndex + 2] = b / kernelSum;
//         outputData[outputIndex + 3] = 255;
//       }
//     }

//     filteredCtx.putImageData(imageData, 0, 0);
//   });

//   reader.readAsDataURL(file);
// });

//下記サンプル
const worker = new Worker("worker.js");

worker.addEventListener(
  "message",
  (e) => {
    console.log("Workerから受け取ったデータは: ", e.data);
  },
  false
);

worker.postMessage("Hello, world");
