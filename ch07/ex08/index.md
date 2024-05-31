文字列の書記素を反転させる関数を実装しなさい。例えば "家族 👨‍👨‍👧‍👧" が与えられれば "👨‍👨‍👧‍👧 族家" を返しなさい。
ヒント: Intl.Segmenter を使うか ゼロ幅接合子 について調べて実装しなさい。( Intl.Segmenter を使う場合 tsconfig.js で ES2022 以上であることを確認して使用してください。)

# Intl.Segmenter

https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/Intl/Segmenter
https://tc39.es/ecma402/

split は日本語の場合、うまく機能しない

# ゼロ幅接合子

https://ja.wikipedia.org/wiki/%E3%82%BC%E3%83%AD%E5%B9%85%E6%8E%A5%E5%90%88%E5%AD%90

セロ幅節合子(ゼロ幅ジョイナー)

ゼロ幅ジョイナー（ZWJ）は、2 つ以上の文字を結合して新しい文字または絵文字を形成できる Unicode 文字です。
↑ の家族の絵文字は 1 つの絵文字に見えて 4 つの絵文字が集まったもの  
結合されているので、反転すると分割されて表示される
