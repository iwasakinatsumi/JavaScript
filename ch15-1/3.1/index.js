/**
 * 15.1 から 15.3 で学んだ知識を使って以下のような簡単な ToDo 管理アプリケーションを作りなさい。
 * 問題:
 * index.js を変更し ToDo アプリケーションを完成させなさい。仕様に関してはテストコードを参照しなさい。
 * ただし index.html ファイルは編集してはいけません。
 * index.html ファイル内の script タグから type="module" 属性を削除した場合、期待通り動作させるにはどうすべきか答えなさい。
 * 出題範囲 15.1-3
 */

//ボタンを押した際にイベントを発火させる
document
  .querySelector('button[type="submit"]')
  .addEventListener("click", addTodo);

//ToDo作成関数
//一瞬見えて消えるな…
function addTodo() {
  const todoInput = document.getElementById("new-todo");
  const todoText = todoInput.value.trim();
  if (todoText === "") return;

  const todoList = document.getElementById("todo-list");

  const listItem = document.createElement("li");
  listItem.innerHTML = `
  <div>
        <input type="checkbox" role="checkbox" onchange="toggleTodo(this)">
        <label>${todoText}</label>
        <button role="button" onclick="deleteTodo(this)">❌</button>
        </div>

    `;
  todoList.append(listItem);

  //入力値のクリア
  todoText = "";
}

//チェックつける
function toggleTodo(checkbox) {
  const listItem = checkbox.parentElement;
  listItem.classList.toggle("checked", checkbox.checked);
  //取り消し線の設定　 ラベルのスタイルを変更
}

//消す
function deleteTodo(button) {
  const listItem = button.parentElement;
  listItem.remove();
}
