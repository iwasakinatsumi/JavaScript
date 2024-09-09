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
また、script.js も動作しません。ここで、同一オリジンポリシーがなく、iframe 内の他サイトの DOM 変更が可能な仕様を想定し、どのような重大な問題が発生しうるか記載しなさい。
出題範囲 15.1.8.2

# クリックジャッキング
