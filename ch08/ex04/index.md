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
コンソールに(何が出るか？)  
次に nest.arrow()が実行される。  
コンソールに(何が出るか？)

【結果】  
実行結果：  
false true  
true false

結果の説明：  
コンソールログで何が含まれるか見てみた。  
nm this: { nm: [Function: nm], arrow: [Function: arrow] }  
nm obj: { om: [Function: om] }  
nm nest: { nm: [Function: nm], arrow: [Function: arrow] }

arrow this: { om: [Function: om] }  
arrow obj: { om: [Function: om] }  
arrow nest: { nm: [Function: nm], arrow: [Function: arrow] }

なので、結果としては ↑ になる。  
それぞれ見ていくと  
nm 内の this に arrow が含まれる理由？  
nm の obj  
nm の nest

arrow 内の this  
arrow 内の obj  
arrow 内の nest
