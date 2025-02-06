ESLint と Prettier は昨今よく使われおり、併用されることもよくある。
この二つを package.json に scripts を追加してそれぞれ実行できるようにしなさい。
追加した Prettier の scripts 実行時は警告が表示されるだけでなく、コードの修正がされるようオプションで設定すること。
Prettier vs. Linters(https://prettier.io/docs/en/comparison.html) にあるように ESLint ではバグ検知のための検知を、フォーマットに関しては Prettier で行うようにすること。
ESLint、Prettier の各種設定はプロジェクトで採用したスタイルによって設定すべき内容も変わるが、ここでは設定の練習として Google JavaScript Style Guide(https://google.github.io/styleguide/jsguide.html) になるべく従うように設定しなさい。
実行確認用のファイルとして ex01 に format_sample.js と lint_sample.js を用意した。  
それぞれのファイルに追加した scripts を実行し、lint の警告は修正しなさい。
ただし format_sample.js は lint の警告を修正するのではなく、ESLint の設定で lint 対象から除外し、警告がでないようにすること。
実行確認用のファイルはあくまで例として上記のガイドのいくつかを反映されているのみであるため、設定に関しては実行確認用ファイルがガイドに従う最小設定ではなく、Google JavaScript Style Guide に従うこと。

出題範囲 17.1, 17,2

参考：  
https://prettier.io/docs/en/install.html  
https://zenn.dev/cordelia/articles/751c4efb74441a  
https://www.npmjs.com/package/lint
https://zenn.dev/popcorn/scraps/6e7002f56a3451
https://qiita.com/Shilaca/items/c494e4dc6b536a5231de

# 実施手順

1.ch17で下記を実行

> npm install --save-dev eslint prettier eslint-config-prettier eslint-plugin-prettier

> npx eslint --init  
> √ How would you like to use ESLint? · problems  
> √ What type of modules does your project use? · esm  
> √ Which framework does your project use? · none  
> √ Does your project use TypeScript? · javascript  
> √ Where does your code run? · browser  
> The config that you've selected requires the following dependencies:eslint, globals, @eslint/js  
> √ Would you like to install them now? · No / Yes  
> √ Which package manager do you want to use? · npm

2.package.jsonに設定追加

> "lint": "eslint",  
> "lint:fix": "eslint --fix",  
> "prettier": "prettier --write",  
> "prettier:check": "prettier --check",

3.eslintrc.jsonと.prettierrcを設定
→eslint.config.jsが自動的に作成された
.eslintrc.jsonに無視するファイルを記載

"semi": true,//「;」を必ずつける  
https://google.github.io/styleguide/jsguide.html#formatting-semicolons-are-required  
"singleQuote": true,//文字列は「'」で囲う  
https://google.github.io/styleguide/jsguide.html#features-strings-use-single-quotes  
"trailingComma": "all",//配列など「,」区切りの際は最後の要素の後にもカンマをつける  
https://google.github.io/styleguide/jsguide.html#features-arrays-trailing-comma
"tabWidth": 2,//インデントは2文字下げ  
https://google.github.io/styleguide/jsguide.html#formatting-block-indentation
"useTabs": false//インデントはタブではなくスペースを使う  
https://google.github.io/styleguide/jsguide.html#whitespace-characters

# 結果

- lint

> C:\js\JavaScript\ch17\ex01\sample\lint_sample.js
> 4:1 error Parsing error: 'with' in strict mode

→withを使わずに直接定義した
https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Statements/with
https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Strict_mode

- prettier
  ・インデントがそろった
  ・関数区切りになった
  ・unnecessaryが消えた
