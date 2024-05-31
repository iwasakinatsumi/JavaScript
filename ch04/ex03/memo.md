ビット演算子はオペランドを 32 ビット整数表現形式で表わされているものとして処理を行う。以下は 32 ビット整数表現形式の例である:

整数 32 ビット整数表現 (2 進数)

0 00000000000000000000000000000000

1 00000000000000000000000000000001

5 00000000000000000000000000000101

42 00000000000000000000000000101010

-1 11111111111111111111111111111111

-5 11111111111111111111111111111011

上記の -1 や -5 が分からない場合は 2 の補数 を参照しなさい。
一般に計算機では負の数を表現するために 2 の補数が利用される。
例えば Java で int x = -5; といったプログラムを書くと、メモリ上に 11111111111111111111111111111011 といった 32 ビットの値が保存されると考えてよい。
注意: JavaScript の値は内部的に 32 ビット整数表現で保存されているわけではない。興味がある場合は Pointer Compression in V8 などを参照しなさい。
2 の補数表現のメリットとして四則演算が簡単に出来ることが挙げられる。例えば 8 - 3 を考える。これを 8 + (-3) と考えて計算する:

00000000000000000000000000001000

- 11111111111111111111111111111101

---

100000000000000000000000000000101

桁溢れを無視すれば計算結果は 00000000000000000000000000000101 となり、これは 5 である。
このように 2 の補数表現によって減算が加算と同じ仕組みで実現できる。
では実際に 2 の補数とビット演算を用いた以下の問題に回答しなさい。
ビット演算のみを用いて減算を行う関数 sub を実装しなさい (例: sub(8, 3) は 5 を返すものとする)。
演算子として用いて良いのは &, |, ^, ~, <<, >>, >>> だけとする (+ や === 等は禁止)。
ヒント: 与えられた数の 2 の補数はビットの 0, 1 を反転し、1 を加えることで求められる。