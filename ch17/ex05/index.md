問題 15.4-10.10 で作成したライフゲームのプログラムについて、プログラム中の関数(updateGrid, renderGrid)をそれぞれ別のファイルで export し、index.js から import して利用するよう修正しなさい。 必要に応じて定数の export や関数の引数の変更を行ってもよい。  
上記のコードを webpack を利用してバンドルし、バンドル前後のコードについて以下の点を調査して結果を記載しなさい。

- バンドルしたコードと元のコードを比較し、どのような処理が行われたかを確認しなさい。
- バンドル前後それぞれのコードを利用するページをローカルサーバで配信してブラウザから閲覧できるようにしなさい。  
  開発者ツールで ネットワーク タブを開き、スクリプトのダウンロード時間、ページの読み込み完了時間について比較しなさい。

出題範囲 17.5

# どのような処理が行われたか

- distにbundle.jsとindex.htmlが作成された
- bundle.jsの中身を確認すると難読化が実施されていて、横1行になっている
- 3ファイルが1つにまとまった
- index.htmlも難読化が行われている

⇒バンドル：束にする、の意味

# それぞれの比較

計測方法？  
| | ダウンロード時間 | 読み込み完了時間 |
| ------------------ | ---------------- | ---------------- |
| 元のコード | |
| バンドルしたコード | |

contentBaseを設定したらエラーだった  
https://qiita.com/chocomint_t/items/4bc57945bce081922582
