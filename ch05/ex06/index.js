function test() {
  var array = [0, 1, 2];
  try {
    console.log("try実行開始");
    for (i = 0; i < 4; i++) {
      console.log(array[i]);
    }
  } catch (e) {
    console.log("例外処理：" + e);
  } finally {
    console.log("処理終了");
  }
}

test();
