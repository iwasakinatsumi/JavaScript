React, jQuery などの主要なフロントエンドフレームワークを選び、そのフレームワークを使っていればどのように XSS 対策がされるか、
また使っていてもどのような XSS の危険が残るか記述しなさい。  
出題範囲 15.1.8.3

XSS：https://www.ipa.go.jp/security/vuln/websecurity/cross-site-scripting.html  
悪意のあるユーザーが Web サイト上に不正なスクリプトを埋め込み、第三者のユーザーがそれを実行することで被害が発生する

- React
  基本的にはエスケープされるが、下記の場合は危険が残る
  ・dangerouslySetInnerHTML を使う(ブラウザ DOM における innerHTML の React での代替)
  https://ja.legacy.reactjs.org/docs/dom-elements.html#dangerouslysetinnerhtml  
  ・javascript:から始まる場合はそれ以降の文字列を javascript として実行
  https://qiita.com/kazzzzzz/items/897f8ed89ca36a0734de
