function counterGroup() {
  function counter() {
    let n = 0;
    return {
      count: function () {
        return n++;
      },
      reset: function () {
        n = 0;
      },
    };
  }
  function newCounter() {
    return counter();
  }
  function total() {
    return counter().count();
  }
  //以下2つどうやって求める？
  function average() {}
  function variance() {}
}
