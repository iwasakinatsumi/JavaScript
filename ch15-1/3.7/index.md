自分が運営する販売サイトに YouTube のトップページを iframe で組込み、更に自作の script.js により iframe 内のデータを分析しようとしています。

<iframe id="other" src="https://www.youtube.com/"></iframe>
<script src="./script.js"></script>
...

(async () => {
// YouTube が利用者に推薦する動画タイトルを取得すれば、利用者に最適な商品セットを表示できるのではないか？
const titles = document.getElementById("").contentWindowquerySelectorAll('#video-title');
for (const t of titles) {
await fetch("your-server-path", { method: "POST", body: t.textContent })
}
});

しかし、トップページを読み込むとエラーになります。用語「クリックジャッキング」を調べて理由を説明しなさい。
また、script.js も動作しません。
ここで、同一オリジンポリシーがなく、iframe 内の他サイトの DOM 変更が可能な仕様を想定し、どのような重大な問題が発生しうるか記載しなさい。
出題範囲 15.1.8.2

# クリックジャッキング

ユーザーが A サイトのボタンなどを押下したつもりが、実際には意図せず B サイトのボタンなどを押下し、ユーザーの意図しない動作を行ってしまう。
参考：https://www.ipa.go.jp/security/vuln/websecurity/clickjacking.html

#　なぜエラーになるのか？

クリックジャッキングによる被害を防ぐために、同一オリジンポリシーでないので、エラーになる。
「iframe で読み込み可能なページに、更新系の処理が実装されていること」が根本原因

参考：  
https://qiita.com/mejileben/items/39d897757d5c3a904721  
https://qiita.com/g0zarre/items/14b3c8d01f8b63914b4e

# 重大な問題点

自分で用意した HP に罠が仕掛けられた場合、他サイトに対して、DOM 変更が行われるなど悪意のある操作が実行されると、訴訟などに発展する可能性。
