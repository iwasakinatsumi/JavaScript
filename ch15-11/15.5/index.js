// 15.1-3.1 の ToDo 管理アプリケーション を indexedDB を用いて、一度閉じて再度開いても、画面更新しても、ToDo の内容が維持されるようにしなさい。
// また、複数のタブで ToDo 管理アプリケーションを開いている状態で、あるタブでの変更が他のタブにも自動的に反映されるようにしなさい。
// (例：タブ A とタブ B を開いている状態で、タブ A で ToDo を追加し、タブ B に切り替えると タブ A で追加した ToDo が表示される)
// 出題範囲: 15.12.3

//localStorageなのでindexedDBに修正する

//ページが読み込まれたらTodoをとってくる
document.addEventListener("DOMContentLoaded", loadTodos);

//ボタンを押した際にイベントを発火させる
document
  .querySelector('button[type="submit"]')
  .addEventListener("click", addTodo);

//ToDo作成関数
function addTodo() {
  const todoInput = document.getElementById("new-todo");
  let todoText = todoInput.value.trim();
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

  //localStorageに保存する
  saveTodos();

  //入力値のクリア
  todoInput.value = "";
}

//チェックつける
function toggleTodo(checkbox) {
  const listItem = checkbox.parentElement;
  listItem.classList.toggle("checked", checkbox.checked);

  //localStorageに保存する
  saveTodos();
}

//消す
function deleteTodo(button) {
  const listItem = button.parentElement;
  listItem.remove();

  //localStorageに保存する
  saveTodos();
}

//localStorageに保存する関数
function saveTodos() {
  const todoList = document.getElementById("todo-list");
  const todos = [];
  for (let listItem of todoList.children) {
    const todoText = listItem.querySelector("label").textContent;
    const isChecked = listItem.querySelector("input[type='checkbox']").checked;
    todos.push({ text: todoText, checked: isChecked });
  }
  localStorage.setItem("todos", JSON.stringify(todos));
}

//localStorageからTodoを読みだす関数
function loadTodos() {
  const todos = JSON.parse(localStorage.getItem("todos"));
  if (todos) {
    const todoList = document.getElementById("todo-list");
    todos.forEach((todo) => {
      const listItem = document.createElement("li");
      listItem.innerHTML = `
        <div>
          <input type="checkbox" role="checkbox" ${
            todo.checked ? "checked" : ""
          } onchange="toggleTodo(this)">
          <label>${todo.text}</label>
          <button role="button" onclick="deleteTodo(this)">❌</button>
        </div>
      `;
      todoList.append(listItem);
    });
  }
}

//Todoを反映させる
window.addEventListener("storage", (event) => {
  if (event.key === "todos") {
    loadTodos();
  }
});
