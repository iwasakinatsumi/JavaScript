class Point {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }

  distance() {
    return Math.sqrt(this.x * this.x + this.y * this.y);
  }

  //Point クラスに対し、引数として渡された Point クラスのインスタンスの座標を自分の座標に加算するメソッド add を定義しなさい。
  add(x, y) {
    x = x + this.x;
    y = y + this.y;
    return console.log(x, y);
  }
}

//「new」キーワードとPoint()コンストラクタ関数を使って、Pointオブジェクトを生成する。
let p = new Point(1, 1);

//Pointオブジェクトpのメソッドを使う。
p.distance();

p.add(3, 3);
