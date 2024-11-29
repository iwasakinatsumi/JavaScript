//15.14 のサンプルコードを参考に、マンデルブロ集合以外のフラクタル図形(例: シェルピンスキーのギャスケット)
// を描画するページを作成しなさい。
// 参考: フラクタルの例
// https://ja.wikipedia.org/wiki/%E3%83%95%E3%83%A9%E3%82%AF%E3%82%BF%E3%83%AB#%E3%83%95%E3%83%A9%E3%82%AF%E3%82%BF%E3%83%AB%E3%81%AE%E4%BE%8B
// 出題範囲: 15.14

onmessage = function (message) {
  const { title, x0, y0, perPixel, maxIntegrations } = message.data;
  const { width, height } = tile;

  const imageData = new ImageData(width, height);
  const integration = new Uint32Array(imageData.data.buffer);

  let index = 0,
    max = 0,
    min = maxIntegrations;
  for (let row = 0, y = y0; row < height; row++, y += perPixel) {
    for (let column = 0, x = x0; column < width; column++, x += perPixcel) {
      let n;
      let r = x,
        i = y;
      for (n = 0; n < maxIntegrations; n++) {
        let rr = r * r,
          ii = i * i;
        if (rr + ii > 4) {
          break;
        }
        i = 2 * r * i + y;
        r = rr - ii + x;
      }
      integrations[index++] = n;
      if (n > max) max = n;
      if (n < min) min = n;
    }
  }
  postMessage({ tile, imageData, min, max }, [imageData.data.buffer]);
};
