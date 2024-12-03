const form = document.querySelector("#new-todo-form");
const list = document.querySelector("#todo-list");
const input = document.querySelector("#new-todo");

document.addEventListener("DOMContentLoaded", async () => {
  try {
    const response = await fetch("http://localhost:3001/api/tasks", {
      mode: "cors",
      credentials: "include",
    });
    if (!response.ok) {
      throw new Error("タスクの取得に失敗しました");
    }
    const tasks = await response.json();
    // 成功したら取得したタスクを appendToDoItem で ToDo リストの要素として追加しなさい
    tasks.forEach((task) => appendToDoItem(task));
  } catch (error) {
    alert(error);
  }
});

form.addEventListener("submit", async (e) => {
  // TODO: ここで form のイベントのキャンセルを実施しなさい (なぜでしょう？)
  e.preventDefault();
  //理由：ページのリロードを防ぐため

  // 両端からホワイトスペースを取り除いた文字列を取得する
  const todo = input.value.trim();
  if (todo === "") {
    return;
  }

  // new-todo の中身は空にする
  input.value = "";

  try {
    const response = await fetch("http://localhost:3001/api/tasks", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      mode: "cors",
      credentials: "include",
      body: JSON.stringify({ name: todo }),
    });
    if (!response.ok) {
      throw new Error("タスクの作成に失敗しました");
    }
    const newTask = await response.json();
    // 成功したら作成したタスクを appendToDoItem で ToDo リストの要素として追加しなさい
    appendToDoItem(newTask);
  } catch (error) {
    alert(error);
  }
});

// API から取得したタスクオブジェクトを受け取って、ToDo リストの要素を追加する
function appendToDoItem(task) {
  // ここから #todo-list に追加する要素を構築する
  const elem = document.createElement("li");

  const label = document.createElement("label");
  label.textContent = task.name;
  label.style.textDecorationLine = "none";

  const toggle = document.createElement("input");
  toggle.type = "checkbox";
  toggle.checked = task.completed;
  toggle.addEventListener("change", async () => {
    // TODO: toggle が変化 (change) した際に API を呼び出してタスクの状態を更新し
    // 成功したら label.style.textDecorationLine を変更しなさい
    try {
      const response = await fetch(
        `http://localhost:3001/api/tasks/${task.id}`,
        {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
          },
          mode: "cors",
          credentials: "include",
          body: JSON.stringify({ completed: toggle.checked }),
        }
      );
      if (!response.ok) {
        throw new Error("タスクの更新に失敗しました");
      }
      label.style.textDecorationLine = toggle.checked ? "line-through" : "none";
    } catch (error) {
      alert(error);
    }
  });

  const destroy = document.createElement("button");
  // TODO: destroy がクリック (click) された場合に API を呼び出してタスク を削除し
  destroy.textContent = "削除";
  destroy.addEventListener("click", async () => {
    try {
      const response = await fetch(
        `http://localhost:3001/api/tasks/${task.id}`,
        {
          method: "DELETE",
          mode: "cors",
          credentials: "include",
        }
      );
      if (!response.ok) {
        throw new Error("タスクの削除に失敗しました");
      }
      // 成功したら elem を削除しなさい
      elem.remove();
    } catch (error) {
      alert(error);
    }
  });

  // TODO: elem 内に toggle, label, destroy を追加しなさい
  elem.appendChild(toggle);
  elem.appendChild(label);
  elem.appendChild(destroy);
  list.prepend(elem);

  console.log(document.cookie);
}
