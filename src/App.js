import React from "react";
import TodoList from "./components/TodoList/TodoList";

function App() {

  let todos = [
    { id: 1, completed: false, title: 'купить хлеб' },
    { id: 2, completed: false, title: 'купить молоко' },
    { id: 3, completed: false, title: 'купить омывайку' }
  ]

  function onToggle(id) {
    todos = todos.map(todo => {
      if (todo.id === id) {
        todo.completed = !todo.completed
      }
      return todo
    })
  }

  return (
    <div className="wrapper">
      <h1>React todo</h1>
      <TodoList todos={todos} onToggle={onToggle} />
    </div>
  );
}

export default App;
