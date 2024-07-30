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
  //「＠」の直前には英数字しか来ない　「.」、「日本語」は✖
  //「＠」が必ず含まれる　@{1}
  //「＠」の後ろのドメイン名には必ず「.」が含まれる　[A-Za-z0-9_.-]+
  //↑の後に「.」が含まれる　.
  //末尾には記号は入らないので、英数字のみ　[A-Za-z0-9]+

  //コメントアウトしたケースが通らない…
  //本来trueのはずが、falseに引っかかっている
  if (
    !mailAddress.match(
      /^[A-Za-z0-9]{1}[A-Za-z0-9_.-]*[A-Za-z0-9]+@{1}[A-Za-z0-9_.-]+.[A-Za-z0-9]+$/
    )
  ) {
    return false;
  } else {
    return true;
  }
}
