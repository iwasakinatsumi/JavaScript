// 15.1-3.1 の ToDo 管理アプリケーション を indexedDB を用いて、一度閉じて再度開いても、画面更新しても、ToDo の内容が維持されるようにしなさい。
// また、複数のタブで ToDo 管理アプリケーションを開いている状態で、あるタブでの変更が他のタブにも自動的に反映されるようにしなさい。
// (例：タブ A とタブ B を開いている状態で、タブ A で ToDo を追加し、タブ B に切り替えると タブ A で追加した ToDo が表示される)
// 出題範囲: 15.12.3

//ボタンを押した際にイベントを発火させる
document
  .querySelector('button[type="submit"]')
  .addEventListener("click", addTodo);

let db;
const request = indexedDB.open("todoDB", 1);

request.onupgradeneeded = (event) => {
  db = event.target.result;
  const objectStore = db.createObjectStore("todos", {
    keyPath: "id",
    autoIncrement: true,
  });
  objectStore.createIndex("text", "text", { unique: false });
  objectStore.createIndex("completed", "completed", { unique: false });
};

request.onsuccess = (event) => {
  db = event.target.result;
  loadTodos();
};

request.onerror = (event) => {
  console.error("IndexedDB error:", event.target.errorCode);
};

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

function loadTodos() {
  const transaction = db.transaction(["todos"], "readonly");
  const objectStore = transaction.objectStore("todos");

  objectStore.openCursor().onsuccess = (event) => {
    const cursor = event.target.result;
    if (cursor) {
      const todo = cursor.value;
      const todoList = document.getElementById("todo-list");
      const listItem = document.createElement("li");
      listItem.innerHTML = `
        <div>
          <input type="checkbox" role="checkbox" ${
            todo.completed ? "checked" : ""
          } onchange="toggleTodo(this)">
          <label>${todo.text}</label>
          <button role="button" onclick="deleteTodoWithId(${
            todo.id
          }, this)">❌</button>
        </div>
      `;
      todoList.append(listItem);
      cursor.continue();
    }
  };
}

//チェックつける
function toggleTodo(checkbox) {
  const listItem = checkbox.parentElement;
  listItem.classList.toggle("checked", checkbox.checked);
  //取り消し線の設定　 ラベルのスタイルを変更

  const label = listItem.querySelector("label");
  const todoText = label.textContent;

  const transaction = db.transaction(["todos"], "readwrite");
  const objectStore = transaction.objectStore("todos");
  const index = objectStore.index("text");

  index.openCursor(todoText).onsuccess = (event) => {
    const cursor = event.target.result;
    if (cursor) {
      const todo = cursor.value;
      todo.completed = checkbox.checked;
      objectStore.put(todo);
    }
  };
}

//消す
function deleteTodo(button) {
  const listItem = button.parentElement;
  listItem.remove();

  const transaction = db.transaction(["todos"], "readwrite");
  const objectStore = transaction.objectStore("todos");
  objectStore.delete(id);
}
