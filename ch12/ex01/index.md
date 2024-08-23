# 以下の関数 counterIter() 及び counterGen() を利用して、イテレータ及びジェネレータに対して、どのような操作をした時にどの部分が実行されるのか、動作を確認しなさい。

例

明示的にイテレータインタフェース のメソッドを呼んだり、間接的に呼んだりする  
ジェネレータ関数によって生成されたオブジェクトがイテレータインタフェースを満たしていることを確認する

return() や throw() がどのようなときに呼ばれるのか確認する  
ジェネレータ関数の中身がどのタイミングで初めて実行されるか確認する

出題範囲: 全体

# 結果

1.  counterIter(5)を実行してみる  
    実行結果：コンソールに「counterIter」のみが出力された

2.  counterGen(5)を実行してみる  
    実行結果：  
    何も表示されなかった  
    → ジェネレーターなので、呼んだだけでは実行されない

3.  下記のコードを実行してみる  
     let gen = counterGen(5);  
     gen.next().value;  
     gen.next().value;  
     gen.next().value;  
     gen.next().value;  
     gen.next().value;  
     gen.next().value;  
     gen.next().value;  
    実行結果：  
    counterGen  
    counterGen: next  
    counterGen: next  
    counterGen: next  
    counterGen: next  
    counterGen: next  
    counterGen: next  
    counterGen: finally  
    →next で呼ばれるたびに引数で設定した値まで for 文が実行される  
     value で c の値が表示されるかと思ったが…？

4.  下記のコードを実行してみる  
    let iter = counterIter(5);  
    iter.next().value;  
    iter.return(3);  
    iter.throw("Error");  
    実行結果：  
    counterIter  
    counterIter: next  
    counterIter: return: 3  
    counterIter: throw: Error → 別途エラー出てる
