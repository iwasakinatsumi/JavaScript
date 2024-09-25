/**
 * テンプレートリテラルを受けとり文字列を返す関数を作成しなさい。
 * ただし戻り値において補間値はその値ではなく、その型名を展開しなさい。（厳密な型でなくて可）
 * 例)
 * `${"A"}` -> "string"
 * `${{ x: 1 }}` -> "object"
 * 出題範囲: 14.5
 */

export function typeTemplateLiteral(strings, ...values) {
  return strings.reduce((result, str, index) => {
    const valueType = typeof values[index - 1];
    return result + str + (index > 0 ? valueType : "");
  }, "");
}
