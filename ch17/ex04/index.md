npm install すると作成される package-lock.json はどのような役割を持つのか。  
また、リポジトリにコミットすべきか、について説明しなさい。  
出題範囲 17.4

# 役割
- npm installで新規作成/更新される(自動なので直接編集×)  
- 実際にインストールしたパッケージ情報が記載されている
- npm ciコマンドを使うとpackage-lock.jsonを使用してパッケージがインストールできる

参考：https://qiita.com/sugurutakahashi12345/items/1f6bb7a372b8263500e5

# コミットすべきか？
↑の3つ目の用途で使えるので、コミットした方がよい
ただ、ch17用のpackage-lock.jsonをgitにコミットしたところ、メールでアラートが飛んだ
https://github.com/iwasakinatsumi/JavaScript/security/dependabot
きちんと脆弱性対応など実施は別途必要(使っているバージョンが古いっぽい)