用語 AES、Base64 を調べて記しなさい。  
以下は、暗号化と Base64 エンコード、Base64 デコードと復号のサンプルコードです。  
穴埋めして完成させなさい。  
なお、穴埋め箇所では crypto.Cipher と Buffer.from を使用しなさい。
なお、暗号化のアルゴリズムは aes-256-cbc を指定しなさい。

# AES

Advanced Encyption Standard(先進的暗号化標準)  
暗号化方式の中でも高い強度を誇る

> ・暗号化と復号に同じ暗号鍵を用いる「共通鍵暗号」  
> ・平文を先頭から順にブロックと呼ばれる単位に区切って暗号化する「ブロック暗号」  
> ・ブロック長は 128 ビット（16 バイト）で固定  
> ・鍵長（暗号鍵のデータ量）は 128 ビット（128-AES）  
> ・192 ビット（192-AES）・256 ビット（256-AES）から選択できる  
> ・4 ステップの簡単な処理のセットを「ラウンド」とし、鍵長によって特定回数のラウンドを繰り返すことで暗号化強度を高める

# Base64

バイナリ形式からテキスト形式へデータを変換するエンコード形式  
Base64 は、バイナリデータを、テキスト形式しか扱えないアプリケーションやプログラムに伝送するために用いられ、64 は 64 進数を表す
