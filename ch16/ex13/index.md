この章では何度か シェル という単語が登場した。ここまでに学んだ知識を元に簡単なシェルを作ってみよう。
ex13/shell.js には作りかけのシェルの実装がある:

node path/to/shell.js と実行してみなさい
プログラム中の FIXME という箇所を修正しパイプやリダイレクトを実装しなさい

パイプやリダイレクトの例は以下:

# Linux

> echo HELLO | tr [:upper:] [:lower:] > hello.txt

# Windows (WSL が必要)

> wsl echo HELLO | wsl tr [:upper:] [:lower:] > hello.txt

# いずれも hello.txt に `hello` と書き込まれる

# Windows (WSL 不要)

# 問題: なぜ直接 dir を使わず cmd /c を書いているのだろうか？これらの意味は？

> cmd /c dir | cmd /c "findstr DIR"

???
うまく動かない…

Windows で実行

> > cmd /c dir | cmd /c "findstr DIR"
> > 2025/01/04 21:43 <DIR> .
> > 2025/01/04 21:43 <DIR>

コマンドを実行した後に必ず終了させるため  
⇒ なぜか？  
ほかの予期せぬコマンドを実行させないため

注意: ここでは説明を簡単にするために spawn を利用したが、これは一般的なシェルの実装とは異なることに注意。
出題範囲: なし
