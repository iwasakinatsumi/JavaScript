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
