/**
 * 15.1 から 15.3 で学んだ知識を使って以下のような簡単な ToDo 管理アプリケーションを作りなさい。
 * 問題:
 * index.js を変更し ToDo アプリケーションを完成させなさい。仕様に関してはテストコードを参照しなさい。
 * ただし index.html ファイルは編集してはいけません。
 * index.html ファイル内の script タグから type="module" 属性を削除した場合、期待通り動作させるにはどうすべきか答えなさい。
 * 出題範囲 15.1-3
 */
document.getElementById("addButton").addEventListener("click", addTodo);

function addTodo() {
  const todoInput = document.getElementById("todoInput");
  const todoText = todoInput.value.trim();
  if (todoText === "") return;

  const todoList = document.getElementById("todoList");

  const listItem = document.createElement("li");
  listItem.innerHTML = `
        <input type="checkbox" role="checkbox" onchange="toggleTodo(this)">
        <span>${todoText}</span>
        <button role="button" onclick="deleteTodo(this)">❌</button>
    `;
  todoList.appendChild(listItem);
  todoInput.value = "";
}

function toggleTodo(checkbox) {
  const listItem = checkbox.parentElement;
  listItem.classList.toggle("checked", checkbox.checked);
}

function deleteTodo(button) {
  const listItem = button.parentElement;
  listItem.remove();
}
