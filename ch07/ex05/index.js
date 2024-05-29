//このように破壊的な操作を避けて配列の操作を行いたいシーンは多々考えられる。
//そこで以下のように push/pop/shift/unshift/sort の非破壊的版関数を書きなさい。各関数は返り値に変更後の新しい配列を返しなさい。

const seq = [1, 2, 3, 4, 5];

export function pop(array) {
  return array.slice(0, 4);
}

export function push(array, num) {
  return array.concat(num);
}

export function shift(array) {
  return array.slice(1, 5);
}

export function unshift(array, num) {
  return [num].concat(array);
}

export function sort(array) {
  let newArray = array.slice();
  newArray.sort(function (a, b) {
    return b - a;
  });
  return newArray;
}

console.log(pop(seq)); // [1, 2, 3, 4]
console.log(push(seq, 6)); // [1, 2, 3, 4, 5, 6]
console.log(shift(seq)); // [2, 3, 4, 5]
console.log(unshift(seq, 0)); // [0, 1, 2, 3, 4, 5]
console.log(sort(seq, (a, b) => b - a)); // [5, 4, 3, 2, 1]

// 元の配列は変更されていない
console.log(seq); // [1, 2, 3, 4, 5]
