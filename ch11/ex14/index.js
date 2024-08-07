/**
 * 以下の各関数を実装しなさい
 * 日本語文字列の配列を受け取り、文字列中の大文字・小文字("つ"と"っ"等)、濁点・半濁点("は"と"ば"と"ば"等)の違いを無視してソートする sortJapanese 関数
 * Date オブジェクトを受け取り、令和6年4月2日 のように (和暦)y年m月d日 のフォーマットで日付の文字列を返す toJapaneseDateString 関数
 */

function sortJapanese(array) {
  return array.sort((a, b) => a.localeCompare(b), "ja"); //Intl.Collator使う
}

function toJapaneseDateString(date) {
  const options = { era: "long", year: "long" };
  return new Intl.DateTimeFormat("ja-JP-u-ca-japanese", options).format(date);
}

// var array = ["あした", "きのう", "あさって", "おととい"];
// console.log(sortJapanese(array)); //あさって→あした→おととい→きのう

var array = ["はす", "ばす"]; //複数回やったら結果異なる可能性？異ならなかったので無視していない？
console.log(sortJapanese(array));

var date = new Date("2024-08-02");
console.log(toJapaneseDateString(date)); //期待：令和6年8月2日　→　結果：令和6/8/2になるので再度変換が必要そう

//参考：https://qiita.com/shisama/items/cb0abb5435fac82e87d6
