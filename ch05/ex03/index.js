export function isHoliday1(date) {
  if ((date == "土") | (date == "日")) {
    return true;
  } else {
    return false;
  }
  //エラー処理？？
  //数字とか記号とか月-日以外が入力されたとき？
}

//console.log(isHoliday1("土"));
//console.log(isHoliday1("月"));

export function isHoliday2(date) {
  switch (date) {
    case "土":
      return true;
    case "日":
      return true;
    default:
      return false;
  }
}

// console.log(isHoliday2("土"));
// console.log(isHoliday2("月"));
