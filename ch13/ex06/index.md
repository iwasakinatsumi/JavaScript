# jQuery Deferred について調べ Promise との関係性について説明しなさい。

Promise:
https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/Promise
非同期処理の最終的な完了もしくは失敗を表すオブジェクト

jQuery Deferred  
https://api.jquery.com/jQuery.Deferred/  
複数のコールバックをコールバック キューに登録したり、コールバック キューを呼び出したり、同期または非同期関数の成功または失敗の状態を中継したりできます。

Promise との関係：
Deffered の内部で Promise が作成され、Deffered が Promise の状態を変更する
Promise の状態には 3 つある

1. pending : 処理が未完了
2. resolved : 処理が成功
3. rejected : 処理が失敗

生成されたときは pending になり、処理が成功したら resolved に状態を変化させる。

参考：  
https://techblog.yahoo.co.jp/programming/jquery-deferred/  
https://qiita.com/opengl-8080/items/6eba7922be168edfc439  
https://qiita.com/atti/items/17fd8b11305a5375a1de
https://developer.mozilla.org/ja/docs/Web/JavaScript/Guide/Using_promises
