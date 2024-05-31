//https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/Object/assign
//https://qiita.com/HuntingRathalos/items/1c22ca800d09ea2f8330

const animals1 = { dog: "いぬ", cat: "ねこ" };
const animals2 = { tiger: "とら", rabbit: "うさぎ" };

const mergeAnimals = Object.assign(animals1, animals2);

console.log(mergeAnimals);
//{ dog: 'いぬ', cat: 'ねこ', tiger: 'とら', rabbit: 'うさぎ'}

export function assign(target1, target2) {
  return { ...target1, ...target2 };
}

console.log(assign(animals1, animals2));
