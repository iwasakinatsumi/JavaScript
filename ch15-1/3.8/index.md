提供している index.html と data.json は npm run server を実行することで、ローカルホスト上で提供できます。  
ブラウザから http://localhost:3000/ch15.01-03/ex08 にアクセスすることで index.html を開けます。  
index.html は data.json の値を参照しています。  
何者かにサーバーに侵入され data.json が改ざんされた可能性があるとします。攻撃者はどのような data.json の改ざんを行ったでしょうか。  
実際に XSS が発生する data.json に書き換えなさい。  
出題範囲 15.1.8.3

# 環境構築

package.json に  
"scripts": {
"server": "http-server -o"
}  
を追記する。  
参考：https://qiita.com/oblivion/items/3590b44dd8b5bcc3328d

# 改ざん内容

サニタイズしていないので、アラートが出る想定だが…
