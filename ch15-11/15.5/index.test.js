const { addTodo, deleteTodoWithId } = require("./index");

describe("ToDo App", () => {
  test("追加", () => {
    const input = document.getElementById("new-todo");
    input.value = "aaa";
    addTodo();

    const todoList = document.getElementById("todo-list");
    expect(todoList.children.length).toBe(1);
    expect(todoList.children[0].querySelector("label").textContent).toBe("aaa");
  });

  test("チェック", () => {
    const input = document.getElementById("new-todo");
    input.value = "aaa";
    addTodo();

    const checkbox = document.querySelector('input[type="checkbox"]');
    checkbox.checked = true;
    toggleTodo(checkbox);

    const listItem = checkbox.parentElement;
    expect(listItem.classList.contains("checked")).toBe(true);
  });

  test("削除", () => {
    const input = document.getElementById("new-todo");
    input.value = "aaa";
    addTodo();

    const button = document.querySelector('button[role="button"]');
    deleteTodoWithId(1, button);

    const todoList = document.getElementById("todo-list");
    expect(todoList.children.length).toBe(0);
  });
});
