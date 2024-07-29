performance.now を使ってプログラムの処理時間を測定してみよう。
ch11/ex11/index.js は "Hello".length にどれだけの時間がかかるか測定しようと実装したコードである。
コードを実行すると以下の事実に気付くだろう:

costOfLength が負の値を返すことがある ("Hello".length を実行すると時が巻き戻るのだろうか?)
costOfLength の引数の値を大きくすれば大きくする程結果が小さくなる ("Hello".length を実行すればする程速くなるのだろうか?)

どうやら何かがおかしい。どうしてこのような結果になるか調べて説明しなさい。
出典: https://mrale.ph/blog/2012/12/15/microbenchmarks-fairy-tale.html

# 結果

console.log(costOfLength(10000)); → 　-0.00001816000000000031
console.log(costOfLength(100000000));→ 5.868999999999985e-8

console.log(costOfLength(5000)); → 0.0000022600000000011278
console.log(costOfLength(500000000)); → -8.864260000000013e-8

console.log(costOfLength(100)); → 0.0002810000000000201
console.log(costOfLength(1000000000)); → -1.721028e-7

# 理由

str.length は実際にループして計測されずに、簡易化されている？  
根拠が挙げられない…
