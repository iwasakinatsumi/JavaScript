function MagicWarrior() {
  this.mgc = 0;
}

MagicWarrior.prototype = Object.prototype(Warrior.prototype);

//独自のconstrucrtorプロパティの作成
MagicWarrior.prototype.constructor = MagicWarrior;

MagicWarrior.prototype.attack = function () {
  return this.atk * 2 + mgc;
};
