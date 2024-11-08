/**
 * ex06/index.js の続きを実装し Web Components を使った ToDo アプリを完成させなさい。
 * 補足: この問題では ToDo アプリ全体を 1 つの Web Components (<todo-app>) としたが
 * TodoMVC の例 のように複数の Web Components に分けて実装する方法も考えられる。
 * 出題範囲: 15.6
 */

const template = document.createElement("template");
template.innerHTML = `\
<style>
.completed {
  text-decoration: line-through;
}
</style>

<form id="new-todo-form">
  <input type="text" id="new-todo" placeholder="What needs to be done?" />
  <button>Add</button>
</form>
<ul id="todo-list"></ul>
`;

class TodoApp extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
    this.shadowRoot.appendChild(template.content.cloneNode(true));

    this.form = this.shadowRoot.querySelector("#new-todo-form");
    this.input = this.shadowRoot.querySelector("#new-todo");
    this.todoList = this.shadowRoot.querySelector("#todo-list");

    this.form.addEventListener("submit", (e) => {
      e.preventDefault();
      this.addTodo();
    });
  }

  addTodo() {
    //入力が空なら何も実施しない
    const todoText = this.input.value.trim();
    if (todoText === "") return;

    const li = document.createElement("li");
    li.textContent = todoText;

    this.todoList.appendChild(li);
    this.input.value = "";

    //このあと？
  }
}

customElements.define("todo-app", TodoApp);
