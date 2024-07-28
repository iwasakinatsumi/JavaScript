/**
 * 与えられた文字列がメールアドレスであるかチェックする関数isEmailAddressを実装しなさい。
 * ただしRFC5322に準拠したメールアドレスの判定は難しいので、与えられたテストコードが通ればよいものとする。
 */

export function isEmailAddress(mailAddress) {
  //空入力
  if ((mailAddress == null) | undefined) {
    return false;
  }

  //先頭には英数字しか来ない　[A-Za-z0-9]{1}
  //「＠」の前には英数字しか含まれない
  //「＠」が必ず含まれる　@{1}
  //「＠」の後ろのドメイン名には必ず「.」が含まれる　[A-Za-z0-9_.-]+
  //↑の後に「.」が含まれる　.
  //末尾には記号は入らないので、英数字のみ　[A-Za-z0-9]+

  //＠の直前には「.」がダメ
  //var pattern = /^[A-Za-z0-9]{1}*[A-Za-z0-9]@{1}[A-Za-z0-9_.-]+.[A-Za-z0-9]+$/;
  //var pattern = /^[A-Za-z0-9]{1}*@{1}[A-Za-z0-9_.-]+.[A-Za-z0-9]+$/;
  if (
    !mailAddress.match(
      /^[A-Za-z0-9]{1}*[A-Za-z0-9]@{1}[A-Za-z0-9_.-]+.[A-Za-z0-9]+$/
    )
  ) {
    return false;
  }
  // if (!mailAddress.match(pattern)) {
  //   return false;
  // }

  return true;
}
