//元の関数
const m = function (arg) {
  console.log(arg[1]);
};
//m("a", "b");

//
const n = function (arg) {
  console.log(arguments[1]);
};
//n("a", "b");

//
const o = (arg) => {
  console.log(arg[1]);
};
o("a", "b");
