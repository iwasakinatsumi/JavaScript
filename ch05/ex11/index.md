##Node で debbuger 文を使ってデバッグする方法  
参考：https://www.sejuku.net/blog/87186#index_id7

ソースコード内に「debugger」を記載し、  
node index.js  
で実行せず、  
node inspect index.js  
で実行する。  
「debugger」を記載した位置がブレイクポイントとなる。  
「n」を押すと一行ずつ実行される。  
「c」を押すと次のブレイクポイントで止まる。
