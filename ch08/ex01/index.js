//1.自然数nと英数文字cを引数にとり、文字cをn回コンソール出力してから文字cをn子含む配列を返す

export let func1 = (n, c) => {
  let array = [];
  for (let i = 0; i < n; i++) {
    console.log(c);
    array.push(c);
  }
  return array;
};

//引数：パラメーターが複数なので中括弧()の省略はできない
//戻り値：{}は必要そう。簡略化できそうな…

//2.数値xを引数にとり、xの二乗の数値を返す
export let func2 = (x) => x * x;

//引数：パラメーターが1つなので中括弧()の省略ができるが、Prettierが勝手に()つけた
//戻り値：関数本体が戻り値となるので括弧は不要

//console.log(func2(2));

//3.引数なしで、現在時刻のプロパティnowを含むオブジェクトを返す

export let func3 = () => {
  return { now: Date() };
};

//引数：引数がないので()は必要
//戻り値：オブジェクトリテラルの{}が必要

console.log(func3());
