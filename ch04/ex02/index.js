//FizzBuzz問題
//3で割り切れるときはFizz
//5で割り切れるときはBuzz
//両方(15)で割り切れるときはFizzBuzz
//1-100の整数で↑を実行する

for (i = 1; i < 101; i++) {
  if (i % 3 == 0) {
    if (i % 5 == 0) {
      console.log(i + "FizzBuzz");
    } else {
      console.log(i + "Fizz");
    }
  } else if (i % 5 == 0) {
    console.log(i + "Buzz");
  }
}
