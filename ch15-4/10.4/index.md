この問題では 15.3.6 の例 (目次の作成) を変更する。
ex04/TOC.js は例を少し修正した内容である。以下の順に進めなさい:

適当な Web サイトを開き、ブラウザの開発者ツールに TOC.js の内容を貼り付けて実行してみなさい
TOC.js をブックマークレットにして簡単に実行できるようにしなさい (javascript:{TOC.js のコード} というブックマークを作成)
下記の例を参考にして目次を選択した時にスムーズに遷移するようにしなさい

let link = document.createElement("a");
link.href = `#${fragmentName}`;
link.innerHTML = heading.innerHTML;

/_ 追加分 _/
link.addEventListener("click", (e) => {
e.preventDefault();
const target = document.querySelector(`a[name="${fragmentName}"]`);
if (!target) {
return;
}

/_ NOTE: scrollTo または scrollIntoView でスムーズにスクロールしなさい _/
});

参考: 完成後のイメージは以下:

出題範囲: 15.5
