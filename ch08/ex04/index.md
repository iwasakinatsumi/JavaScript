```
const obj = {
om: function () {
 const nest = {
  nm: function () {
   console.log(this === obj, this === nest);
  },
  arrow: () => {
   console.log(this === obj, this === nest);
  },
 };
 nest.nm();
 nest.arrow();
 },
};
obj.om();
```

以下の入れ子の関数とアロー関数のコード実行結果を予想してから実行し、結果を説明しなさい。  
【予想】  
obj.om で om の function が呼び出される。  
上から順番に実行されるので、nest.nm()が先に実行される。  
コンソールに
次に nest.arrow()が実行され、コンソールに

が出力される。

【結果】
