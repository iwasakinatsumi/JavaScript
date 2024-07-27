# CommonJS と ES Module 以外の JavaScript のモジュール方式名を調べて記述しなさい

https://developer.mozilla.org/ja/docs/Web/JavaScript/Guide/Modules
https://zenn.dev/ebi_yu/scraps/db4c7d1f3e883a

・AMD(Asynchronous module Definition)  
https://requirejs.org/docs/whyamd.html  
CommonJS が require()にモジュール名を指定するのに対して、define()に配列でモジュール名を指定する。

> CommonJS は当初ブラウザ環境で実行されることが想定されていなかったため、ブラウザ環境での実行を考慮し、依存関係の解決および遅延ロードに対応したのが AMD

・UMD(Universal Module Definition)  
CommonJS と AMD の両方に対応(=サーバー/ブラウザ両方で動く)

・System.register  
https://github.com/systemjs/systemjs/blob/main/docs/system-register.md

> Web ブラウザ、Node.js ともに ES Modules のネイティブ実装が存在していますが、それらが提供されていないバージョンでも ESM の恩恵を受けられることが SystemJS の特徴

https://qiita.com/riku_takeuchi/items/4fd0bca8a99ac14aed45  
https://www.pr1v4t3.io/javascript-modules  
https://qiita.com/qnighy/items/0c3fd208e0356fa19cda
