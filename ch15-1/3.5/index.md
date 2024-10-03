index1.html と index2.html についてなるべく速くスクリプトがロードされて画面に"Hello"と表示されるようにしなさい。
ただし、以下の書き換えのみが許可される。

1.script タグに async="true"を付与
2.script タグに defer="true"を付与
3.js 内の処理を document.addEventListener("domcontentloaded", () => {})で囲む
4.js 内の処理を window.addEventListener("load", () => {})で囲む

ヒント: ロードされる速さはデベロッパーツールでネットワークタブを開きキャッシュを無効化にチェックを付けてリロードすると確認できる
出題範囲 15.1.5.2

# index1.html

- そのまま  
   画面に表示されず…エラーもなし
- 1.をやってみる
  script に全部つけてみた  
  「Uncaught ReferenceError: $ is not defined」が表示された  
  →div#1000 が作成される前に js が読みこまれてしまったと思われるのでエラー  
  async は実行順は表記順ではない
- 2.をやってみる
  script に全部つけてみた
  Hello が表示された！  
  defer は表記の順に実行される

  参考)  
  https://qiita.com/phanect/items/82c85ea4b8f9c373d684

# index2.html

- そのまま  
  画面に表示されず「Uncaught TypeError: Cannot set properties of null (setting 'innerHTML')」が発生  
  →div#1000 が作成される前に js が読み込まれてしまったと思われるのでエラー

- 3.をやってみる  
  何も表示されず…  
  DOM ツリーが作成されると実行される

- 4.をやってみる  
  表示された！  
  最後に実行される

  参考)  
  https://qiita.com/sozaiya/items/ad41c5cf471cbb82b6b4
