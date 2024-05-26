let o = {};
o.x = 1;
let p = Object.create(o);
p.y = 2;
let q = Object.create(p);
q.z = 3;
let f = q.toString();
q.x + q.y;

//oがpとqのプロトタイプチェーン上にあるかどうか
console.log(o.isPrototypeOf(p));
console.log(o.isPrototypeOf(q));

//pがqのプロトタイプチェーン上にあるかどうか
console.log(p.isPrototypeOf(q));

//Object
let object = new Object();
console.log(Object.getPrototypeOf(object));

//Array
let array = new Array();
console.log(Object.getPrototypeOf(array));

//Date
let date = new Date();
console.log(Object.getPrototypeOf(date));

//Map
let map = new Map();
console.log(Object.getPrototypeOf(map));
