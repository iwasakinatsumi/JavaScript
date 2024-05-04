let num1 = { realNumber: 3, imaginaryNumber: -4 };
let num2 = { realNumber: 1, imaginaryNumber: 2 };

// 複素数
// num1:3+4i,num2:1+2i
// add:4+6i
// sub:2+2i
// mul:-5+10i
// div:(11-2i)/5

export function add(num1, num2) {
  let answerAddReal = num1.realNumber + num2.realNumber;
  let answerAddImaginary = num1.imaginaryNumber + num2.imaginaryNumber;

  if (answerAddImaginary < 0) {
    return answerAddReal + "" + answerAddImaginary + "i";
  } else {
    return answerAddReal + "+" + answerAddImaginary + "i";
  }
}

export function sub(num1, num2) {
  let answerSubReal = num1.realNumber - num2.realNumber;
  let answerSubImaginary = num1.imaginaryNumber - num2.imaginaryNumber;

  if (answerSubImaginary < 0) {
    return answerSubReal + "" + answerSubImaginary + "i";
  } else {
    return answerSubReal + "+" + answerSubImaginary + "i";
  }
}

export function mul(num1, num2) {
  let answerMulReal =
    num1.realNumber * num2.realNumber -
    num1.imaginaryNumber * num2.imaginaryNumber;
  let answerMulImaginary =
    num1.realNumber * num2.imaginaryNumber +
    num2.realNumber * num1.imaginaryNumber;

  if (answerMulImaginary < 0) {
    return answerMulReal + "" + answerMulImaginary + "i";
  } else {
    return answerMulReal + "+" + answerMulImaginary + "i";
  }
}

export function div(num1, num2) {
  //共役な複素数の表現方法？
  //分母の共役な複素数を分母、分子にかける

  let conNum2 = {
    //分母になるnum2の共役な複素数を設定する
    realNumber: num2.realNumber,
    imaginaryNumber: num2.imaginaryNumber,
  };
  //分母の計算
  let deno =
    num2.realNumber * conNum2.realNumber -
    num2.imaginaryNumber * conNum2.imaginaryNumber;
  //分子の計算
  let moleReal =
    num1.realNumber * conNum2.realNumber -
    num1.imaginaryNumber * conNum2.imaginaryNumber;
  let moleImaginary =
    num1.realNumber * conNum2.imaginaryNumber +
    num2.realNumber * conNum2.imaginaryNumber;

  //値が負の時、これだと「+-2」のようになるのでイマイチ
  //if文で分岐しなくても良い方法？
  if (moleImaginary < 0) {
    return moleReal / deno + "" + moleImaginary / deno + "i";
  } else {
    return moleReal / deno + "+" + moleImaginary / deno + "i";
  }
}

//console.log(add(num1, num2));
// console.log(sub(num1, num2));
// console.log(mul(num1, num2));
// console.log(div(num1, num2));
