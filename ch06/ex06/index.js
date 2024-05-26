export function returnArray(object) {
  let array = [];
  for (let p in object) {
    array.push(p);
  }
  return array;
}

let object = {
  x: 2,
  y: "Hello,World!",
  array: new Array([1, 2, 3]),
  Symbol: 1,
};

returnArray(object);
