## 予想

try で return されるので、default は実行されずに、true だけが表示される。

## 実行結果

false が返却された  
理由：finally は try が実行された後に必ず実行されるので、try で true が返却された後に、finally が実行されて false が返却された。
