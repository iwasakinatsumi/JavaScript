/**
 * プロトタイプを一つ以上もつ
 * プロトタイプと同名と同名でない数字、文字列のプロパティをもつ
 * プロトタイプはオブジェクトと同名ではない数字、文字列のプロパティももつ
 * プロトタイプは列挙可のプロパティをもち、それと同名の列挙不可のプロパティをオブジェクトにもたせること
 */

const personPrototype = {
  greet() {
    console.log("Hello!");
  },
};

const carl = Object.create(personPrototype);
carl.greet(); // hello!

carl.personPrototype = 8;
carl.personPrototype = "Hi!";

carl.number = 8;
carl.string = "Good";
