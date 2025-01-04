用語「マルチスレッド」について調べなさい。
次にフィボナッチ数を計算する mFib.js をスレッド数を変更しながら実行し(*1)、
コンソール出力と OS 機能(*2)で結果とスレッド数を確認しなさい。
最後にあなたの PC の CPU スペックを調査し、適切なスレッド数についての考察を記しなさい。
*1 mFib.js は第一引数で項数、第二引数でスレッド数を指定。コンソールには実行時間とフィボナッチ数が出力される。講師 PC では node mFib.js 45 4 の実行に 15 秒程かかる。
*2 OS が windows の場合"リソースモニター"（"Win キー+r"の後"resmon"で起動）で実行中プログラムのスレッド数を確認できる。
出題範囲 16.2

# マルチスレッド

> マルチスレッドとは、一つのコンピュータープログラムを実行する際に、アプリケーションのプロセス（タスク）を複数のスレッドに分けて並行処理する流れのこと

参考：https://www.ntt-west.co.jp/business/glossary/words-00262.html#:~:text=%E3%83%9E%E3%83%AB%E3%83%81%E3%82%B9%E3%83%AC%E3%83%83%E3%83%89%E3%81%A8%E3%81%AF%E3%80%81%E4%B8%80,%E3%81%A4%E3%81%AE%E5%87%A6%E7%90%86%E3%82%92%E8%A1%8C%E3%81%AA%E3%81%84%E3%81%BE%E3%81%99%E3%80%82

# 実行結果

デフォルトの 40 4 で下記。3 秒くらい。  
Worker 0 execution time: 538.793ms  
Worker 3 execution time: 788.528ms  
Worker 1 execution time: 1.168s  
Worker 2 execution time: 1.654s  
Total execution time: 1.670s  
Fibonacci number: 165580140

スレッド数を 4→2 に変更する。2 秒くらい。  
Worker 0 execution time: 1.028s  
Worker 1 execution time: 1.639s  
Total execution time: 1.649s  
Fibonacci number: 165580140

スレッド数を 4→1 に変更する。2 秒くらい。  
Worker 0 execution time: 2.256s  
Total execution time: 2.267s  
Fibonacci number: 165580140

時間はあまり変わらない感じ。

# 適切なスレッド数の考察

↑ を実行時、CPU が 20 になる。

https://docs.oracle.com/en/industries/energy-water/meter-data-management/25011/mdm-user-guides_ja/Topics/F1_07BkgrndProcesses_Optimal_Thread_Count.html

> 経験則から、使用可能なアプリケーション・サーバーの CPU の 100 MHz ごとに 1 スレッドを指定することをお薦めします。

2.6GHz なので、↑ でいうと 2600(MHz)なので 26 くらいがよさそう。
