JavaScript/TypeScript の有名な日付操作の OSS リポジトリである date-fns、Luxon、Day.js のそれぞれが、src ディレクトリ以下がどのようなまとまりでモジュール分割されているか分析して、それぞれ 2、3 段落程度で記述しなさい。

https://github.com/date-fns/date-fns
https://github.com/moment/luxon
https://github.com/iamkun/dayjs

# data-fns

・単位ごとにまとまっている。(年/週/日/時間/曜日)  
・機能ごとにフォルダ分割されている

# Luxon

・間隔で分割されていて、時間や曜日などの分割はされていない  
・duration/interval：間隔 違い？

# Day.js

・constant.js で大筋が定義、locale 内部で詳細がされていそう
