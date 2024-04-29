typeof 演算子のオペランドに  
・undefined  
・null  
・オブジェクト  
・NaN  
・数値  
・関数  
を指定した時の返り値を予想する

予想：  
・undefined：undefined  
・null:null
・オブジェクト:Object  
・NaN:undefined  
・数値:number  
・関数:function

結果：  
・undefined：undefined  
・null:object  
・オブジェクト:function  
・NaN:number  
・数値:number  
・関数:function

結果について：  
・null：43 ページに記載  
「オブジェクトが存在しない」ということを表す特別なオブジェクト  
・NaN：Not a Number  
値としては非数だが、Number に所属している
