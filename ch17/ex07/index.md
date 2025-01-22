TypeScript のトランスパイルは@babel/preset-typescript や tsc によって可能だが、それぞれの違いを調べなさい。  
出題範囲 17.6

# トランスパイル

あるプログラミング言語を別のプログラミングに変換すること

# 違い

tsc

- @babel/preset-typescript  
  https://babeljs.io/docs/babel-preset-typescript

- tsc
  TypeScript を JavaScript に変換する
  対象は JavaScript の構文のみ：Promise などはの組み込みオブジェクトは対象外

tsc を使った変換  
・型チェックをして、エラーがないかを確認する  
・TypeScript を JavaScript に変換する※  
・コード変換時に型定義ファイルの生成をする

※部分を Babel で ES2020 などの最新の JavaScript コードを IE11 などのブラウザでも動作する JavaScript コードに変換する

https://qiita.com/nacam403/items/edf3e2c8ff364aff910f
https://t-yng.jp/post/tsc-and-babel
