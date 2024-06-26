問題を解決するための計算方法や処理の手順のことを アルゴリズム と呼ぶ。
ソートのアルゴリズムには様々なものが存在している  
参考：https://ja.wikipedia.org/wiki/%E3%82%BD%E3%83%BC%E3%83%88  
問題に対して複数のアルゴリズムが存在する場合、アルゴリズムをどうやって比較すべきだろうか。  
具体的な計算時間は計算機によって結果が異なるため比較が難しい。
一般的にはアルゴリズムを O-記法 を用いた 時間計算量 で評価する。  
例えば上記の「挿入ソート」のアルゴリズムは配列の長さの二乗に計算時間が比例するため、配列の長さを n とした時の時間計算量は O(n^2) と表現される。  
挿入ソート以外のソート関数を実装しなさい。また実装したアルゴリズムの入力の配列長 n に対する時間計算量を O-記法で説明しなさい。

# 挿入ソート以外のソート関数　　

バブルソート：隣り合う 2 つを次々に並び替えていく  
比較は n(n-1)/2 回行われる

# n に対する時間計算量を O-記法

時間計算量：O(n^2)

参考：https://magazine.techacademy.jp/magazine/33089
