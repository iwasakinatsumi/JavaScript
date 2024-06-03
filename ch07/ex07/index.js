//挿入ソート
function sort(
  array,
  compare = (lhs, rhs) => (lhs < rhs ? -1 : lhs > rhs ? +1 : 0)
) {
  // array[0 ... i-1] が常にソート済みになるように処理を進める
  // (0 <= j < i-1 に対して compare(array[j], array[j + 1]) <= 0 が成り立つ)
  for (let i = 1; i < array.length; i++) {
    const v = array[i];

    // array[i] を array[0 ... i] の適切な場所に挿入する
    let j = i;
    while (j > 0 && compare(array[j - 1], v) > 0) {
      array[j] = array[j - 1];
      j--;
    }
    array[j] = v;
  }
  return array;
}

//バブルソート
export function bubbleSort(array) {
  for (let i = 0; i < array.length - 1; i++) {
    for (let j = array.length - 1; j > i; j--) {
      //後ろから値を比較していく
      if (array[j] < array[j - 1]) {
        let tmp = array[j];
        array[j] = array[j - 1];
        array[j - 1] = tmp;
      }
    }
  }
  return array;
}

console.log(bubbleSort([5, 3, 4, 1, 2]));
