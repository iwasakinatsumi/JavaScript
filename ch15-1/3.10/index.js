/**
 * div 要素とテキスト input 要素が以下のようにイベント処理されるように実装を追加しなさい。
 * div 要素をクリックすると input 要素が focus される
 * div 要素は通常白色で input 要素に focus されると灰色 (silver)になる (input 要素から focus が外れると白色に戻る)
 * input 要素に入力された text は div 要素にも表示される
 * 出題範囲 15.2
 */
document.addEventListener("DOMContentLoaded", () => {
  const editorFront = document.getElementById("editor-front");
  const editorBack = document.getElementById("editor-back");

  // divをクリックするとinput要素にフォーカス
  editorFront.addEventListener("click", () => {
    editorBack.focus();
  });

  // input要素がフォーカスされたときの処理
  editorBack.addEventListener("focus", () => {
    editorFront.style.backgroundColor = "silver";
  });

  // input要素がフォーカスが外れたときの処理
  editorBack.addEventListener("blur", () => {
    editorFront.style.backgroundColor = "white";
  });

  // input要素に入力されたテキストをdivに表示
  editorBack.addEventListener("input", () => {
    editorFront.textContent = editorBack.value;
  });
});
