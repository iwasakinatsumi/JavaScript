// ex11 の続きを実装し、完了または未完了の ToDo のみ表示できるような ToDo アプリを完成させなさい。
// 補足: // ここを実装してね 以外の実装を変更してもよい。ToDo の完了や削除を Active や Completed 画面に反映させるためには、それぞれの操作に対するイベントリスナーも修正する必要がある。
// 参考: 完成後のイメージは以下:

// 出題範囲: 15.10

const form = document.querySelector("#new-todo-form");
const list = document.querySelector("#todo-list");
const input = document.querySelector("#new-todo");
const template = document.querySelector("#todo-template");

// { content: "...", completed: true or false } の配列
const todos = [];

function renderTodos(todos) {
  list.innerHTML = "";
  todos.forEach((todo, index) => {
    const clone = template.content.cloneNode(true);
    const li = clone.querySelector("li");
    const toggle = clone.querySelector("input");
    const label = clone.querySelector("label");
    const destroy = clone.querySelector("button");

    li.classList.toggle("completed", todo.completed);
    toggle.addEventListener("change", () => {
      todo.completed = toggle.checked;
      renderTodos(todos);
    });
    label.textContent = todo.content;
    toggle.checked = todo.completed;
    destroy.addEventListener("click", () => {
      todos.splice(index, 1);
      renderTodos(todos);
    });

    list.appendChild(li);
  });
}

form.addEventListener("submit", (e) => {
  e.preventDefault();
  if (input.value.trim() === "") {
    return;
  }
  const todo = input.value.trim();
  input.value = "";

  todos.push({ content: todo, completed: false });
  renderTodos(todos);
});

window.addEventListener("hashchange", () => {
  // ここを実装してね
  const hash = window.location.hash;

  // 現在のハッシュに基づいて表示するタスクをフィルタリング
  const filteredTodos = todos.filter((todo) => {
    if (hash === "#/completed") {
      return todo.completed; // completed が true のもののみ
    } else if (hash === "#/active") {
      return !todo.completed; // completed が false のもののみ
    }
    return true; // デフォルトは全部
  });

  renderTodos(filteredTodos); // フィルタされたタスクを表示
});
