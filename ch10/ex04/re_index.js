//index.jsでcalc.jsから再エクスポートしたものを使う
import { subtract } from "./index.js";
console.log(subtract(5, 3));

//下記のエラー
//SyntaxError: Unexpected token 'export'
//    at ModuleLoader.moduleStrategy (node:internal/modules/esm/translators:168:18)
//   at callTranslator (node:internal/modules/esm/loader:279:14)
//    at ModuleLoader.moduleProvider (node:internal/modules/esm/loader:285:30)

//Node.js v20.12.1
