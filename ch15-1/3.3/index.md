# integrity 属性を使用することによって、防御できる主な攻撃

integrity 属性はハッシュ値を計算することで、改ざんがないかどうかを比較する。  
(改ざんがあった場合にはハッシュ値が一致しないので)

- スクリプトの改ざん
  もし正当なサイトがホストするスクリプトが不正に変更された場合、改ざんされたスクリプトが実行されることを防ぎます。

参考：https://developer.mozilla.org/ja/docs/Web/Security/Subresource_Integrity
