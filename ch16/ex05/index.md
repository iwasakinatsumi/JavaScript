1. 標準入力、標準出力、標準エラー出力、リダイレクト、パイプという単語について調べなさい
2. 以下のコードを cat.mjs というファイルに保存し、後述する実験の結果を予測し、実際に実験しなさい

実験: file は適当なファイルとし invalid-file は存在しないファイルとしなさい

node cat.mjs
echo FOO | node cat.mjs
node cat.mjs > output.txt
node cat.mjs file
node cat.mjs file > output.txt
node cat.mjs invalid-file > output.txt
node cat.mjs invalid-file 2> error.txt

出題範囲: 16.1
