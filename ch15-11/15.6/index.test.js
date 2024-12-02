describe("ToDo App", () => {
  test("追加", () => {
    const todoInput = document.getElementById("new-todo");
    todoInput.value = "aaa";
    document.querySelector('button[type="submit"]').click();

    const todoList = document.getElementById("todo-list");
    expect(todoList.children.length).toBe(1);
    expect(todoList.children[0].querySelector("label").textContent).toBe("aaa");
  });

  test("sessionStorageに保存", () => {
    const todoInput = document.getElementById("new-todo");
    todoInput.value = "aaa";
    document.querySelector('button[type="submit"]').click();

    const todos = JSON.parse(sessionStorage.getItem("todos"));
    expect(todos.length).toBe(1);
    expect(todos[0].text).toBe("aaa");
  });

  test("sessionStorageから読み出し", () => {
    const todos = [{ text: "aaa", checked: false }];
    sessionStorage.setItem("todos", JSON.stringify(todos));

    dom.window.dispatchEvent(new dom.window.Event("DOMContentLoaded"));

    const todoList = document.getElementById("todo-list");
    expect(todoList.children.length).toBe(1);
    expect(todoList.children[0].querySelector("label").textContent).toBe("aaa");
  });

  test("削除", () => {
    const todoInput = document.getElementById("new-todo");
    todoInput.value = "aaa";
    document.querySelector('button[type="submit"]').click();

    const deleteButton = document.querySelector('button[role="button"]');
    deleteButton.click();

    const todoList = document.getElementById("todo-list");
    expect(todoList.children.length).toBe(0);
  });
});
