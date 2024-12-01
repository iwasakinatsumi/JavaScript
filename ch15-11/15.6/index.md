問題 15.11-15.4 の解答を localStorage ではなく sessionStorage を使うように修正しなさい。
localStorage と sessionStorage それぞれに保存されたデータの有効期限がどのように異なるか、実際に動作確認して結果を記述しなさい。
出題範囲: 15.12.1

# localStorage

https://developer.mozilla.org/ja/docs/Web/API/Window/localStorage

有効期間は半永久的：ブラウザ閉じても PC 再起動しても残っていた

うまくいっていない？画面の更新が入っていないかも
(aaa のあとに bbb 追加すると別ブラウザだと aaa/aaa/bbb が表示される。再読み込みするとちゃんと aaa/bbb が表示される。)

# sessionStorage

https://developer.mozilla.org/ja/docs/Web/API/Window/sessionStorage

有効期間はブラウザを閉じるまで：ブラウザを閉じるとデータは残っていなかった
