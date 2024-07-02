//戦士クラス
class Warrior {
  //攻撃力フィールド
  atk = 0;

  //攻撃力メソッド
  attack(atk) {
    return atk * 2;
  }
}

//魔法戦士クラス
class MagicWarrior extends Warrior {
  //魔力フィールド
  mgc = 0;

  //攻撃力メソッド
  attack(mgc) {
    return atk * 2 + mgc;
  }
}
