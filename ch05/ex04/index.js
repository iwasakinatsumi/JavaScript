//フィボナッチ数列10項{1,1,2,3,5,8,13,21,34,55}

export function fibWhile() {
  let array = [];
  array[0] = 1;
  array[1] = 1;
  let count = 2;
  while (count < 10) {
    array[count] = array[count - 2] + array[count - 1];
    count++;
  }
  return array;
}

export function fibDoWhile() {
  let array = [];
  array[0] = 1;
  array[1] = 1;
  let count = 2;
  do {
    array[count] = array[count - 2] + array[count - 1];
  } while (++count < 10);
  return array;
}

export function fibFor() {
  let array = [];
  array[0] = 1;
  array[1] = 1;
  for (let count = 2; count < 10; count++) {
    array[count] = array[count - 2] + array[count - 1];
  }
  return array;
}

// console.log(fibWhile());
// console.log(fibDoWhile());
// console.log(fibFor());
