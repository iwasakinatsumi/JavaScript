//与えられた数値を 32 ビット整数表現形式で表現した場合に 1 であるビットの数を返す関数bitCountを書きなさい。
//例としてbitCount(0b111)は 3 を返し、bitCount(0b1111111111111111111111111111111)は31を返しなさい。

export function bitCount(num) {
  let c = 0;
  for (let i = 0; i < 32; i++) {
    if (num & 0x1) {
      //下位1ビットをマスキングしていって1ならcでカウントする
      //https://gorogoronyan.web.fc2.com/htmlsample/src/TestJS_bitcount1.html
      c++;
    }
    num = num >>> 1; //大量のシフト演算で処理時間が増大する
  }
  return c;
}
