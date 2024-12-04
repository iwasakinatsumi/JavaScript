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

let db;
const request = indexedDB.open("todoDB", 1); //データベースのv1をリクエスト

//成功したとき
request.onsuccess = (event) => {
  db = event.target.result;
  loadTodos();
};

//失敗したとき
request.onerror = (event) => {
  alert(event.target.errorCode);
};

//初期化の
request.onupgradeneeded = (event) => {
  db = event.target.result;
  //一意なIDとtextとcheckedを持つオブジェクトストアを作成する
  //IDの作成？？
  const objectStore = db.createObjectStore("todos", { keyPath: "id" });
  objectStore.createIndex("text", "text");
  objectStore.createIndex("checked", "checked");
};

//ToDo作成関数
function addTodo() {
  const todoInput = document.getElementById("new-todo");
  let todoText = todoInput.value.trim();
  if (todoText === "") return;

  //トランザクションオブジェクト
  const transaction = db.transaction(["todos"], "readwrite");
  //トランザクションからオブジェクトストアを取得する
  const objectStore = transaction.objectStore("todos");
  //リクエストの実行
  const request = objectStore.add({ text: todoText, checked: false });

  //成功
  request.onsuccess = () => {
    const todoList = document.getElementById("todo-list");
    const listItem = document.createElement("li");
    listItem.innerHTML = `
      <div>
        <input type="checkbox" role="checkbox" onchange="toggleTodoWithId(${request.result}, this)">
        <label>${todoText}</label>
        <button role="button" onclick="deleteTodoWithId(${request.result}, this)">❌</button>
      </div>
    `;
    todoList.append(listItem);
    todoInput.value = "";
  };

  //失敗
  request.onerror = (event) => {
    alert(event.target.errorCode);
  };
}

//チェックつける
function toggleTodo(id, checkbox) {
  const listItem = checkbox.parentElement;
  listItem.classList.toggle("checked", checkbox.checked);

  //トランザクション作って、そのidのものを取得して、チェックを変更する
  const transaction = db.transaction(["todos"], "readwrite");
  const objectStore = transaction.objectStore("todos");
  const request = objectStore.get(id);

  //成功したらチェック付けて保存する
  request.onsuccess = (event) => {
    const todo = event.target.result;
    todo.checked = checkbox.checked;
    objectStore.put(todo);
  };

  //失敗
  request.onerror = (event) => {
    alert(event.target.errorCode);
  };
}

//消す
function deleteTodo(id, button) {
  const listItem = button.parentElement;
  listItem.remove();

  //トランザクション作って、そのidのものを削除する
  const transaction = db.transaction(["todos"], "readwrite");
  const objectStore = transaction.objectStore("todos");
  objectStore.delete(id);
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
