/**
 * 次の関数を実装しなさい。

1.特定の年と月(1-12)を数値の引数で受け取り、その月の日数を返す関数
2.期間の開始日と終了日を'YYYY-MM-DD'形式の日付で二つ引数で受け取り、その期間(開始日と終了日を含む)の土日以外の日数を返す関数
3.'YYYY-MM-DD'形式の日付とロケールを引数で受け取り、その日の曜日をロケールの形式の文字列で返す関数
4.ローカルのタイムゾーンにおいて先月 1 日 0 時 0 分 0 秒の Date オブジェクトを返す関数。
　ただし getMonth、setMonth は利用してはいけない。
 */

//1.
function returnDays(year, month) {
  //入力値のチェック。
  if ((year == "") | undefined) {
    return new Error("年：値を入力してください");
  }
  if ((month == "") | undefined) {
    return new Error("年：値を入力してください");
  }
  if (isNaN(year)) {
    return new Error("年：数字を入力してください");
  }
  if (isNaN(month)) {
    return new Error("月：数字を入力してください");
  }
  if ((month < 0) | (month > 12)) {
    return new Error("月：1-12で入力してください");
  }

  return new Date(year, month, 0).getDate();
}

// console.log(returnDays(undefined, undefined));
// console.log(returnDays("test", "aaa"));
// console.log(returnDays(2024, 15));
// console.log(returnDays(2024, 2)); //うるう年なので、29

//2.
function returnWeekDays(start, end) {
  //入力値の型チェック
  // if (typeof start == "string") {
  //   var a = start.match(/^(\d\d\d\d)-(\d\d)-(\d\d)$/);
  //   if (a) {
  //     var year = parseInt(a[1]);
  //     var month = parseInt(a[2]) - 1;
  //     var day = parseInt(a[3]);
  //     var x = new Date(year, month, day);
  //     // return (
  //     //   year == x.getFullYear() && month == x.getMonth() && day == x.getDate()
  //     // );
  //   }
  //   return new Error("start：入力形式が違います");
  // }

  // if (typeof end == "string") {
  //   var a = end.match(/^(\d\d\d\d)-(\d\d)-(\d\d)$/);
  //   if (a) {
  //     var year = parseInt(a[1]);
  //     var month = parseInt(a[2]) - 1;
  //     var day = parseInt(a[3]);
  //     var x = new Date(year, month, day);
  //     //return y == x.getFullYear() && m == x.getMonth() && d == x.getDate();
  //   }
  //   return new Error("end：入力形式が違います");
  // }

  let startDate = new Date(start);
  let endDate = new Date(end);
  let count = 0;
  while (endDate >= startDate) {
    startDate.setDate(startDate.getDate() + 1);
    let week = startDate.getDay();
    if (week != 0 && week != 6) {
      ++count;
    }
  }
  return count;
}

//console.log(returnWeekDays("2024/07/01", "2024/07/31"));
console.log(returnWeekDays("2024-07-01", "2024-07-31")); //23

//3.
function returnDayOfWeek(day, locale) {
  //dayの形式チェック

  //localeが設定されているか？

  let d = new Date(day);
  d.toLocaleDateString(locale);

  return d.getDay;
}

console.log(returnDayOfWeek("2024-08-01", "ja")); //木曜日

//4.
function returnDateObject() {
  //ローカルの時間を取得→そこから先月のDateを取得する
  //getMonthで-1したいが…
}

//console.log(returnDateObject);
