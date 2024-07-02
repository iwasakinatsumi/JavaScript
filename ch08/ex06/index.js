//元の関数
const m = function (arg) {
  console.log(arg[1]);
};
//m("a", "b");

//
const n = function (...rest) {
  console.log(rest[1]);
};
//n("a", "b");

//
const o = (...rest) => {
  console.log(rest[1]);
};
o("a", "b");
