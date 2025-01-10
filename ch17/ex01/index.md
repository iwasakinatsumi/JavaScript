ESLint と Prettier は昨今よく使われおり、併用されることもよくある。
この二つを package.json に scripts を追加してそれぞれ実行できるようにしなさい。
追加した Prettier の scripts 実行時は警告が表示されるだけでなく、コードの修正がされるようオプションで設定すること。
Prettier vs. Linters(https://prettier.io/docs/en/comparison.html) にあるように ESLint ではバグ検知のための検知を、フォーマットに関しては Prettier で行うようにすること。
ESLint、Prettier の各種設定はプロジェクトで採用したスタイルによって設定すべき内容も変わるが、ここでは設定の練習として Google JavaScript Style Guide(https://google.github.io/styleguide/jsguide.html) になるべく従うように設定しなさい。
実行確認用のファイルとして ex01 に format_sample.js と lint_sample.js を用意した。それぞれのファイルに追加した scripts を実行し、lint の警告は修正しなさい。
ただし format_sample.js は lint の警告を修正するのではなく、ESLint の設定で lint 対象から除外し、警告がでないようにすること。
実行確認用のファイルはあくまで例として上記のガイドのいくつかを反映されているのみであるため、設定に関しては実行確認用ファイルがガイドに従う最小設定ではなく、Google JavaScript Style Guide に従うこと。

出題範囲 17.1, 17,2
