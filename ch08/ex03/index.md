書籍 8.2.1 の 「再帰関数とスタック」には、関数が自身を数千回呼び出した場合はエラーが発生すると書かれている。

プログラミング言語や処理系によっては、再帰呼び出しを関数の処理の末尾にする(末尾再帰)ことで、スタックオーバーフローが起こらないよう最適化できるものがある。末尾再帰は何故そのような最適化ができるのか答えなさい。

なぜそのような最適化ができるのか？  
通常の再起は、最後まで関数の評価を実施してから行う。
そのため、スタックが回数分作成されるので、スタックオーバーフローが発生する。  
しかし、末尾再起は最後まで待つことなく、逐次処理を行うため、スタックが再帰回数分作成されない。

(参考)  
https://qiita.com/pebblip/items/cf8d3230969b2f6b3132  
https://zenn.dev/awyaki/articles/f5bb2ca6bb99b3

JavaScript で末尾再帰最適化を実装している処理系を答えなさい。
利用できる環境があれば、実際に以下の URL を表示・実行してエラーが発生しないことを確認しなさい。  
https://www.typescriptlang.org/play?#code/GYVwdgxgLglg9mABMAhtOAnGKA2AKMALkTBAFsAjAUwwEpEBvAWAChFlxp4kYoa8ADhjgATENGKlKNADSIIccHwyTy1Oo1bt2MYIjwKlNRAD4S9Zm23sMVKCAxIho8VADcW7QF9PNuw55lQWExaEQAKnlFMGU5QxjjAGpEAEZaDysfK1t7R0RefhS5NIys1gUwAGc4HCoAOhw4AHM8VHQsXDwUgAZe3tp01iA

JavaScript で末尾再帰最適化を実装している処理系  
??
