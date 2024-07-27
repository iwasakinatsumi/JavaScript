/**
 * 次の関数を実装しなさい。

1.特定の年と月(1-12)を数値の引数で受け取り、その月の日数を返す関数
2.期間の開始日と終了日を'YYYY-MM-DD'形式の日付で二つ引数で受け取り、その期間(開始日と終了日を含む)の土日以外の日数を返す関数
3.'YYYY-MM-DD'形式の日付とロケールを引数で受け取り、その日の曜日をロケールの形式の文字列で返す関数
4.ローカルのタイムゾーンにおいて先月 1 日 0 時 0 分 0 秒の Date オブジェクトを返す関数。ただし getMonth、setMonth は利用してはいけない。
 */

//1.
function returnDays(year, month) {
  //入力値のチェック。文字なら数値に変換
  //数値変換できないなら、エラー
}

console.log(returnDays(2024, 2)); //うるう年なので、29

//2.
function returnWeekDays(start, end) {
  //入力値の型チェック/変換
}

console.log(returnWeekDays("2024-01-01", "2024-01-31"));

//3.
function returnDayOfWeek(day, locale) {
  //dayの形式チェック
}

console.log("2024-01-01", "ja");

//4.
function returnDateObject() {
  //ローカルの時間を取得→そこから先月のDateを取得する
}

console.log(returnDateObject);
