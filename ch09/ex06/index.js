//superを使わずに、Mapを呼び出す

class TypedMap {
  constructor(keyType, valueType, entries) {
    this.map = new Map();

    if (entries) {
      for (let [k, v] of entries) {
        if (typeof k !== keyType || typeof v !== valueType) {
          throw new TypeError(`Wrong type for entry [${k},${v}]`);
        }
      }
    }

    this.map(entries); //ここでエラー(this.map is not a function)

    this.keyType = keyType;
    this.valuesType = valueType;
  }

  set(key, value) {
    if (this.keyType && typeof key !== this.keyType) {
      throw new TypeError(`${key} is not of type ${this.keyType}`);
    }
    if (this.valueType && typeof value !== this.valuesType) {
      throw new TypeError(`${value} is not of type ${this.valueType}`);
    }

    //型が正しい場合、スーパークラスのset()メソッドを呼び出す
    return this.map.set(key, value);
  }
}

//キーと値の型をチェックする
//stirngで"Hello,World!""
let check = new TypedMap();
check.set(string, "Hello,World!");
