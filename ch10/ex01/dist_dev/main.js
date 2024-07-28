/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./ch10/ex01/index.cjs":
/*!*****************************!*\
  !*** ./ch10/ex01/index.cjs ***!
  \*****************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

eval("//必要なモジュールへの参照を取得する\r\nconst stats = __webpack_require__(/*! ./sets.cjs */ \"./ch10/ex01/sets.cjs\");\r\nconst BitSet = (__webpack_require__(/*! ./sets.cjs */ \"./ch10/ex01/sets.cjs\").BitSet);\r\n\r\n//モジュールを使ってコードを記述する\r\nlet s = new BitSet(100);\r\ns.insert(10);\r\ns.insert(20);\r\ns.insert(30);\r\nlet avetage = stats.mean([...s]); //averageは20\r\n\r\nconsole.log(avetage);\r\n\n\n//# sourceURL=webpack:///./ch10/ex01/index.cjs?");

/***/ }),

/***/ "./ch10/ex01/sets.cjs":
/*!****************************!*\
  !*** ./ch10/ex01/sets.cjs ***!
  \****************************/
/***/ (() => {

eval("/**\r\n * AbstractSetクラスでは、has()抽象メソッドのみを定義する\r\n */\r\nclass AbstractSet {\r\n  has(x) {\r\n    throw new Error(\"Abstract Method\");\r\n  }\r\n}\r\n\r\n/**\r\n * NotSetはAbstractの具象サブクラス\r\n * このセットは、あるほかのセットのメンバーではない値すべてがメンバーとなる\r\n * このセットは、ほかのセットの状態によって定義されるセットなので、書き込むことはできない\r\n * また、メンバーは無限に存在するので、列挙もできない\r\n * このセットを使ってできることは、メンバーに含まれるかどうかを調べることと、\r\n * 数学的な表記記法を使って文字列に変換することだけ\r\n */\r\nclass NotSet extends AbstractSet {\r\n  constructor(set) {\r\n    super();\r\n    this.set = set;\r\n  }\r\n\r\n  has(x) {\r\n    return !this.set.has(x);\r\n  }\r\n\r\n  toString() {\r\n    return `{x| x ∉ ${this.set.toString()}}`;\r\n  }\r\n}\r\n\r\n/**\r\n * RangeSetはAbstractSetの具象サブクラス\r\n * このセットは。fromからtomまで(fromとtoも含む)のすべての値がメンバーとなる\r\n * メンバーは浮動小数点値になりうるので、列挙できない\r\n * また、意味のある大きさも持たない\r\n */\r\nclass RangeSet extends AbstractSet {\r\n  constructor(from, to) {\r\n    super();\r\n    this.from = from;\r\n    this.to = to;\r\n  }\r\n\r\n  has(x) {\r\n    return x >= this.from && x <= this.to;\r\n  }\r\n  toString() {\r\n    return `{x|${this.from} <= x <= ${this.to}}}`;\r\n  }\r\n}\r\n\r\n/**\r\n * AbstractEnumerableSetは、Abstractの抽象サブクラス\r\n * セットの大きさを返す抽象ゲッターメソッドと、抽象イテレーターを定義する\r\n * また、この2つの抽象メソッドを使って、isEmpty()、toString()、equals()メソッドを実装する\r\n * サブクラスでは、イテレータと大きさを返すゲッターメソッド、has()メソッドを実装するだけで、\r\n * この3つのメソッドも使えるようになる\r\n */\r\nclass AbstractEnumerableSet extends AbstractSet {\r\n  get size() {\r\n    throw new Error(\"Abstract method\");\r\n  }\r\n\r\n  [Symbol.iterator]() {\r\n    throw new Error(\"Abstract method\");\r\n  }\r\n\r\n  isEmpty() {\r\n    return this.size === 0;\r\n  }\r\n\r\n  toString() {\r\n    return `{$Array.from(this).join(\",\")}}`;\r\n  }\r\n\r\n  equals(set) {\r\n    //比較対象のセットがAbstractEnumerableSetでなければ、等しくない\r\n    if (!(set instanceof AbstractEnumerableSet)) return false;\r\n\r\n    //大きさが同じでなければ、等しくない\r\n    if (this.size !== set.size) return false;\r\n\r\n    //このセットの要素を巡回する\r\n    for (let element of this) {\r\n      //要素が比較対象のセットのメンバーでなければ等しくない\r\n      if (!set.has(element)) return false;\r\n    }\r\n\r\n    //要素が一致したので、2つのセットは等しい\r\n    return true;\r\n  }\r\n}\r\n\r\n/**\r\n * SingletonSetは、AbstractEnumerableSetの具象サブクラス\r\n * シングルトンセットは、メンバーが1つしかない読み出し専用のセット\r\n */\r\nclass SingletonSet extends AbstractEnumerableSet {\r\n  constructor(member) {\r\n    super();\r\n    this.member = member;\r\n  }\r\n\r\n  //このサブクラスでは以下の3つのメソッドを実装する\r\n  //この3つのメソッドを使って動作するisEmpty()、equals()、toString()メソッドの実装は継承する\r\n  has(x) {\r\n    return x === this.member();\r\n  }\r\n\r\n  get size() {\r\n    return 1;\r\n  }\r\n\r\n  *[Symbol.iterator]() {\r\n    yield this.member;\r\n  }\r\n}\r\n\r\n/**\r\n * AbstractWritableSetは、AbstractEnumerableSetの抽象サブクラス\r\n * セットから個々のメンバーを挿入したり削除したりするために、\r\n * それぞれからinsert()とremove()抽象メソッドを定義する\r\n * また、この2つのメソッドを使て、add()、subtract()、interset()具象メソッドを実装する\r\n * このAPI群は、JavaScript標準のSetクラスと異なっているので注意\r\n */\r\nclass AbstractWritableSet extends AbstractEnumerableSet {\r\n  insert(x) {\r\n    throw new Error(\"Abstract method\");\r\n  }\r\n  remove(x) {\r\n    throw new Error(\"Abstract method\");\r\n  }\r\n\r\n  add(set) {\r\n    for (let element of set) {\r\n      this.insert(element);\r\n    }\r\n  }\r\n\r\n  subtract(set) {\r\n    for (let element of set) {\r\n      this.insert(element);\r\n    }\r\n  }\r\n\r\n  insert(set) {\r\n    for (let element of set) {\r\n      if (!set.has(element)) {\r\n        this.insert(element);\r\n      }\r\n    }\r\n  }\r\n}\r\n\r\n/**\r\n * BitSetはAbstractWritableSetの具象サブクラス\r\n * ある最大値よりも小さい非負の整数がメンバーとなるセットに対して、\r\n * 非常に効率的な固定サイズのセットを実装する\r\n */\r\nclass BitSet extends AbstractWritableSet {\r\n  constructor(max) {\r\n    super(); //保存可能な最大整数\r\n    this.max = max; //セット中に含まれる最大整数\r\n    this.n = 0; //必要となるバイト数\r\n    this.numBytes = Math.floor(max / 8) + 1; //バイトの配列\r\n  }\r\n\r\n  //このセットに保存可能な値かどうかを確認する内部メソッド\r\n  _valid(x) {\r\n    return Number.isInteger(x) && x >= 0 && x <= this.max;\r\n  }\r\n\r\n  //data配列のあるバイトのあるビットが立っているか調べる\r\n  //true または false を返す\r\n  _has(byte, bit) {\r\n    return (this.data[byte] & BitSet.bits[bit]) !== 0;\r\n  }\r\n\r\n  //値xがBitSetに含まれるかどうか\r\n  has(x) {\r\n    if (this._valid(x)) {\r\n      let byte = Math.floor(x / 8);\r\n      let bit = x % 8;\r\n      return this._has(byte, bit);\r\n    } else {\r\n      return false;\r\n    }\r\n  }\r\n\r\n  //値xをBitSetに挿入する\r\n  insert(x) {\r\n    if (this._valid(x)) {\r\n      let byte = Math.floor(x / 8);\r\n      let bit = x % 8;\r\n      if (!this._has(byte, bit)) {\r\n        this.data[byte] |= BitSet.bits[bit];\r\n        this.n++;\r\n      }\r\n    } else {\r\n      throw new TypeError(\"Invalid set element:\" + x);\r\n    }\r\n  }\r\n\r\n  remove(x) {\r\n    if (this._valid(x)) {\r\n      let byte = Math.floor(x / 8);\r\n      let bit = x % 8;\r\n      if (!this._has(byte, bit)) {\r\n        this.data[byte] |= BitSet.masks[bit];\r\n        this.n--;\r\n      }\r\n    } else {\r\n      throw new TypeError(\"Invalid set element:\" + x);\r\n    }\r\n  }\r\n\r\n  //セットの大きさを返すゲッターメソッド\r\n  get size() {\r\n    return this.n;\r\n  }\r\n\r\n  //単にビットが立っているかどうかをチェックすることで巡回する\r\n  //(このコードはあまり賢くなく、大幅に最適化できる)\r\n  *[Symbol.iterator]() {\r\n    for (let i = 0; i <= this.max; i++) {\r\n      if (this.has(i)) {\r\n        yield i;\r\n      }\r\n    }\r\n  }\r\n}\r\n\r\n//has()、insert()、remove()メソッドで使うために事前に計算しておく\r\nBitSet.bits = new Uint8Array([1, 2, 4, 8, 16, 32, 64, 128]);\r\nBitSet.masks = new Uint8Array([~1, ~2, ~4, ~8, ~16, ~32, ~64, ~128]);\r\n\n\n//# sourceURL=webpack:///./ch10/ex01/sets.cjs?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./ch10/ex01/index.cjs");
/******/ 	
/******/ })()
;