//任意の関数とクラスを作成し、「ES6のモジュール」方式で別ファイルから利用するコードを実装しなさい。
//ただし、デフォルトのインポート、名前変更を伴うインポート、再エクスポートをそれぞれ実施すること。

//デフォルトのインポート
import add from "./calc.js";
console.log(add(5, 3));

//名前変更を伴うインポート
import { subtract as subtractXY } from "./calc.js";
import { subtract as subtractYX } from "./sub.js";

console.log(subtractXY(5, 3)); //x-yなので、2
console.log(subtractYX(5, 3)); //y-xなので-2

//再エクスポート
export { sub } from "./calc.js"; //1つなら{}不要そうだが…ないとエラーになった
