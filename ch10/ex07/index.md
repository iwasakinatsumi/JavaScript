JavaScript/TypeScript の有名な日付操作の OSS リポジトリである date-fns、Luxon、Day.js のそれぞれが、src ディレクトリ以下がどのようなまとまりでモジュール分割されているか分析して、それぞれ 2、3 段落程度で記述しなさい。

https://github.com/date-fns/date-fns
https://github.com/moment/luxon
https://github.com/iamkun/dayjs

# data-fns

・単位ごとにまとまっている。(年/週/日/時間/曜日)  
・機能ごとにフォルダが細かく分割されている

# Luxon

・間隔で分割されていて、時間や曜日などの分割はされていない  
・duration/interval：間隔 違い？  
　 duration で時間(hour/minuts など)の定義  
　 interval で何日後とかの間隔を定義している

# Day.js

・constant/util.js で大筋の定義  
→plugin で時間計算とか定義している
https://github.com/iamkun/dayjs/blob/dev/src/locale/ja.js  
↑ が日本向けなので「年」など既に入力されたものが用意されている
