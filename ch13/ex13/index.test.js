//12 章の演習問題で実装した walk 関数の非同期ジェネレータ版を実装しなさい:
//出題範囲: 13.4

// 利用例
(async () => {
  // カレントディレクトリ (.) のファイル・フォルダを再帰的に取得し表示する
  for await (const elem of walk(".")) {
    console.log(elem);
  }

  // NOTE: walk に与えたパスが以下のようなディレクトリ・ファイルを持つ時を考える
  // .
  // ├── A
  // ├── B
  // │   └── C
  // │       └── buz.txt
  // └── foo.txt
  //
  // この気 `walk` は以下を返す (順序は任意):
  // - { path: "A", isDirectory: true }
  // - { path: "B", isDirectory: true }
  // - { path: "B/C", isDirectory: true }
  // - { path: "B/C/buz.txt", isDirectory: false }
  // - { path: "foo.txt", isDirectory: false }
})();
