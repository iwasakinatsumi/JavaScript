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

  //sessionStorageに保存する
  saveTodos();

  //入力値のクリア
  todoInput.value = "";
}

//チェックつける
function toggleTodo(checkbox) {
  const listItem = checkbox.parentElement;
  listItem.classList.toggle("checked", checkbox.checked);

  //sessionStorageに保存する
  saveTodos();
}

//消す
function deleteTodo(button) {
  const listItem = button.parentElement;
  listItem.remove();

  //sessionStorageに保存する
  saveTodos();
}

//sessionStorageに保存する関数
function saveTodos() {
  const todoList = document.getElementById("todo-list");
  const todos = [];
  for (let listItem of todoList.children) {
    const todoText = listItem.querySelector("label").textContent;
    const isChecked = listItem.querySelector("input[type='checkbox']").checked;
    todos.push({ text: todoText, checked: isChecked });
  }
  sessionStorage.setItem("todos", JSON.stringify(todos));
}

//sessionStorageからTodoを読みだす関数
function loadTodos() {
  const todos = JSON.parse(sessionStorage.getItem("todos"));
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
