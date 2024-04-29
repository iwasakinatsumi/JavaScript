function test() {
  try {
    error();
    console.log("try");
  } catch (e) {
    console.log("例外処理" + e);
  } finally {
    console.log("finally");
  }
}
