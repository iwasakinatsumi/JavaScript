//ベースのURLbase、追加するクエリaddQuery、パスpathを持つオブジェクトを引数に取り、
//ベースのURLのパスとクエリを修正した文字列を返す関数modifyUrlを実装しなさい。

export function modifyUrl(URLbase, addQuery, path) {
  if (typeof URLbase === "string") {
    if (addQuery) {
      var modify = new URL(URLbase);
      var params = "";
      if (path) {
        var modify = new URL(URLbase);
        modify.pathname = path;
        modify.search = addQuery;
        return modify.href;
      } else {
        if (Array.isArray(addQuery)) {
          params = new URLSearchParams();
          //苦しい！！
          params.append(addQuery[0][0], addQuery[0][1]);
          params.append(addQuery[1][0], addQuery[1][1]);
          modify.search = params.toString();
          return modify.href;
        } else {
          modify.search = addQuery;
          modify.href;
          return modify.href;
        }
      }
    } else {
      return URLbase;
    }
  } else {
    return;
  }
}

// console.log(modifyUrl("http://example.com", "q=test", "url/api"));
// console.log(modifyUrl(123, "q=test", "url/api"));

//console.log(modifyUrl("https://example.com/foo?a=b"));

// console.log(
//   modifyUrl("https://example.com/foo?a=b", [
//     ["p", "x"],
//     ["パラメータ", "y"],
//   ])
// );

console.log(
  modifyUrl("https://example.com/foo?a=b", [["foo", "bar"]], "./buz")
);
