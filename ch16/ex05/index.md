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

# 標準入力

standard input  
コンピューター上で実行されているプログラムが、特に何も指定されていない場合に標準的に利用するデータ入力元のこと。

# 標準出力

standard output  
コンピューター上で実行されているプログラムが、特に何も指定されていない場合に標準的に利用するデータ出力先のこと。

# 標準エラー出力

特に何も指定されていない場合に標準的に利用するエラーの出力先のこと。

# リダイレクト

自動的に転送する仕組みのこと。
例えば、旧ページにアクセスしたユーザーに対して、新ページを表示する。

# パイプ

あるプログラムの出力を別のプログラムの入力に引き渡す機能

参考：https://qiita.com/angel_p_57/items/03582181e9f7a69f8168

# 実験予想

sample.txt を存在するファイルとする。  
sample.js を存在しないファイルとする。

node cat.mjs ⇒cat.mjs の実行
echo FOO | node cat.mjs 　 ⇒ 　 echo で結果を表示するようにする
node cat.mjs > output.txt 　 ⇒ 読み込み標準出力の output.txt を作成する
node cat.mjs sample.txt 　 ⇒ 　 sample.txt が存在するか確認
node cat.mjs sample.txt > output.txt 　 ⇒ 　存在するので output.txt に中身を書き出し
node cat.mjs sample.js > output.txt 　 ⇒ 　 sample.js が存在するか確認 　
node cat.mjs sample.js 2> error.txt 　 ⇒ 存在しないので else の方の処理に入り、入力のファイル名が error.txt に出力される

# 実験結果
