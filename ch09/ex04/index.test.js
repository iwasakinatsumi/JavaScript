import { Warrior, MagicWarrior } from "./index.js";

//戦士を10攻撃？したら20返る
//魔法戦士を10攻撃したら30返る？
test("attack", () => {
  expect(Warrior.attack(10)).toBe(20);
  expect(MagicWarrior.attack(10)).toBe(30);
});
