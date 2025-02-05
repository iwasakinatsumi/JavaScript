import React, { useState } from "react"
import "./App.css"

const TodoApp = () => {
  const [todos, setTodos] = useState([])
  const [newTodo, setNewTodo] = useState("")

  // ToDoの追加
  const addTodo = () => {
    if (newTodo.trim() === "") return

    const newTodoItem = {
      id: Date.now(),
      text: newTodo,
      completed: false,
    }

    setTodos([...todos, newTodoItem])
    setNewTodo("")
  }

  // ToDoの完了/未完了をトグル
  const toggleTodo = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo,
      ),
    )
  }

  // ToDoの削除
  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id))
  }

  return (
    <div>
      <input
        type="text"
        id="new-todo"
        value={newTodo}
        onChange={(e) => setNewTodo(e.target.value)}
        placeholder="新しいToDoを追加"
      />
      <button onClick={addTodo}>追加</button>

      <ul id="todo-list">
        {todos.map((todo) => (
          <li key={todo.id} className={todo.completed ? "checked" : ""}>
            <div>
              <input
                type="checkbox"
                role="checkbox"
                checked={todo.completed}
                onChange={() => toggleTodo(todo.id)}
              />
              <label>{todo.text}</label>
              <button role="button" onClick={() => deleteTodo(todo.id)}>
                ❌
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default TodoApp
