import { walk } from "./index.js";

//ディレクトリではない場合
test("正常系", () => {
  expect(walk.next()).toEqual("{path:'js/test/index.js',isDirectory:false}");
});

//ディレクトリの場合
test("正常系", () => {
  expect(walk.next()).toEqual("{path:'js/test/',isDirectory:true}");
});

//異常系？
test("異常系", () => {
  expect(walk.next()).toEqual("{path:'js/test/index.js',isDirectory:false}");
});
