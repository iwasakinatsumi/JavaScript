function Warrior() {}

Warrior.prototype = {
  atk: 0,
  attack: function () {
    return this.atk * 2;
  },
};
