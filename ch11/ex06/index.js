/**
 * 与えられた文字列がメールアドレスであるかチェックする関数isEmailAddressを実装しなさい。
 * ただしRFC5322に準拠したメールアドレスの判定は難しいので、与えられたテストコードが通ればよいものとする。
 */

export function isEmailAddress(mailAddress) {
  //＠の前に何か値がある(半角英数字+記号)
  if ((mailAddress == null) | undefined) {
    return false;
  }
  //＠の後ろは数字で252文字のみ
  //＠の後ろは「半角英数字」+「.」+「半角英数字」の組み合わせのみ
}
