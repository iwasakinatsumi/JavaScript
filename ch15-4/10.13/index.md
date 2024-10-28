15.4-10.11 では #/ や #/active といった URL を利用した。  
少し昔だとこのような URL は #!/ や #!/active と ! を付けることもあった (もしかしたら職場でそのようなコードを見るかもしれない)。  
このような形式を当時は hashbang と呼んだ。どうしてこのようなスタイルが存在したのだろうか。  
参考: Twitter がページ表示時間を 5 分の 1 に高速化。どのようなテクニックを使ったのか？  
https://www.publickey1.jp/blog/12/twitter51.html
出題範囲: 15.10

# hashbang

> シェバン(shebang)というのは、実行権限を与えたスクリプトファイルを UNIX ベースの OS で自己実行できるようにするための仕組み。
> 参考：https://qiita.com/exli3141/items/92354d7f0386f2ca0198

> 行の Hashbang Grammar ではファイルの冒頭に #! がある場合のみコメントとみなすため、  
> UTF-8 BOM に後続する #! はコメントになりませんが、Node.js では UTF-8 BOM に後続する場合でもファイルの先頭にあるとみなします。  
> 参考：https://zenn.dev/qnighy/articles/d2712de8e4585f749b30

参考：https://qiita.com/rana_kualu/items/84f66fe970f7feccf367
