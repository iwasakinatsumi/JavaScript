let num1 = { realNumber: 3, imaginaryNumber: 4 };
let num2 = { realNumber: 1, imaginaryNumber: 2 };

// 複素数
// num1:3+4i,num2:1+2i
// add:4+6i
// sub:2+2i
// mul:-3+10i
// div:

function add(num1, num2) {
  let answerAddReal = num1.realNumber + num2.realNumber;
  let answerAddImaginary = num1.imaginaryNumber + num2.imaginaryNumber;
  return answerAddReal + "+" + answerAddImaginary + "i";
}

function sub(num1, num2) {
  let answerSubReal = num1.realNumber - num2.realNumber;
  let answerSubImaginary = num1.imaginaryNumber - num2.imaginaryNumber;
  return answerSubReal + "+" + answerSubImaginary + "i";
}

function mul(num1, num2) {
  let answerMulReal =
    num1.realNumber * num2.realNumber -
    num1.imaginaryNumber * num2.imaginaryNumber;
  let answerMulImaginary =
    num1.realNumber * num2.imaginaryNumber +
    num2.realNumber * num1.imaginaryNumber;
  return answerMulReal + "+" + answerMulImaginary + "i";
}

function div(num1, num2) {
  //共役な複素数の表現方法？
  let answerSubReal = num1.realNumber - num2.realNumber;
  let answerSubImaginary = num1.imaginaryNumber - num2.imaginaryNumber;
  return answerSubReal + "+" + answerSubImaginary + "i";
}

console.log(add(num1, num2));
console.log(sub(num1, num2));
console.log(mul(num1, num2));
console.log(div(num1, num2));
