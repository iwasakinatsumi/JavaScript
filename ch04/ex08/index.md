## void 0 と記載する理由

参考：https://techplay.jp/column/559

「undefined」は変数名なので、値を入力することもできる。  
そのため、「undefined」としていても必ずしも「undefined」が返却されるとは限らない。
void(0)にすることで、確実に「undefined」が返却される。

## 現在では使われなくなった理由

結果が見えた場合に「undefined」の場合、定義されていないことが明示的になるのでわかりやすい。  
しかし、反対に void(0)が見えた場合、何が起こっているのかわかりづらいので、「undefined」が使われることが主流になっている。
