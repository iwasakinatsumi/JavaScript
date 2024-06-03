const array = [1, 2, 3, 4, 5];
const isBelowThreshold = 40;

export function sum(array) {
  return array.reduce((prev, current) => prev + current, 0);
}

export function join(array) {
  return array.reduce((prev, current) => prev + current, "");
}

export function reverse(array) {
  return array.reduce((prev, current) => current + prev, "");
}

//引数の値がすべて閾値以下ならtrue
export function every(array, isBelowThreshold) {
  return array.reduce((current) => current < isBelowThreshold, "");
}

//引数の値のうちどれかが閾値以下ならtrue
//everyとの違い？
export function some(array, isBelowThreshold) {
  return array.reduce((current) => current < isBelowThreshold, "");
}

console.log(some(array, isBelowThreshold));
