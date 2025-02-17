オリジン間リソース共有（CORS）について、以下の問いに答えなさい。

1.クロスオリジンリクエストに制約が無かった場合、どのような問題が発生するか述べなさい  
2.クロスオリジンリクエストで メソッド(POST/GET)やリクエストの内容によって Preflight リクエストの有無が異なるのは何故か、その理由を述べなさい

出題範囲: 15.11.1

1.制限がない場合、違うオリジンからリソースのリクエストが行われる可能性があり、そのリクエストにこたえると悪意のあるサイトへデータを送ってしまう可能性がある(情報漏洩/改ざんなど)

参考：https://developer.mozilla.org/ja/docs/Web/HTTP/CORS

> セキュリティ上の理由から、ブラウザーは、スクリプトによって開始されるオリジン間 HTTP リクエストを制限しています。
> 例えば、fetch() や XMLHttpRequest は同一オリジンポリシー (same-origin policy) に従います。
> つまり、これらの API を使用するウェブアプリケーションは、そのアプリケーションが読み込まれたのと同じオリジンに対してのみリソースのリクエストを行うことができ、それ以外のオリジンからの場合は正しい CORS ヘッダーを含んでいることが必要です。

2.GET であれば、データの取得のみだが、POST や DELETE の場合、実行されることにより、影響があるものに関しては事前にチェックすることで本当に実行してよいのか確認している

参考：  
https://developer.mozilla.org/ja/docs/Glossary/Preflight_request  
https://zenn.dev/tm35/articles/ad05d8605588bd
