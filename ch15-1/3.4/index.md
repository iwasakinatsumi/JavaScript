グローバルオブジェクトを参照する方法を、ブラウザ内、node 内、ブラウザ node 問わずの３種記しなさい。
また、ブラウザと node のグローバルオブジェクトのプロパティやメソッドを比較し、ブラウザ独自のものを 10 程度記しなさい。
最後に、グローバルオブジェクトに undefined が定義されていることを確認し、過去の ES 仕様でどのような問題が発生していたかを記しなさい。
出題範囲 15.1.3

# ブラウザ内

> ウェブブラウザーでは、明示的にバックグランドタスクとして起動されるコードを除き、 Window がグローバルオブジェクトになります。

「window.xxx」のような形でアクセスできる

参考：https://developer.mozilla.org/ja/docs/Glossary/Global_object

# node 内

「global.xxx」のような形でアクセスできる

参考：https://nodejs.org/api/globals.html

# ブラウザ node 問わず

> globalThis プロパティは、環境を越えてグローバルな this 値 (すなわちグローバルオブジェクト自身) にアクセスするための標準的な方法を提供します。

参考：https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/globalThis

# ブラウザ独自のプロパティ/メソッド

- document
- location
- frame
- history
- name
- self
- top
- closed
- opener
- status

ブラウザ：https://developer.mozilla.org/ja/docs/Web/API/Window  
node：https://nodejs.org/api/globals.html

# 過去の ES 仕様で発生していた問題

https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/undefined  
解説を読むと…

> ECMAScript 5 の仕様により、設定不可、書き込み不可のプロパティとなります。

とのことで、反対に、ECMAScript3 までは書き込み(上書き)が可能だった。  
すると、undefined と言っているのに、undefined 以外のものも設定できるようになるので、誤解を生むことがあった。
