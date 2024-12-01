// 15.1-3.1 の ToDo 管理アプリケーション を indexedDB を用いて、一度閉じて再度開いても、画面更新しても、ToDo の内容が維持されるようにしなさい。
// また、複数のタブで ToDo 管理アプリケーションを開いている状態で、あるタブでの変更が他のタブにも自動的に反映されるようにしなさい。
// (例：タブ A とタブ B を開いている状態で、タブ A で ToDo を追加し、タブ B に切り替えると タブ A で追加した ToDo が表示される)
// 出題範囲: 15.12.3

//ボタンを押した際にイベントを発火させる
document
  .querySelector('button[type="submit"]')
  .addEventListener("click", addTodo);

//ToDo作成関数
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
