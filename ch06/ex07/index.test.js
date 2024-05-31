import { assign } from "./index.js";

//Object.assign()の仕様
//1つ目の引数をコピー先、2つ目の引数をコピー元としてコピーする
//同じ名前のプロパティがあったら値を上書きする
//→同じ名前のプロパティでテストする

const animals1 = { dog: "いぬ", cat: "ねこ" };
const animals2 = { tiger: "とら", rabbit: "うさぎ" };

test("重複しない", () => {
  expect(assign(animals1, animals2)).toStrictEqual(
    Object.assign(animals1, animals2)
  );
});

const animals3 = { cow: "うし", cat: "ニャー" };

test("重複する", () => {
  expect(assign(animals1, animals3)).toStrictEqual(
    Object.assign(animals1, animals3)
  );
});
