const { addTodo, deleteTodoWithId } = require("./index");

describe("ToDo App", () => {
  beforeEach(() => {
    document.body.innerHTML = `
      <form id="new-todo-form">
        <input type="text" id="new-todo" />
        <button type="submit">Add</button>
      </form>
      <ul id="todo-list"></ul>
    `;
  });

  test("should add a new todo", () => {
    const input = document.getElementById("new-todo");
    input.value = "aaa";
    addTodo();

    const todoList = document.getElementById("todo-list");
    expect(todoList.children.length).toBe(1);
    expect(todoList.children[0].querySelector("label").textContent).toBe("aaa");
  });

  test("should toggle todo completion", () => {
    const input = document.getElementById("new-todo");
    input.value = "aaa";
    addTodo();

    const checkbox = document.querySelector('input[type="checkbox"]');
    checkbox.checked = true;
    toggleTodo(checkbox);

    const listItem = checkbox.parentElement;
    expect(listItem.classList.contains("checked")).toBe(true);
  });

  test("should delete a todo", () => {
    const input = document.getElementById("new-todo");
    input.value = "aaa";
    addTodo();

    const button = document.querySelector('button[role="button"]');
    deleteTodoWithId(1, button);

    const todoList = document.getElementById("todo-list");
    expect(todoList.children.length).toBe(0);
  });
});
