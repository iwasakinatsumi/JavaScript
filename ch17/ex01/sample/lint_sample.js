let a, x, y;
const r = 10;

// with (Math) {
//   a = PI * r * r;
//   x = r * cos(PI);
//   y = r * sin(PI / 2);
// }

let pi = Math.PI;

a = pi * r * r;
x = r * Math.cos(pi);
y = r * Math.sin(pi / 2);

console.log(a, x, y);
