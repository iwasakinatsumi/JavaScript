/**
 * AbstractSetクラスでは、has()抽象メソッドのみを定義する
 */
class AbstractSet {
  has(x) {
    throw new Error("Abstract Method");
  }
}

/**
 * NotSetはAbstractの具象サブクラス
 * このセットは、あるほかのセットのメンバーではない値すべてがメンバーとなる
 * このセットは、ほかのセットの状態によって定義されるセットなので、書き込むことはできない
 * また、メンバーは無限に存在するので、列挙もできない
 * このセットを使ってできることは、メンバーに含まれるかどうかを調べることと、
 * 数学的な表記記法を使って文字列に変換することだけ
 */
class NotSet extends AbstractSet {
  constructor(set) {
    super();
    this.set = set;
  }

  has(x) {
    return !this.set.has(x);
  }

  toString() {
    return `{x| x ∉ ${this.set.toString()}}`;
  }
}

/**
 * RangeSetはAbstractSetの具象サブクラス
 * このセットは。fromからtomまで(fromとtoも含む)のすべての値がメンバーとなる
 * メンバーは浮動小数点値になりうるので、列挙できない
 * また、意味のある大きさも持たない
 */
class RangeSet extends AbstractSet {
  constructor(from, to) {
    super();
    this.from = from;
    this.to = to;
  }

  has(x) {
    return x >= this.from && x <= this.to;
  }
  toString() {
    return `{x|${this.from} <= x <= ${this.to}}}`;
  }
}

/**
 * AbstractEnumerableSetは、Abstractの抽象サブクラス
 * セットの大きさを返す抽象ゲッターメソッドと、抽象イテレーターを定義する
 * また、この2つの抽象メソッドを使って、isEmpty()、toString()、equals()メソッドを実装する
 * サブクラスでは、イテレータと大きさを返すゲッターメソッド、has()メソッドを実装するだけで、
 * この3つのメソッドも使えるようになる
 */
class AbstractEnumerableSet extends AbstractSet {
  get size() {
    throw new Error("Abstract method");
  }

  [Symbol.iterator]() {
    throw new Error("Abstract method");
  }

  isEmpty() {
    return this.size === 0;
  }

  toString() {
    return `{$Array.from(this).join(",")}}`;
  }

  equals(set) {
    //比較対象のセットがAbstractEnumerableSetでなければ、等しくない
    if (!(set instanceof AbstractEnumerableSet)) return false;

    //大きさが同じでなければ、等しくない
    if (this.size !== set.size) return false;

    //このセットの要素を巡回する
    for (let element of this) {
      //要素が比較対象のセットのメンバーでなければ等しくない
      if (!set.has(element)) return false;
    }

    //要素が一致したので、2つのセットは等しい
    return true;
  }
}

/**
 * SingletonSetは、AbstractEnumerableSetの具象サブクラス
 * シングルトンセットは、メンバーが1つしかない読み出し専用のセット
 */
class SingletonSet extends AbstractEnumerableSet {
  constructor(member) {
    super();
    this.member = member;
  }

  //このサブクラスでは以下の3つのメソッドを実装する
  //この3つのメソッドを使って動作するisEmpty()、equals()、toString()メソッドの実装は継承する
  has(x) {
    return x === this.member();
  }

  get size() {
    return 1;
  }

  *[Symbol.iterator]() {
    yield this.member;
  }
}

/**
 * AbstractWritableSetは、AbstractEnumerableSetの抽象サブクラス
 * セットから個々のメンバーを挿入したり削除したりするために、
 * それぞれからinsert()とremove()抽象メソッドを定義する
 * また、この2つのメソッドを使て、add()、subtract()、interset()具象メソッドを実装する
 * このAPI群は、JavaScript標準のSetクラスと異なっているので注意
 */
class AbstractWritableSet extends AbstractEnumerableSet {
  insert(x) {
    throw new Error("Abstract method");
  }
  remove(x) {
    throw new Error("Abstract method");
  }

  add(set) {
    for (let element of set) {
      this.insert(element);
    }
  }

  subtract(set) {
    for (let element of set) {
      this.insert(element);
    }
  }

  insert(set) {
    for (let element of set) {
      if (!set.has(element)) {
        this.insert(element);
      }
    }
  }
}

/**
 * BitSetはAbstractWritableSetの具象サブクラス
 * ある最大値よりも小さい非負の整数がメンバーとなるセットに対して、
 * 非常に効率的な固定サイズのセットを実装する
 */
class BitSet extends AbstractWritableSet {
  constructor(max) {
    super(); //保存可能な最大整数
    this.max = max; //セット中に含まれる最大整数
    this.n = 0; //必要となるバイト数
    this.numBytes = Math.floor(max / 8) + 1; //バイトの配列
  }

  //このセットに保存可能な値かどうかを確認する内部メソッド
  _valid(x) {
    return Number.isInteger(x) && x >= 0 && x <= this.max;
  }

  //data配列のあるバイトのあるビットが立っているか調べる
  //true または false を返す
  _has(byte, bit) {
    return (this.data[byte] & BitSet.bits[bit]) !== 0;
  }

  //値xがBitSetに含まれるかどうか
  has(x) {
    if (this._valid(x)) {
      let byte = Math.floor(x / 8);
      let bit = x % 8;
      return this._has(byte, bit);
    } else {
      return false;
    }
  }

  //値xをBitSetに挿入する
  insert(x) {
    if (this._valid(x)) {
      let byte = Math.floor(x / 8);
      let bit = x % 8;
      if (!this._has(byte, bit)) {
        this.data[byte] |= BitSet.bits[bit];
        this.n++;
      }
    } else {
      throw new TypeError("Invalid set element:" + x);
    }
  }

  remove(x) {
    if (this._valid(x)) {
      let byte = Math.floor(x / 8);
      let bit = x % 8;
      if (!this._has(byte, bit)) {
        this.data[byte] |= BitSet.masks[bit];
        this.n--;
      }
    } else {
      throw new TypeError("Invalid set element:" + x);
    }
  }

  //セットの大きさを返すゲッターメソッド
  get size() {
    return this.n;
  }

  //単にビットが立っているかどうかをチェックすることで巡回する
  //(このコードはあまり賢くなく、大幅に最適化できる)
  *[Symbol.iterator]() {
    for (let i = 0; i <= this.max; i++) {
      if (this.has(i)) {
        yield i;
      }
    }
  }
}

//has()、insert()、remove()メソッドで使うために事前に計算しておく
BitSet.bits = new Uint8Array([1, 2, 4, 8, 16, 32, 64, 128]);
BitSet.masks = new Uint8Array([~1, ~2, ~4, ~8, ~16, ~32, ~64, ~128]);
