// 15.14 のサンプルコードを参考に、マンデルブロ集合以外のフラクタル図形(例: シェルピンスキーのギャスケット)
// を描画するページを作成しなさい。
// 参考: フラクタルの例
// https://ja.wikipedia.org/wiki/%E3%83%95%E3%83%A9%E3%82%AF%E3%82%BF%E3%83%AB#%E3%83%95%E3%83%A9%E3%82%AF%E3%82%BF%E3%83%AB%E3%81%AE%E4%BE%8B
// 出題範囲: 15.14

onmessage = function (message) {
  const { x0, y0, maxDepth } = message.data;
  const { width, height } = tile;

  const imageData = new ImageData(width, height);
  const data = new Uint8ClampedArray(imageData.data.buffer);

  function drawSierpinski(x0, y0, x1, y1, depth) {
    if (depth === 0) {
      // ベースケース：深さが0ならば三角形を塗りつぶす
      for (let y = y0; y < y1; y++) {
        for (let x = x0; x < x1; x++) {
          const index = (y * width + x) * 4;
          data[index] = 0; // 赤
          data[index + 1] = 0; // 緑
          data[index + 2] = 255; // 青
          data[index + 3] = 255; // アルファ（不透明）
        }
      }
    } else {
      // 再帰的に3つの小さい三角形を描く
      const midX = Math.floor((x0 + x1) / 2);
      const midY = Math.floor((y0 + y1) / 2);
      const bottomLeftX = Math.floor((x0 + midX) / 2);
      const bottomLeftY = Math.floor((midY + y1) / 2);
      const bottomRightX = Math.floor((midX + x1) / 2);
      const bottomRightY = Math.floor((midY + y1) / 2);

      // 上の小さな三角形
      drawSierpinski(x0, y0, midX, midY, depth - 1);
      // 左下の小さな三角形
      drawSierpinski(bottomLeftX, bottomLeftY, midX, y1, depth - 1);
      // 右下の小さな三角形
      drawSierpinski(bottomRightX, bottomRightY, x1, y1, depth - 1);
    }
  }

  // 初期の三角形を描く
  drawSierpinski(x0, y0, x0 + width, y0 + height, maxDepth);

  postMessage({ tile, imageData }, [imageData.data.buffer]);
};
