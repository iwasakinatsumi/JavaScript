index.js は一定確率で終了する子プロセスを spawn するようになっている。index.js に対して以下の処理を実装しなさい。

1. 子プロセスが異常終了した場合、再起動する
2. シグナルを 2 種類以上トラップし、そのシグナルと同じシグナルを子プロセスに通知し、子プロセスがそのシグナルによって終了したことを確認し、自身も終了する

また、主にクラウド上で動作するプログラムは、いわゆる Graceful Shutdown という動作が求められ、上記のような処理が必要な場合がある。  
Kubernetes や Amazon ECS などの Docker ランタイム上でコンテナの Graceful Shutdown のために送信されるシグナルの種類は何か書きなさい。
出題範囲: 16.10.3

# 種類

SIGTERM → 　 SIGKILL

Graceful Shutdown：  
アプリ停止の際に安全に正常終了する仕組みのこと。  
リクエストの受付を停止して、処理中のプロセスが完全に終わるまで待ってからアプリを終了する。  
参考：https://qiita.com/mgmgmogumi/items/f6fedd366548323d6d12#:~:text=2024%2D03%2D02-,GracefulShutdown%E3%81%A8%E3%81%AF,%E3%81%AE%E5%A0%B4%E9%9D%A2%E7%AD%89%E3%81%A7%E6%B4%BB%E7%94%A8%E3%80%82  
https://aws.amazon.com/jp/blogs/news/graceful-shutdowns-with-ecs/
